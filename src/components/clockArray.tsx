import { useSelector } from 'react-redux'
import { RootState } from '../lib/state/store'
import { Grid2 } from '@mui/material'
import { Clock } from './clock'




export default function ClockArray() {
	const count = useSelector((state: RootState) => state.counter.value)
	const tzData = useSelector((state: RootState) => state.timezone.value)

	if (tzData.length == 0) {
		return <p>loading</p>
	}

	return <>
		{[...Array(count)].map(() => {
			return (
				<Grid2 size={3}>
					<Clock />
				</Grid2>
			)
		})}
	</>
}