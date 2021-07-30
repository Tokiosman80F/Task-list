let form=document.querySelector('#task_form');
let taskList=document.querySelector('ul')
let clearBtn=document.querySelector('#clear_task_btn');
 let filter=document.querySelector('#task_filter');
 let newTask=document.querySelector('#new_task');

 
 

//  define event listener
form.addEventListener('submit',addTask)
taskList.addEventListener('click',clear)
clearBtn.addEventListener('click',clearTask)
filter.addEventListener('keyup',filterTask)
document.addEventListener('DOMContentLoaded',getTasks);

function addTask(e)
{
    if(newTask.value ==='')
    {
        alert('Please Your Enter Task!!');
    }
    else
    {
        let li=document.createElement('li');
        li.appendChild(document.createTextNode(newTask.value+" "))
        taskList.appendChild(li)
        
       //delete link x 
        let link=document.createElement('a');
        link.setAttribute('href',"#");
        link.innerHTML='x';
        li.appendChild(link);
        //delete link x end 

    // local storage
    storeTaskInLocalStorage(newTask.value)
      //local store end  
    newTask.value=" ";
    }
    e.preventDefault();
}

function removeTask(e)
{
    if(e.target.hasAttribute('href'))
    {
        if(confirm("Are you sure"))
        {
            let ele=e.target.parentElement;
            ele.remove();
            removeFromLS(ele);
        }
    }
}



function clearTask(e)
{
    taskList.innerHTML=" ";
    localStorage.clear();
}

//filter task
function filterTask(e)
{
    let text=e.target.value.toLowerCase();
    //checking the each item
    document.querySelectorAll('li').forEach(function(task)
    {
       let item= task.firstChild.textContent;
       if(item.toLocaleLowerCase().indexOf(text)!=-1)//we use !=1 because of indexof()
       {
        task.style.display='block';
       }
       else 
       {task.style.display='none';}
    })
}

// store in local store
function storeTaskInLocalStorage(task)
{
    let tasks;
    if(localStorage.getItem('tasks')===null)//for calling local storage e this function is mandatory(built in function)
    {
        tasks=[];
    }
    else
    {
        tasks=JSON.parse(localStorage.getItem('tasks'))
    }
    tasks.push(task);
    localStorage.setItem('tasks',JSON.stringify(tasks))
}

function getTasks()
{
    let tasks;
    if(localStorage.getItem('tasks')===null)//for calling local storage e this function is mandatory(built in function)
    {
        tasks=[];
    }
    else
    {
        tasks=JSON.parse(localStorage.getItem('tasks'))
    }
    tasks.forEach(task=>{
        
        let li=document.createElement('li');
        li.appendChild(document.createTextNode(task +" "))
        
        
       //delete link x 
        let link=document.createElement('a');
        link.setAttribute('href',"#");
        link.innerHTML='x';
        li.appendChild(link);
        //delete link x end
        taskList.appendChild(li)

    })

}

function removeFromLS(taskItem)
{
    let tasks;
    if(localStorage.getItem('tasks')===null)//for calling local storage e this function is mandatory(built in function)
    {
        tasks=[];
    }
    else
    {
        tasks=JSON.parse(localStorage.getItem('tasks'))
    }
    let li=taskItem
    li.removeChild(li.lastChild);
    tasks.forEach((task,index)=>{
        if(li.textContent.trim()===task)
        {
            tasks.splice(index,1);
        }
    })
    localStorage.setItem('tasks',JSON.stringify(tasks));
}