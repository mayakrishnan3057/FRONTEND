let addcart=()=>{
    let a=["orange"]
  let  newcart=(aa)=>{
a.splice(a.length+1,0,aa)
console.log(a);

    }
return newcart
}
let shop =addcart()
shop("apple")