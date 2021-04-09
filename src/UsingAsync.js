import { useEffect, useState } from 'react'

import { generateMatrices, gpuMultiplyMatrixAsync, cpuMultiplyMatrixAsync } from './logic/logic'

function Async() {
  const [gpu, setGpu] = useState('null')
  const [cpu, setCpu] = useState('null')

  useEffect(() => {
    const size = 500
    const matrices = generateMatrices(size)
    gpuMultiplyMatrixAsync(matrices, size).then(result => setGpu(result))
    cpuMultiplyMatrixAsync(matrices, size).then(result => setCpu(result))
  }, [])

  return (
    <div>
      Asynchronous Calls
      <div>GPU TIME:{gpu && gpu}</div>
      <div>CPU TIME:{cpu && cpu}</div>
      The same thing as the Synchronous call happens; <br />
      React still waits for the CPU calc to finish
      <hr />
    </div>
  )
}

export default Async
