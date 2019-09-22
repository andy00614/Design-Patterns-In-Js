const Type = {}

const type = ['String','Array','Number']

for(let i = 0; i < type.length; i++) {
  Type[`is${type[i]}`] = function(val) {
    return Object.prototype.toString.call(val) === `[object ${type[i]}]`
  }
}

console.log(Type.isString('abc'))
console.log(Type.isArray(123))
console.log(Type.isNumber(123))
console.log(Type.isArray([]))