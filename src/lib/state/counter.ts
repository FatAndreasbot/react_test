import { createSlice } from "@reduxjs/toolkit";

interface counterState {
	value: number
}

const initialCounter: counterState = {
	value: 0
}

const counterSlice = createSlice({
	name: "clock_counter",
	initialState: initialCounter,
	reducers: {
		increment: (state) => { if (state.value < 10) state.value += 1 },
		decrement: (state) => { if (state.value > 0)  state.value -= 1 }
	}
})

export default counterSlice.reducer
export const { increment, decrement } = counterSlice.actions