import { useSelector } from 'react-redux'
import { RootState } from '../lib/state/store'
import { Grid2 } from '@mui/material'
import { Clock } from './clock'




export default function ClockArray() {
	const count = useSelector((state: RootState) => state.counter.value)
	const tzData = useSelector((state: RootState) => state.clockData.tzData)

	if (tzData.length == 0) {
		return <p>loading</p>
	}

	return <>
		{[...Array(count)].map((_,i) => {
			return (
				<Grid2 size={4} key={i}>
					<Clock id={i}/>
				</Grid2>
			)
		})}
	</>
}