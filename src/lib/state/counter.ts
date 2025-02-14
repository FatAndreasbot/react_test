import { createSlice } from "@reduxjs/toolkit";
import { MAX_AMMOUNT_OF_CLOCKS } from "../constants";

interface counterState {
	value: number
}

const initialCounter: counterState = {
	value: 1
}

const counterSlice = createSlice({
	name: "clock_counter",
	initialState: initialCounter,
	reducers: {
		increment: (state) => { if (state.value < MAX_AMMOUNT_OF_CLOCKS) state.value += 1 },
		decrement: (state) => { if (state.value > 0)  state.value -= 1 }
	}
})

export default counterSlice.reducer
export const { increment, decrement } = counterSlice.actions