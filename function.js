const toast=document.getElementById("alert");

 const alertsss=(msg,Option) =>{
toast.style.right="0%"
toast.children[0].innerHTML=msg;
toast.children[1].addEventListener('click',()=>{
    toast.style.right="100%"
});
setTimeout(function(){
    toast.style.right="-100%"

},Option.time || 3000)
 }


const todoTitle = document.getElementById("title");
const todoDesc = document.getElementById("desc");
const todoMain = document.getElementById("main");



/////

const SavedLCTodos = localStorage.getItem("Todoslist")

//inja migim age     in qesmat undifind bud areye khali bar gardoon 
const parseLCtodos = JSON.parse(SavedLCTodos) || [];


const CreateNewTodo = (title,desc) =>{

    //in ja az tarigh js tag html ijad kardim

const listItem =document.createElement("li");
const todoTIitleHeading =document.createElement("h3");
const todoDescPara =document.createElement("p");
todoTIitleHeading.innerHTML=title;
todoDescPara.innerHTML=desc;
listItem.appendChild(todoTIitleHeading);
listItem.appendChild(todoDescPara);

const todoAction =`
<div>
<button>Del</button>
<button>Edit</button>
<button>Update</button>
</div>
`
todoMain.appendChild(listItem);
listItem.innerHTML+=todoAction;


}


let saveTodo=[...parseLCtodos];


////
    
//handle add new todo 
saveTodo.forEach(todo=> CreateNewTodo(todo.title,todo.desc))
export const handleCraeteNewTodo = (event) => {
    event.preventDefault();
    if(!(todoTitle.value || todoDesc.value) ) {return alertsss("لطفن جای خالی را پر بفرمایید!",{time: "5000",type:"warn"});}
    const newTodo = {
        title: todoTitle.value,
        desc: todoDesc.value,
    };
    saveTodo.push(newTodo)
    
    localStorage.setItem("Todoslist",JSON.stringify(saveTodo))
   

CreateNewTodo(newTodo.title,newTodo.desc)




// inja ba shiveye dige kare payino kardim

//    const newtodolist =
//    `<li>
//    <h3>${newTodo.title}</h3>
//    <p>${newTodo.desc}</p>
//     </li>`;
    
// console.log(newTodo,newtodolist);
// todoMain.innerHTML+=newtodolist 








 




};




