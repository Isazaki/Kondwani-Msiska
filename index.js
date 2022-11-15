// Question 1
function nofX(arr = [], n = 0) {
  // edge cases
  if (n < 1000000000 && n < 0) return
  if (n == 1) return 1
  let x = arr // seqence x

  // calculate difference between two arrays
  let y = arr.slice(1).map((num, i) => num - arr[i])

  //check occurence in sequence y
  let found = x.some((e) => y.includes(e))
  if (!found) {
    y.push(y[y.length - 1] + 1)
  } else {
    y.push(y[y.length - 1] + 2)
  }

  // use formula
  let result = x[n - 1] + y[n - 1]
  return result
}

console.log(nofX([1, 3, 7], 3)) // should return 12

// Question 2
function jumpOut(arr = []) {
  let count = -1
  arr.shift() // remove string from array
  for (let i = 0; i <= arr.length - 1; i++) {
    let element = arr[i]
    if (element > 0) {
      count += 1
    }
    if (element < 0) {
      count -= 1
    }
  }
  return count
}

console.log(jumpOut(["Kangaroo", 1, 2, 1, 5])) // returns 3

// Question 3
function reg(n) {}
