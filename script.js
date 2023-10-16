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
        renderizarTela();
    }
}

function renderizarTela() {
    listElement.innerHTML ='';
    
    tarefas.map((task, index) => {
        let divElement = document.createElement('div');
        divElement.textContent = task;
        let liElement = document.createElement('li');
        liElement.appendChild(divElement);

        let divbuttons = document.createElement('div');
        let buttonRemover = document.createElement('button');
        let buttonEditar = document.createElement('button');
        let imageLixeira = document.createElement('img');
        let imagePencil = document.createElement('img');
        imagePencil.src = '/img/lapis.png'
        imageLixeira.src = '/img/excluir.png';
        buttonRemover.appendChild(imageLixeira); 
        buttonEditar.appendChild(imagePencil);
        divbuttons.appendChild(buttonEditar);
        divbuttons.appendChild(buttonRemover);
        liElement.appendChild(divbuttons);
        liElement.style.listStyleType = 'none'

        listElement.appendChild(liElement);

        buttonEditar.addEventListener('click', () => {
            
            
        })

        buttonRemover.addEventListener('click', () => {
            const index = tarefas.indexOf(task);
            deletarTarefa(index);
        });
    }) 
}

function editarTarefa() {
    
}

function deletarTarefa(index) {
    tarefas.splice(index, 1);
    renderizarTela();
};