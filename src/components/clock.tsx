import { Autocomplete, TextField } from '@mui/material'
import { AppDispatch, RootState } from '../lib/state/store'
import { useSelector, useDispatch } from 'react-redux'
import { changeTimezone } from '../lib/state/timezones'




export function Clock({id}:{id:number}) {
  const tzData = useSelector((state: RootState) => state.clockData.tzData)
  const clockData = useSelector((state: RootState) => state.clockData.clocks)
  const dispatch = useDispatch<AppDispatch>()

  const tzAutocomplete = tzData.flatMap((tz, id) => tz.utc.map((utc) => {return {label:utc, tz_id:id}})).filter((v) => {
    return !tzData[v.tz_id].isdst
  })
  
  const tzID = clockData[id]
  console.log(clockData)
  return (
    <div>
      <h2>
        {tzData[tzID].text}
      </h2>
      <Autocomplete
      disablePortal
      options={tzAutocomplete}
      sx={{ width: 300 }}
      renderInput={(params) => <TextField {...params} label="Timezone" />}
      onChange={(_, val) => {
        if (val !== null){
          dispatch(changeTimezone({clockID:id, tzID:val.tz_id}))
        }
      }}
    />
    </div>
  )
}