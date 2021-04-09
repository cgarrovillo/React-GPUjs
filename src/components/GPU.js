import { useEffect, useState } from 'react'

import { generateMatrices, gpuMultiplyMatrixAsync } from '../logic/logic'

function GPUOnly() {
  const [gpu, setGpu] = useState('null')

  useEffect(() => {
    const size = 500
    const matrices = generateMatrices(size)
    gpuMultiplyMatrixAsync(matrices, size).then(result => setGpu(result))
  }, [])

  return (
    <div className='App'>
      GPU in separated Component
      <div>{gpu && gpu}</div>
      <hr />
    </div>
  )
}

export default GPUOnly
