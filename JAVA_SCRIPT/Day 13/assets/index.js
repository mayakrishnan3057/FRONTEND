const title = document.getElemenyById("title")
const button = document.getElemenyById("btn")

button.addEventListerner('click',()=>
      title.innerHTML="Hello World"
      console.log(title);
      

)

