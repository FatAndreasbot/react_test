import { Autocomplete, TextField } from '@mui/material'
import { AppDispatch, RootState } from '../lib/state/store'
import { useSelector, useDispatch } from 'react-redux'
import { changeTimezone } from '../lib/state/timezones'
import { useState } from 'react'
import { MAX_AMMOUNT_OF_CLOCKS } from '../lib/constants'




export function ClockContainer({id}:{id:number}) {
  const tzData = useSelector((state: RootState) => state.clockData.tzData)
  const clockData = useSelector((state: RootState) => state.clockData.clocks)
  const dispatch = useDispatch<AppDispatch>()

  const disallowedTZ = Array.from({length:MAX_AMMOUNT_OF_CLOCKS}, (_, i) => {return clockData[i]})
  
  const tzAutocomplete = tzData.flatMap((tz, id) => tz.utc.map((utc) => {return {label:utc, tz_id:id}})).filter((v) => {
    return !tzData[v.tz_id].isdst
  }).filter((v, _) => {return !disallowedTZ.includes(v.tz_id)})

  const selectElement = <Autocomplete
  disablePortal
  options={tzAutocomplete}
  sx={{ width: "100%" }}
  renderInput={(params) => <TextField {...params} label="Timezone" />}
  onChange={(_, val) => {
    if (val !== null){
      dispatch(changeTimezone({clockID:id, tzID:val.tz_id}))
    }
  }}
  />
  
  const tz = tzData[clockData[id]]

  let time = new Date()
  const [ctime, setTime] = useState(time)
  const UpdateTime = () => {
    time = new Date()
    setTime(time)
  }

  if (clockData[id] === -1){
    return (
      <div>
        <h2>
          pick a timezone
        </h2>
        {selectElement}
      </div>
    )
  }

  setInterval(UpdateTime)

  let hours = ctime.getUTCHours() + Math.floor(tz.offset)
  let minutes = ctime.getUTCMinutes() + 60 * (tz.offset - Math.floor(tz.offset))
  const seconds = ctime.getUTCSeconds()

  if (hours < 0) hours += 24
  if (minutes >= 60) {
    minutes -= 60
    hours ++
  }

  return (
    <div>
      <h2>
        {`${hours}:${minutes}:${seconds}`}
      </h2>
      <p>{tz.text}</p>
      {selectElement}
    </div>
  )
}