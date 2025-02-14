import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { Timezone } from "../types";
import { GetTimezones } from "../remoteData";

interface downloadedTimezonesState {
	value: Timezone[]
}

const initialDownloadedTimezones: downloadedTimezonesState = {
	value: []
}

const downloadedTimezonesSlice = createSlice({
	name: "tz_slice",
	initialState: initialDownloadedTimezones,
	reducers: {},
	extraReducers: (builder) => {
		builder.addCase(SetList.fulfilled, (state, action) => {
			state.value = action.payload
		})
	}
})

export const SetList = createAsyncThunk(
	"tz_slice/download",
	async () => {
		return await GetTimezones()
	}
)

export default downloadedTimezonesSlice.reducer