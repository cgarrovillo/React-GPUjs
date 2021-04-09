import { GPU } from 'gpu.js'

export function gpuMultiplyMatrix(matrices, matrixSize) {
  const gpu = new GPU({
    mode: 'gpu',
  })
  const multiplyMatrix = gpu
    .createKernel(function (a, b, matrixSize) {
      let sum = 0

      for (let i = 0; i < matrixSize; i++) {
        sum += a[this.thread.y][i] * b[i][this.thread.x]
      }
      return sum
    })
    .setOutput([matrixSize, matrixSize])

  const startTime = performance.now()

  multiplyMatrix(matrices[0], matrices[1], matrixSize)

  const endTime = performance.now()
  const gpuTime = endTime - startTime + ' ms'

  console.log('GPU TIME : ' + gpuTime)
  //   const gpuProduct = resultMatrix
  return gpuTime
}
