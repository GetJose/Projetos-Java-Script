const c = (el) => document.querySelector(el);
const cAll = (el) => document.querySelectorAll(el);

const listaItem = c('.models .lista-item').cloneNode(true);
const listaArea = c('.lista-area ul');
const tarefa = c('input');

function enviar() {
    if (event.keyCode === 13) {
        adicionar();
    }
}
function adicionar() {
    let str = tarefa.value.trim();
    if ( str === "") {
        alert("Não pode adicionar uma tarefa vazia!");
        return;
    }
    if(str.startsWith('<')) {
        if(str.includes(">")){
        alert("texto no formato HTML não permitido.");
        return;
        }
    }
    let li = document.createElement('li');
    li.innerHTML = `<div class="lista-item">
            <button class="btn-check" onclick="feito()"><i class="bx bx-check"></i></button>
            <div class="lista-item--content">${str}</div>
            <button class="btn-remove"onclick="remover()"><i class="bx bx-trash"></i></button>
        </div>`;
    listaArea.appendChild(li);
    tarefa.value = "";
}

function feito() {
    let btnCheck = event.currentTarget;
    let concluido = btnCheck.parentNode;
    if (concluido.classList.contains("active")) {
        concluido.classList.remove("active");
        concluido.querySelector(".btn-check").classList.remove("active");
    } else {
        concluido.classList.add("active");
        concluido.querySelector(".btn-check").classList.add("active");
    }
}

function remover() {
    let btnDell = event.currentTarget;
    let deletar = btnDell.parentNode;
    deletar.remove();
}
