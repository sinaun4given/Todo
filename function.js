const toast=document.getElementById("alert");

 const alertsss=(msg,Option) =>{
toast.style.right="0%";
toast.children[0].innerHTML=msg;
toast.children[1].addEventListener('click',()=>{
    toast.style.right="100%";
});
setTimeout(function(){
    toast.style.right="-100%"

},Option.time || 3000)
 };


const todoTitle = document.getElementById("title");
const todoDesc = document.getElementById("desc");
const todoMain = document.getElementById("main");
 


/////
function getLocatedTodos(){
const SavedLCTodos = localStorage.getItem("Todoslist");
//inja migim age     in qesmat undifind bud areye khali bar gardoon 
 return JSON.parse(SavedLCTodos)?.sort((a,b)=> a.id-b.id)|| [];


}



const CreateNewTodo = (title,desc,id,cheked) =>{

    //in ja az tarigh js tag html ijad kardim

const listItem =document.createElement("li");
listItem.id=id;
listItem.className="list-item";
const todoTIitleHeading =document.createElement("input");
todoTIitleHeading.disabled=true;

todoTIitleHeading.defaultValue=title;

todoTIitleHeading.style.backgroundColor="orange"
if (cheked===true){
    
    todoTIitleHeading.style.backgroundColor="green"
  
}

const todoDescPara =document.createElement("p");
todoDescPara.style.color="white";
todoTIitleHeading.innerHTML=title;
todoDescPara.innerHTML=desc;
listItem.appendChild(todoTIitleHeading);
listItem.appendChild(todoDescPara);

const todoAction =`
<div>
<button >Del</button>
<button>Edit</button>
<button>Update</button>
</div>
`

todoMain.appendChild(listItem);
listItem.innerHTML+=todoAction;


}


let saveTodo=[...getLocatedTodos()];


////

//handel delet 

todoMain.addEventListener("click",(e) =>{
    if(e.target.innerText==="Del"){
        const todoEl =e.target.parentElement.parentElement;
        console.log(todoEl.id);
        const filtredTodos = getLocatedTodos().filter(
            (item) => item.id !== Number(todoEl.id));
            
            localStorage.setItem("Todoslist",JSON.stringify(filtredTodos));
            todoMain.innerHTML="";
            renderTodosElements()
            
     }


     else if(e.target.innerText === "Update"){
         //get li element
        const todoEl =e.target.parentElement.parentElement;
        //get our todo in localstoreg with id
        const filtredTodo = getLocatedTodos().filter((item) => item.id === Number(todoEl.id));
           //update our todo in local witj id
        const updateFiltredTodo = {...filtredTodo[0], cheked:true };
//delet our todo from local
        const filtredTodos =getLocatedTodos().filter((item) => item.id !== Number(todoEl.id))
//update local with update todo
            const updateSaveTodos=[...filtredTodos,updateFiltredTodo]
            todoEl.children[0].style.backgroundColor="green"
            localStorage.setItem("Todoslist",JSON.stringify(updateSaveTodos));
            todoMain.innerHTML=""
            renderTodosElements();
            
           
            }
    else if(e.target.innerText === "Edit"){
        const todoEl =e.target.parentElement.parentElement;
        todoEl.children[0].disabled=false;
        todoEl.children[0].select();

        e.target.innerText="Save"
        e.target.addEventListener("click", () =>{
            todoEl.children[0].disabled=true;
           
            
            const filtredTodo = getLocatedTodos().filter((item) => item.id === Number(todoEl.id));
            
            const updateFiltredTodo = {...filtredTodo[0],cheked:true  ,title:todoEl.children[0].value };
            
            const filtredTodos =getLocatedTodos().filter((item) => item.id !== Number(todoEl.id))
            
            const updateSaveTodos=[...filtredTodos,updateFiltredTodo]
            localStorage.setItem("Todoslist",JSON.stringify(updateSaveTodos));
            
            todoMain.innerHTML=""
            renderTodosElements();
            
               
               
         
                
                
        }

        )

    }

  
} );

////
    
//handle add new todo 
function renderTodosElements(){
   
    getLocatedTodos().forEach(todo=> CreateNewTodo(todo.title,todo.desc,todo.id,todo.cheked));
    
}
renderTodosElements();

export const handleCraeteNewTodo = (event) => {
    event.preventDefault();
    if(!(todoTitle.value || todoDesc.value) ) {return alertsss("لطفن جای خالی را پر بفرمایید!",{time: "5000",type:"warn"});}
    const newTodo = {
       // id:Math.floor(Math.random() * 10000000),
       id:Date.now(), 
       title: todoTitle.value,
       desc: todoDesc.value,
       cheked:false,
       
    };
    saveTodo.push(newTodo);
    
    localStorage.setItem("Todoslist",JSON.stringify(saveTodo));
   

CreateNewTodo(newTodo.title,newTodo.desc,newTodo.id)




// inja ba shiveye dige kare payino kardim

//    const newtodolist =
//    `<li>
//    <h3>${newTodo.title}</h3>
//    <p>${newTodo.desc}</p>
//     </li>`;
    
// console.log(newTodo,newtodolist);
// todoMain.innerHTML+=newtodolist 








 




};




