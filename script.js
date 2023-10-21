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
        let spanElementTask = document.createElement('span');
        spanElementTask.textContent = task;

        let liElement = document.createElement('li');
        liElement.appendChild(spanElementTask);

        let divbuttons = document.createElement('div');

        let buttonRemoverTask = document.createElement('button');
        let imageLixeira = document.createElement('img');
        imageLixeira.src = '/img/excluir.png';
        buttonRemoverTask.appendChild(imageLixeira); 

        let buttonEditarTask = document.createElement('button');
        let imagePencil = document.createElement('img');
        imagePencil.src = '/img/lapis.png';
        buttonEditarTask.appendChild(imagePencil);

        let buttonCompleteTask = document.createElement('button');
        let imageCompleteTask = document.createElement('img');
        imageCompleteTask.src = 'img/check.png';
        buttonCompleteTask.appendChild(imageCompleteTask);
        
        divbuttons.appendChild(buttonCompleteTask);
        divbuttons.appendChild(buttonEditarTask);
        divbuttons.appendChild(buttonRemoverTask);
        
        liElement.appendChild(divbuttons);
        liElement.style.listStyleType = 'none'

        listElement.appendChild(liElement);

        buttonCompleteTask.addEventListener('click', () => {
            let index = tarefas.indexOf(task);
            concluirTarefa(index)
        });

        buttonEditarTask.addEventListener('click', () => {
            
            
        })

        buttonRemoverTask.addEventListener('click', () => {
            const index = tarefas.indexOf(task);
            deletarTarefa(index);
        });
    }) 
}


function concluirTarefa(index) {
    let listElementLi = document.querySelectorAll ('#body ul li span');
    listElementLi[index].classList.add('task-concluida');
    
}

function deletarTarefa(index) {
    tarefas.splice(index, 1);
    renderizarTela();
};