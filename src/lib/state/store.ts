import { configureStore } from "@reduxjs/toolkit";
import timezoneReducer from './timezones'
import counterReducer from "./counter"

export const store = configureStore({
	reducer: {
		timezone: timezoneReducer,
		counter: counterReducer
	}
})

export type RootState = ReturnType<typeof store.getState>