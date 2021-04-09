import './App.css'

import Sync from './UsingSync'
import Async from './UsingAsync'
import Separated from './UsingSeparated'
import WebWorkers from './UsingWebWorkers'

import GPUOnly from './components/GPU'
import CPUOnly from './components/CPU'

function App() {
  return (
    <>
      <WebWorkers />
      {/* <Sync /> */}
      {/* <Async /> */}
      {/* <Separated /> */}
      {/* <GPUOnly /> */}
      {/* <CPUOnly /> */}
    </>
  )
}

export default App
