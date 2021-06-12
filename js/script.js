//define UI element
//first step
//import Html using DOM to access form js file
let form=document.querySelector('#task-form');
let taskList=document.querySelector("ul");
let filter=document.querySelectory("#task-filter");
let taskInput=document.querySelector("#new-task");
let clearBtn=document.querySelector("#clear-task-btn");

//Defining Event listener
form.addEventListener('submit',addTask);


//defining function
//addTask function
function addTask(e){
    if(taskInput.value=='')//checking the task Input value is empty or not
    {
        alert("Add a task!");
    }else{
        //create a li element
        let li=document.createElement('li')
    }
}