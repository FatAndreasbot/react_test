import { configureStore } from "@reduxjs/toolkit";
import clockDataReducer from './timezones'
import counterReducer from "./counter"

export const store = configureStore({
	reducer: {
		clockData: clockDataReducer,
		counter: counterReducer
	}
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch