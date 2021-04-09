import { useEffect, useState } from 'react'

import { generateMatrices, cpuMultiplyMatrixAsync } from '../logic/logic'

function CPUOnly() {
  const [cpu, setCpu] = useState('null')

  useEffect(() => {
    const size = 500
    const matrices = generateMatrices(size)
    cpuMultiplyMatrixAsync(matrices, size).then(result => setCpu(result))
  }, [])

  return (
    <div className='App'>
      CPU in separated Component
      <div>CPU TIME:{cpu && cpu}</div>
      <hr />
    </div>
  )
}

export default CPUOnly
