import { useEffect, useState } from 'react'
import { generateMatrices, gpuMultiplyMatrix, cpuMultiplyMatrix } from './logic/logic'

function Sync() {
  const [gpu, setGpu] = useState('null')
  const [cpu, setCpu] = useState('null')

  useEffect(() => {
    const size = 500
    const matrices = generateMatrices(size)
    setGpu(gpuMultiplyMatrix(matrices, size))
    setCpu(cpuMultiplyMatrix(matrices, size))
  }, [])

  return (
    <div className='App'>
      Both CPU &amp; GPU Synchronous:
      <br />
      Whole page won't be rehydrated until CPU calc is done;
      <br />
      Even though GPU time was much faster, <br />
      React had to wait for CPU calc to finish before rehydrating/updating UI
      <div>{gpu && gpu}</div>
      <div>{cpu && cpu}</div>
      <hr />
    </div>
  )
}

export default Sync
