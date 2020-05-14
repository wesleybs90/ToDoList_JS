let input = document.getElementById('novaTarefa');
let add = document.getElementById('add');
// let check = document.querySelectorAll('#board img');
let board = document.getElementById('board');

//quando clicar no add fazer ação
function adicionarTarefa() {
    //capturar o valor do input
    let tarefa = input.value;

    if (tarefa.trim().length == 0) {
        input.style.borderColor = 'red';
        return alert('Digite algo antes de enviar tarefa');
    }

    //gerar o card
    board.innerHTML += `<div class="tarefa">\n
    <div class="col-md-8">${tarefa}</div>\n
    <div class="col-md-2"><img class="icon" src="img/check.png"></div>\n
    </div>`;

    //limpar o input
    input.value = '';
}

add.addEventListener('click', adicionarTarefa);

input.addEventListener('keypress', function (event) {
    if (event.key === 'Enter') {
        adicionarTarefa();
    }
});

//quando clicar no chech fazer ação
board.addEventListener('click', function (event) {
    if (event.target.classList.value === 'icon') {
        event.target.closest('.tarefa').remove();
    }
});