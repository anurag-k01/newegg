function funn(p, q) {
    if(p-2>10){
        return 1
    }
    else {
        return 1+ funn()
  }
}
console.log(funn(6,3))