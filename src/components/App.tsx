import { useDispatch, useSelector } from 'react-redux'
import '../styles/App.css'
import { RootState } from '../lib/state/store'
import { Button, FormGroup, Grid2, TextField } from '@mui/material'
import { decrement, increment } from '../lib/state/counter'

function App() {
  const count = useSelector((state: RootState) => state.counter.value)
  const dispatch = useDispatch();
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
      {[...Array(count)].map(() => {
        return (
          <Grid2 size={3}>
              clock
          </Grid2>
        )
      })}
      </Grid2>
    </>
  )
}

export default App
