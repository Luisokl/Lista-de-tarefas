let taskElement = document.querySelector('#app input');
let buttonAdd = document.querySelector('#app button');
let listElement = document.querySelector ('#body ul');

let tarefas = [];


function adicionarTarefas() {
    if (taskElement.value === '') {
        alert('adicione uma tarefa..');
    } else {
        let tasksElement = taskElement.value;
        tarefas.push(tasksElement);

        console.log(tarefas);
    }
}


buttonAdd.addEventListener('click', adicionarTarefas);