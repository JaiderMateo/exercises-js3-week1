let prom = new Promise((resolve , reject)=>{
  let a = 1 + 2;
  if (a == 2){
    resolve('Success')
  }else {
    reject('Failed')
  }
})

prom.then((message)=>{
  console.log(`this is in the then ${message}`)
}).catch((message)=>{
  console.log(`this is in the cathc ${message}`)
})