import { Timezone } from "./types";


export async function GetTimezones():Promise<Timezone[]> {

	// slowing the data fetching time on purpose
	await new Promise(resolve => setTimeout(resolve, 500))

	const resp = await fetch("/timezones.json");
	if (!resp.ok) {
		throw new Error(`could not load data.\nresponse code ${resp.status}`)
	}

	return resp.json()
}