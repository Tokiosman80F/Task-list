//define UI element
//first step
//import Html using DOM to access form js file
let form=document.querySelector('#task-form');
let taskInput=document.querySelector('#new-task');
let filter=document.querySelector('#task-filter');
let taskList=document.querySelector('ul');
let clearBtn=document.querySelector('#clear-task-btn');

//Defining Event listener
form.addEventListener('submit',addTask);


//defining function
//addTask function
function addTask(e){
    if(taskInput.value=== '')//checking the task Input value is empty or not
    {
        alert("Add a task!");
    }
     else{
        //create a li element
        let li=document.createElement('li');
         li.appendChild(document.createTextNode(taskInput.value + ' '));
        let link=document.createElement('a');
        link.setAttribute('href','#');
        link.innerHTML='x';
        li.appendChild(link);
         //1.inserting into task list
         taskList.appendChild(li);
         taskInput.value= ' ';//task list will be empty
        }
        e.preventDefault();//to prevent the default system of form as it keep reloading
}