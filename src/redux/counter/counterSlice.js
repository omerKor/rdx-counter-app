import { createSlice } from "@reduxjs/toolkit";

export const counterSlice = createSlice({
    name: 'counter',
    initialState: {
        value: 0
    },
    reducers: {
        increment: (state) => {
            state.value += 1;
        },
        decrement: (state) => {
            state.value -= 1;
        },
        incrementbyamount: (state, action) => {
            state.value += Number(action.payload);
        },
        decrementbyamount: (state, action) => {
            state.value -= Number(action.payload);
        }
    },
});

export const { increment, decrement, incrementbyamount, decrementbyamount } = counterSlice.actions;
export default counterSlice.reducer;