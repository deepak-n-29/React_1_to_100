import { create } from "zustand";
import counterSlice from "./slices/counterSlice";
import productSlice from "./slices/productSlice";
import cartSlice from "./slices/cartSlice";
import { devtools, persist } from "zustand/middleware";

const useGlobalStore = create(devtools(persist((...a)=> ({
    ...counterSlice(...a),
    ...productSlice(...a),
    ...cartSlice(...a),
}))
))

export default useGlobalStore;
