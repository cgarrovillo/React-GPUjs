import './App.css'

import Sync from './Sync'
import Async from './Async'
import Separated from './Separated'

import GPUOnly from './components/GPU'
import CPUOnly from './components/CPU'

function App() {
  return (
    <>
      {/* <Sync /> */}
      {/* <Async /> */}
      {/* <Separated /> */}
      <GPUOnly />
      <CPUOnly />
    </>
  )
}

export default App
