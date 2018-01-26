let listItem = document.getElementsByClassName('list-item');
//remove todo item function
function removeTodoItem(e) {
  let todoItem = e.target.parentNode.parentNode;
  todoItem.remove(function(){

  });
} //end of removeToDoItem

function itemComplete(e) {
  let completedItem = e.target;

  if (!completedItem.classList.contains('completed')) {
    completedItem.classList.add('completed');
  } else if (completedItem.classList.contains('completed')) {
    completedItem.classList.remove('completed');
  }
} //end of itemComplete

// handlers for existing list items
let trash = document.getElementsByClassName('trash');

for (let todoItemTrash of trash) {
  todoItemTrash.addEventListener('click', removeTodoItem);
} // end of for of loop

for (let item of listItem) {
  item.addEventListener('click', itemComplete, false);
  
  item.addEventListener('mouseenter', function(e) {
    let item = e.target;
    let icon = e.target.firstChild.nextSibling.firstChild;
    icon.classList.remove('fadeout');
    icon.classList.add('fa-minus-circle', 'fadein');
  }); //end of item mouseenter event handler

  item.addEventListener('mouseleave', function(e) {
    let item = e.target;
    let icon = e.target.firstChild.nextSibling.firstChild;
    icon.classList.remove('fadein');
    icon.classList.add('fadeout');
  }); //end of item mouseleave event handler
} // end of for of loop
