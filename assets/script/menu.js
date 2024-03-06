window.onload = (event) => {
    const screenW = screen.width;
    if (screenW > 768) {
        let body = document.querySelector('body');
        let menuLateral = document.createElement('div');
        let menuLateralBtn = document.createElement('div');
        menuLateral.classList.add('menu-lateral');
        menuLateral.innerHTML =
            ` <div class="icon-menu">
                <a href="/index.html"><img src="getjose.github.io/Projetos-Java-Script/assets/images/icons/botao-de-inicio.png" alt="Home"></a>
            </div> 
            <div class="icon-menu">
                <a href="/Projeto 1 - To do List/index.html"><img src="getjose.github.io/Projetos-Java-Script/assets/images/icons/lista-de-controle.png" alt="To-Do-List"></a>
            </div>
            <div class="icon-menu">
                <a href="/Projeto 2 - Relógio Digital/index.html"><img src="getjose.github.io/Projetos-Java-Script/assets/images/icons/relogio-inteligente (1).png"
                        alt="Relogio-Digital"></a>
            </div>
            <div class="icon-menu">
                <a href="/Projeto 3 - Relógio Analógico/index.html"><img src="getjose.github.io/Projetos-Java-Script/assets/images/icons/relogio.png" alt="Relogio-Analogico"></a>
            </div>
            <div class="icon-menu">
                <a href="/Projeto 4 - Slide Show/index.html"><img src="getjose.github.io/Projetos-Java-Script/assets/images/icons/slides.png" alt="Slides"></a>
            </div>
            <div class="icon-menu">
                <a href="/Projeto 5 - Acordeon/index.html"><img src="getjose.github.io/Projetos-Java-Script/assets/images/icons/acordeon.png" alt="Acordeon"></a>
            </div>
            <div class="icon-menu">
                <a href="/Projeto 6 - Calculadora/index.html"><img src="getjose.github.io/Projetos-Java-Script/assets/images/icons/calculadora.png" alt="Calculadora"></a>
            </div>
            <div class="icon-menu">
                <a href="/Projeto 7 - Jogo da Velha/index.html"><img src="getjose.github.io/Projetos-Java-Script/assets/images/icons/jogo-da-velha.png" alt="Jogo-Da-Velha"></a>
            </div>`;

        menuLateralBtn.classList.add('menu-lateral-btn');
        menuLateralBtn.innerHTML = '<span> > </span>'
        body.appendChild(menuLateral);
        body.appendChild(menuLateralBtn);

    }


    menuBtn = document.querySelector(".menu-lateral-btn");

    if (menuBtn) {
        menuBtn.addEventListener('click', () => {
            let menu = document.querySelector('.menu-lateral');
            let button = menuBtn.querySelector('span');
            openClose(menu, button);
        });


    }

    function openClose(menu, button) {
        if (menu.classList.contains('active')) {
            button.innerHTML = '>';
            menu.classList.remove('active');
            button.parentElement.classList.remove('active');
        } else {
            button.innerHTML = '<';
            menu.classList.add('active');
            button.parentElement.classList.add('active');
        }
    }

}


