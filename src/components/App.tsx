import { useState } from 'react'
import '../styles/App.css'
import { GetTimezones } from '../lib/remoteData'
import { Timezone } from '../lib/types'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={async () => {
          let timezones: Timezone[]
          try{
            timezones = await GetTimezones()
          } catch(e){
            console.log("something went wrong")
            console.log(e)
            return
          }

          console.log(timezones)

        }}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.tsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  )
}

export default App
