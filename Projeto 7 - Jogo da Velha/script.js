let resultado = '';
let jogando = true;
let player = 'X';

//mantem uma cópia de como Jogo está, facilitando as comparações do jogo
let quadro = {
    a1: '', a2: '', a3: '',
    b1: '', b2: '', b3: '',
    c1: '', c2: '', c3: ''
};

let status = document.querySelector(".status");
let resetArea = document.querySelector(".reset");
document.querySelectorAll(".campo").forEach(item => {
    item.addEventListener('click', itemClick);
});



function reset() {

    resetArea.style.display = "none";
    let random = Math.floor(Math.random() * 2);//pega numero aleatorio de 0 a 1
    player = (random === 0) ? 'X' : 'O';
    //limpa o jogo
    for (let i in quadro) {
        quadro[i] = '';
    }
    resultado = '<h2>Vez de: <span>' + player + '</span></h2>';
    jogando = true;
    removeWinningLines();
    atualizaCampos();
    renderInfo();
}
function tooglePlayer() {
    player = (player === 'X') ? 'O' : 'X';
    renderInfo();
}
function renderInfo() {
    document.querySelector('.status').innerHTML = resultado;

    if (status.innerText == 'Empate') {
        resetArea.style.display = "block";
    }
}
function itemClick(event) {
    let posicao = event.target.getAttribute('data-item');
    if (jogando && quadro[posicao] == '') {
        quadro[posicao] = player;

        tooglePlayer();
        resultado = '<h2>Vez de: <span>' + player + '</span></h2>';
        atualizaCampos();

    }
}
function atualizaCampos() {
    for (let i in quadro) {
        let item = document.querySelector(`div[data-item=${i}]`);
        item.innerHTML = quadro[i];
    }

    checkGame();
}

function checkGame() {
    if (checkFor('X')) {
        resultado = "<h2> X venceu! </h2>";
        resetArea.style.display = "block";
        jogando = false;
    } else if (checkFor('O')) {
        resultado = "<h2> O venceu! </h2>";
        resetArea.style.display = "block";
        jogando = false;
    } else if (isFull()) {
        resultado = "<h2> Empate</h2>";
        jogando = false;
    }
    renderInfo();
}

function isFull() {
    for (let i in quadro) {
        if (quadro[i] === '') {
            return false;
        }
    }
    return true;
}

function checkFor(jogador) {
    if (jogador == quadro.a1) {
        if (jogador == quadro.a2 && jogador == quadro.a3) {
            drawWinningLine(['a1', 'a2', 'a3'], 'h');
            return true;
        }
        if (jogador == quadro.b2 && jogador == quadro.c3) {
            drawWinningLine(['a1', 'b2', 'c3'], 'dr');
            return true;
        }
        if (jogador == quadro.b1 && jogador == quadro.c1) {
            drawWinningLine(['a1', 'b1', 'c1'], 'v');
            return true;
        }
    }

    if (jogador == quadro.a3) {
        if (jogador == quadro.b3 && jogador == quadro.c3) {
            drawWinningLine(['a3', 'b3', 'c3'], 'v');
            return true;
        }
        if (jogador == quadro.b2 && jogador == quadro.c1) {
            drawWinningLine(['a3', 'b2', 'c1'], 'dl');
            return true;
        }
    }

    if (jogador == quadro.a2 && jogador == quadro.b2 && jogador == quadro.c2) {
        drawWinningLine(['a2', 'b2', 'c2'], 'v');
        return true;
    }
    if (jogador == quadro.b1 && jogador == quadro.b2 && jogador == quadro.b3) {
        drawWinningLine(['b1', 'b2', 'b3'], 'h');
        return true;
    }

    if (jogador == quadro.c1 && jogador == quadro.c2 && jogador == quadro.c3) {
        drawWinningLine(['c1', 'c2', 'c3'], 'h');
        return true;
    }

    return false;

}

function drawWinningLine(positions, direction) {
    positions.forEach(posicao => {
        let item = document.querySelector(`div[data-item=${posicao}]`);
        item.classList.add(direction);
    });
}
function removeWinningLines() {
    document.querySelectorAll('.h, .v, .dl, .dr').forEach(item => {
        item.classList.remove('h', 'v', 'dl', 'dr');
    });
}

/*
//ENCONTREI ESSA FUNÇÃO PELA NET, COMO NÃO ENTENDO 100% NÃO QUIS USAR
function checkWinnerFor(player) {
    let pos = [
        'a1,a2,a3',
        'b1,b2,b3',
        'c1,c2,c3',

        'a1,b1,c1',
        'a2,b2,c2',
        'a3,b3,c3',

        'a1,b2,c3',
        'a3,b2,c1',
    ];

    for (let w in pos) {
        let pArray = pos[w].split(',');
        let hasWon = pArray.every(option => square[option] === player);
        if (hasWon) {
            return true;
        }

    } return false;
}*/