const firstnum = document.getElementById("firstNum")
const secondnum = document.getElementById("secondNum")
const add = document.getElementById("add")
const sub = document.getElementById("sub")
const mulit = document.getElementById("mult")
const div = document.getElementById("div")

const arr = []


add.addEventListener('click',()=>{
    let ans = Number(firstnum.value) + Number(secondnum.value);
   arr.push(ans);

    console.log("Answer:", ans);
    console.log("Array:", arr);
})


