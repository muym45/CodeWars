function cutCube(volume,n){
    let a = Math.cbrt(volume / n)
    let b = Math.cbrt(n)
    if(a % 1 === 0 && b % 1 === 0){
      return true
    } else return false
  }