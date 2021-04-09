import { GPU } from 'gpu.js'

export function generateMatrices(matrixSize) {
  const matrices = [[], []]

  for (let y = 0; y < matrixSize; y++) {
    matrices[0].push([])
    matrices[1].push([])

    for (let x = 0; x < matrixSize; x++) {
      const value1 = parseInt((Math.random() * 10).toString())
      const value2 = parseInt((Math.random() * 10).toString())
      matrices[0][y].push(value1)
      matrices[1][y].push(value2)
    }
  }

  return matrices
}

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
  const resultMatrix = multiplyMatrix(matrices[0], matrices[1], matrixSize)

  const endTime = performance.now()
  const gpuTime = endTime - startTime + ' ms'

  console.log('GPU TIME : ' + gpuTime)
  //   const gpuProduct = resultMatrix
  return gpuTime
}

export function cpuMultiplyMatrix(matrices, matrixSize) {
  const startTime = performance.now()
  const a = matrices[0]
  const b = matrices[1]
  let productRow = Array.apply(null, new Array(matrixSize)).map(Number.prototype.valueOf, 0)
  let product = new Array(matrixSize)

  for (let p = 0; p < matrixSize; p++) {
    product[p] = productRow.slice()
  }

  for (let i = 0; i < matrixSize; i++) {
    for (let j = 0; j < matrixSize; j++) {
      for (let k = 0; k < matrixSize; k++) {
        product[i][j] += a[i][k] * b[k][j]
      }
    }
  }
  const endTime = performance.now()
  const cpuTime = endTime - startTime + 'ms'
  console.log('CPU TIME : ' + cpuTime)
  const cpuProduct = product
  return cpuTime
}

/**
 *
 * Async
 *
 */
export async function gpuMultiplyMatrixAsync(matrices, matrixSize) {
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
  const resultMatrix = multiplyMatrix(matrices[0], matrices[1], matrixSize)

  const endTime = performance.now()
  const gpuTime = endTime - startTime + ' ms'

  console.log('GPU TIME : ' + gpuTime)
  //   const gpuProduct = resultMatrix
  return gpuTime
}

export async function cpuMultiplyMatrixAsync(matrices, matrixSize) {
  const startTime = performance.now()
  const a = matrices[0]
  const b = matrices[1]
  let productRow = Array.apply(null, new Array(matrixSize)).map(Number.prototype.valueOf, 0)
  let product = new Array(matrixSize)

  for (let p = 0; p < matrixSize; p++) {
    product[p] = productRow.slice()
  }

  for (let i = 0; i < matrixSize; i++) {
    for (let j = 0; j < matrixSize; j++) {
      for (let k = 0; k < matrixSize; k++) {
        product[i][j] += a[i][k] * b[k][j]
      }
    }
  }
  const endTime = performance.now()
  const cpuTime = endTime - startTime + 'ms'
  console.log('CPU TIME : ' + cpuTime)
  const cpuProduct = product
  return cpuTime
}
