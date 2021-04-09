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
  // const cpuProduct = product
  return cpuTime
}
