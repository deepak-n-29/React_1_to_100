import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import products from "../../shopping/data/products";
import axios from "axios";

const initialState = {
    status: 'idle',
    error: null,
    items: []
}

export const fetchProducts = createAsyncThunk("productsSlice/fetchProducts", 
    async (args, thunkAPI) => {
        const response =  await axios.get("https://dummyjson.com/products");
        const products = response.data.products;
        // const count = thunkAPI.getState().counter.count; // demonstration of accessing different slice state using thunkAPI
        // console.log("Count from thunkAPI:", count); 
        return products;
    }
);

const productsSlice = createSlice({
    name: "productsSlice",
    initialState,
    reducers: {
        initProducts: (state, action) => {
            console.log(action.payload);
        }
    },
    extraReducers: (builder) => {
        builder
        .addCase(fetchProducts.fulfilled, (state, action) => {
            state.items = action.payload;
            state.status = 'fulfilled';
            console.log("Products fetched successfully:", action.payload);
        })
        .addCase(fetchProducts.pending, (state) => {
            state.status = 'loading';
            console.log("Loading products...");
        })
        .addCase(fetchProducts.rejected, (state, action) => {
            state.status = 'failed';
            state.error = action.error.message;
            console.error("Failed to fetch products:", action.error);
        });
    }
});

export default productsSlice.reducer