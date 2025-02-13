import { createSlice } from "@reduxjs/toolkit";
import { Timezone } from "../types";
import { GetTimezones } from "../remoteData";

interface downloadedTimezonesState {
	value: Timezone[]
}

const initialDownloadedTimezones: downloadedTimezonesState = {
	value: []
}

const downloadedTimezonesSlice = createSlice({
	name: "downloaded_tz",
	initialState: initialDownloadedTimezones,
	reducers: {
		GetData: (state) => {
			if (state.value.length > 0) {
				GetTimezones().then((list) => { state.value = list })
			}
		}
	}
})

export default downloadedTimezonesSlice.reducer
export const { GetData } = downloadedTimezonesSlice.actions