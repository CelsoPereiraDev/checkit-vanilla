const $form = document.getElementById('form-tasks')

const addTask = (title) => {

//   const taskHTML =  `<li class="tasks-section__item">
//   <label class="tasks-section__item__label" >
//     <input type="checkbox" class="tasks-section__item__checkbox">
//     <span class="tasks-section__item__text">${title}</span>
//   </label>
//   <button type="button" class="tasks-section__item__remove">X</button>
// </li>`  

// Criar Item (li)
  const $li = document.createElement('li')
  $li.classList.add('tasks-section__item')

// Criar Label (label)

  const $label =document.createElement('label')
  $label.classList.add('tasks-section__item__label')
  $li.append($label)

//Criar input (input)
  const $input = document.createElement('input')
  $input.classList.add('tasks-section__item__checkbox')
  $input.setAttribute('type', 'checkbox')
  $label.append($input)

//Criar span (span)
  const $span = document.createElement('span')
  $span.classList.add('tasks-section__item__text')
  $span.innerText = title
  $label.append ($span)  

 //Criar botão de remoção (remove)
 const $removeButton = document.createElement('button')
 $removeButton.classList.add('tasks-section__item__remove')
 $removeButton.innerText = 'X'
 $li.append ($removeButton) 

 // Adicionar item na lista To-do
  const $tasksList = document.getElementById('list-todo')
  $tasksList.append($li)
  
//  $tasksList.insertAdjacentHTML('beforeend',taskHTML)

  
}

const handleFormSubmit = (event) => {
    event.preventDefault()
    const formData = new FormData ($form)
    const title = formData.get('title')

 
    addTask(title)
    
}

$form.addEventListener('submit', handleFormSubmit)