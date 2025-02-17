import React from 'react';
import { useDispatch, useSelector } from 'react-redux'
import { AppDispatch, RootState } from '../lib/state/store'
import { Button, FormGroup, Grid2, TextField } from '@mui/material'
import { decrement, increment } from '../lib/state/counter'
import ClockArray from './clockArray'
import { SetList } from '../lib/state/timezones'

function App() {
  const count = useSelector((state: RootState) => state.counter.value)
  const tzData = useSelector((state: RootState) => state.clockData.tzData)
  const dispatch = useDispatch<AppDispatch>();

  if (tzData.length === 0) {
    dispatch(SetList())
  }

  return (
    <>
      <h1>Clocks 'round the world</h1>
      <div style={{ display: "flex", justifyContent: "center" }}>
        <FormGroup row>
          <Button onClick={() => dispatch(decrement())}> - </Button>
          <TextField value={count} />
          <Button onClick={() => dispatch(increment())}> + </Button>
        </FormGroup>
      </div>
      <Grid2 container spacing={2}>
        <ClockArray />
      </Grid2>
    </>
  )
}

export default App
