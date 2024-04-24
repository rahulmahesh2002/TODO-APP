const form = document.getElementById('form');  // Connect to html element form
const input = document.getElementById('input');  // Connect to html element input
const todos = document.getElementById('todos');    // Connect to html element list

form.addEventListener('submit',(e)=>{
  e.preventDefault();                // avoids pg reload on submit ( while accidently clicking submit )
  const todo = input.value;   // asigns the value enterd by user in input box

   if(todo) // check if value is empty
   {
     const todoel = document.createElement('li');   /* if val not empty, then const todoel creates a new li element */
      
     todoel.innerText=todo;  // the todo val is passed to new li text using .innertext


          
        todoel.addEventListener('click',()=>{     // if the new todoel is clicked, a css toggle cmpt function activated
          todoel.classList.toggle('completed');    // check css for .todos li.completed class
        });

        todoel.addEventListener('contextmenu',(e)=>{  // if right click function activated
          e.preventDefault(); // avoid reload
          todoel.remove();    // the clicked ele is removed
        });

      todos.appendChild(todoel);   //todos.appendChild(todoEl); is executed, it adds the newly created list item (todoEl) as a child node of the unordered list (todos)
      input.value='';  // clears the input box field
     } 

   
});