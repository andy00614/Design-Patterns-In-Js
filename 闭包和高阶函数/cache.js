const cache = new Map()

function mult() {
  if(cache.has([...arguments])) {
    return cache[args]
  }
  cache.set([...arguments],[...arguments].reduce((pre,cur) => pre * cur,1))
  console.log(cache)
  return cache.get([...arguments])
}

console.log(mult(1,2,3,4))
