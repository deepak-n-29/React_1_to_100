import { configureStore } from "@reduxjs/toolkit"

const initialState = {
  count: 0,
}

export const COUNTER_ACTION_TYPES = {
    INCREMENT: 'INCREMENT',
    DECREMENT: 'DECREMENT',
    RESET: 'RESET',
}

function counterReducer(state = initialState, action) {
    switch (action.type) {
        case COUNTER_ACTION_TYPES.INCREMENT:
            
            return { ...state, count: state.count + 1 }
        case COUNTER_ACTION_TYPES.DECREMENT:
            const payload = action.payload
            console.log(payload) // optional payload
            return { ...state, count: state.count - payload.arr[1] }
        case COUNTER_ACTION_TYPES.RESET:
            return { ...state, count: 0 }
        default:
            return state
    }
}



export default counterReducer