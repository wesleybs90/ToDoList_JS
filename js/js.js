let input = document.getElementById('novaTarefa');
let add = document.getElementById('add');
let check = document.querySelectorAll('#board img');
let board = document.getElementById('board');

//quando clicar no add fazer ação
add.addEventListener('click', function () {
    //capturar o valor do input
    let tarefa = input.value;

    //gerar o card
    board.innerHTML += `<div class="tarefa">\n
    <div class="col-md-8">${tarefa}</div>\n
    <div class="col-md-2"><img class="icon" src="img/check.png"></div>\n
    </div>`;

    //limpar o input
    input.value = '';
});

//quando clicar no chech fazer ação
check.addEventListener('click', function (e) {
    //apagar tarefa
    console.log(e)
});

