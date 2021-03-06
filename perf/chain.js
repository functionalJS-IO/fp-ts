var Benchmark = require('benchmark')

const suite = new Benchmark.Suite()

var { replicateUntil } = require('./helper.js')
const arr = replicateUntil([1, 2, 3], 50)

const chain = (arr, f) => {
  return arr.reduce((acc, a) => concatRef(acc, f(a)), [])
}

const chain2 = (arr, f) => {
  let totalLength = 0
  const len = arr.length
  const tempo = new Array(len)
  for (let i = 0; i < len; i++) {
    const e = arr[i]
    const newArr = f(e)
    totalLength += newArr.length
    tempo[i] = newArr
  }
  const res = Array(totalLength)
  let start = 0
  for (let i = 0; i < len; i++) {
    const currArr = tempo[i]
    const currLen = currArr.length
    for (let j = 0; j < currLen; j++) {
      res[j + start] = currArr[j]
    }
    start += currLen
  }
  return res
}

const concatRef = (x, y) => {
  const lenx = x.length
  const leny = y.length
  const r = Array(lenx + leny)
  for (let i = 0; i < lenx; i++) {
    r[i] = x[i]
  }
  for (let i = 0; i < leny; i++) {
    r[i + lenx] = y[i]
  }
  return r
}

suite
  .add('chain1', function() {
    chain(arr, x => arr)
  })
  .add('chain2', function() {
    chain2(arr, x => arr)
  })
  .on('cycle', function(event) {
    console.log(String(event.target))
  })
  .on('complete', function() {
    console.log('Fastest is ' + this.filter('fastest').map('name'))
  })
  .run({ async: true })
