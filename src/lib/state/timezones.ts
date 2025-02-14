import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Timezone } from "../types";
import { GetTimezones } from "../remoteData";
import { MAX_AMMOUNT_OF_CLOCKS } from "../constants";

interface clockDataState {
	tzData: Timezone[],
	clocks: number[]
}

const initialclockData: clockDataState = {
	tzData: [],
	clocks: Array.apply(null, Array(MAX_AMMOUNT_OF_CLOCKS)).map(() => 0)
}

const clockDataSlice = createSlice({
	name: "tz_slice",
	initialState: initialclockData,
	reducers: {
		changeTimezone: (state, action:PayloadAction<{clockID:number, tzID:number}>) => {
			if (action.payload.clockID > MAX_AMMOUNT_OF_CLOCKS || action.payload.clockID < 0)
				return
			if (action.payload.tzID > state.tzData.length || action.payload.tzID < 0)
				return

			state.clocks[action.payload.clockID] = action.payload.tzID
		}
	},
	extraReducers: (builder) => {
		builder.addCase(SetList.fulfilled, (state, action) => {
			state.tzData = action.payload
		})
	}
})

export const SetList = createAsyncThunk(
	"tz_slice/download",
	async () => {
		return await GetTimezones()
	}
)

export const {changeTimezone} = clockDataSlice.actions

export default clockDataSlice.reducer