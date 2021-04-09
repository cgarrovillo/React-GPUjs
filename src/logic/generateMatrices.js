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
