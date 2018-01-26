let listItem = document.getElementsByClassName('list-item');
let toDoList = document.getElementById('list');
let btnAddToDo = document.getElementById('addToDo');
let toDoInput = document.getElementById('toDoInput');

//add item todo event handlers
btnAddToDo.addEventListener('click', addToDoItem, false);
toDoInput.addEventListener('keypress', function(e) {
  if (toDoInput.value === ' ') {
    alert('Please enter a todo item.');
  } else {
    if (e.which === 13) {
      addToDoItem();
    }
  }

}, false); //end of toDoInput event handler

function addToDoItem(e) {
  if (toDoInput.value === '') {
    alert('Please enter a todo item.');
  } //and of if
  else {
    let itemNode = document.createElement('li');
    itemNode.classList.add('list-item');
    itemNode.innerHTML = toDoInput.value
    itemNode.classList.add('slidein');

    let trashIconNode = document.createElement('i');
    trashIconNode.setAttribute("aria-hidden", true);
    trashIconNode.classList.add('fadeout');

    let spanNode = document.createElement('span');
    spanNode.classList.add('trash');
    spanNode.appendChild(trashIconNode);

    itemNode.prepend(spanNode);
    toDoList.appendChild(itemNode);

    toDoInput.value = '';

  } //end of else
} //end of addToDoItem

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
    item.classList.remove('slidein');
    icon.classList.add('fa-minus-circle', 'fadein');
    item.classList.add('slideout');
  }); //end of item mouseenter event handler

  item.addEventListener('mouseleave', function(e) {
    let item = e.target;
    let icon = e.target.firstChild.nextSibling.firstChild;
    icon.classList.remove('fadein');
    item.classList.remove('slideout');
    icon.classList.add('fadeout');
    item.classList.add('slidein');
  }); //end of item mouseleave event handler
} // end of for of loop
