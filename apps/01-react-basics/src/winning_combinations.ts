const size = 3

const winning_combinations = []

const diagonal_1 = []
const diagonal_2 = []
for (let j = 0; j < size; j++) {
  diagonal_1.push({ row: j, col: j })
  diagonal_2.push({ row: size - j - 1, col: size - j - 1 })
}
winning_combinations.push(diagonal_1)
winning_combinations.push(diagonal_2)

for (let i = 0; i < size; i++) {
  const combRow = []
  const combCol = []

  for (let j = 0; j < size; j++) {
    combRow.push({ row: i, col: j })
    combCol.push({ row: j, col: i })
  }

  winning_combinations.push(combRow)
  winning_combinations.push(combCol)
}

export default winning_combinations
