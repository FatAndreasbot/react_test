import React, { useState } from 'react';
import { useSelector } from 'react-redux'
import { RootState } from '../lib/state/store'
import { Grid2 } from '@mui/material'
import { ClockContainer } from './clockContainer'




export default function ClockArray() {
	const count = useSelector((state: RootState) => state.counter.value)
	const tzData = useSelector((state: RootState) => state.clockData.tzData)

	let time = new Date()
	const [ctime, setTime] = useState(time)
	
	const UpdateTime = () => {
		time = new Date()
		setTime(time)
	}

	setInterval(UpdateTime)

	if (tzData.length == 0) {
		return <p>loading</p>
	}

	return <>
		{[...Array(count)].map((_,i) => {
			return (
				<Grid2 size={4} key={i}>
					<ClockContainer id={i} time={ctime}/>
				</Grid2>
			)
		})}
	</>
}