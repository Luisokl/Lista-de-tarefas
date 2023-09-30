let taskElement = document.querySelector('#app input');
let buttonAdd = document.querySelector('#app button');
let listElement = document.querySelector ('#body ul');

let tarefas = [];

buttonAdd.addEventListener('click', adicionarTarefas);

function adicionarTarefas() {
    listElement.innerHTML = ''

    if (taskElement.value === '') {
        alert('adicione uma tarefa..');
    } else {
        let tasksElement = taskElement.value;
        taskElement.value = ''
        
        tarefas.push(tasksElement);

        tarefas.map(task => {
            let liElement = document.createElement('li');
            liElement.textContent = task;
            let buttonRemover = document.createElement('button');
            buttonRemover.textContent = 'Excluir';
            liElement.appendChild(buttonRemover);
            liElement.style.listStyleType = 'none'
            listElement.appendChild(liElement);
        }) 
    }
}