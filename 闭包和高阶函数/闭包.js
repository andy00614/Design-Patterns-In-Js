{
  // 变量的生命周期
  // 局部变量a的词法作用域是一个匿名函数，该环境能被外部引用，就有了不被销毁的理由，所以不会被销毁
  function func() {
    let a = 1
    return function () {
      a++
      console.log(a)
    }
  }
  const f = func()
  f()
  f()
  f()
  f()
  f()
}