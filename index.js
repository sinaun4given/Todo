import {handleCraeteNewTodo } from "./function.js";
import "./function.js"

const todoSubmit = document.getElementById("submit");
todoSubmit.addEventListener('click', handleCraeteNewTodo)



// document.querySelectorAll('button').forEach(function(item,index){
//     item.addEventListener('click',()=>{
//         console.log(item.innerText)
//         document.getElementById("test").value += index
       
//     })
// })

