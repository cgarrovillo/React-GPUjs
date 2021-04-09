import { useEffect, useState } from 'react'
import { createWorkerFactory, useWorker } from '@shopify/react-web-worker'

import { generateMatrices } from './logic/logic'

const createWorker1 = createWorkerFactory(() => import('./logic/gpuMultiplyMatrix'))
const createWorker2 = createWorkerFactory(() => import('./logic/cpuMultiplyMatrix'))

function WebWorkers() {
  const worker1 = useWorker(createWorker1)
  const worker2 = useWorker(createWorker2)
  const [gpu, setGpu] = useState('null')
  const [cpu, setCpu] = useState('null')

  useEffect(() => {
    const size = 500
    const matrices = generateMatrices(size)

    async function runTest() {
      const result1 = await worker1.gpuMultiplyMatrix(matrices, size)
      setGpu(result1)
      const result2 = await worker2.cpuMultiplyMatrix(matrices, size)
      setCpu(result2)
    }

    runTest()
  }, [worker1, worker2])

  return (
    <div>
      Web workers!
      <br />
      GPU compute time should finish and render before CPU
      <div>GPU TIME:{gpu && gpu}</div>
      <div>CPU TIME:{cpu && cpu}</div>
      <hr />
    </div>
  )
}

export default WebWorkers
