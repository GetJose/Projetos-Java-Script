window.onload = (event) => {
    const screenW = screen.width;
    if (screenW > 768) {
        let body = document.querySelector('body');

        let menuLateral = document.createElement('div');

        let menuLateralBtn = document.createElement('div');

        menuLateral.classList.add('menu-lateral');
        var basePath = window.location.origin;

        var projeto1Path = basePath + "/Projeto 1 - To do List/index.html";
        var projeto2Path = basePath + "/Projeto 2 - Relógio Digital/index.html";
        var projeto3Path = basePath + "/Projeto 3 - Relógio Analógico/index.html";
        var projeto4Path = basePath + "/Projeto 4 - Slide Show/index.html";
        var projeto5Path = basePath + "/Projeto 5 - Acordeon/index.html";
        var projeto6Path = basePath + "/Projeto 6 - Calculadora/index.html";
        var projeto7Path = basePath + "/Projeto 7 - Jogo da Velha/index.html";

        menuLateral.innerHTML =
            ` <div class="icon-menu">
        <a href="${basePath}/index.html"><img src="${basePath}/assets/images/icons/botao-de-inicio.png" alt="Home"></a>
    </div> 
    <div class="icon-menu">
        <a href="${projeto1Path}"><img src="${basePath}/assets/images/icons/lista-de-controle.png" alt="To-Do-List"></a>
    </div>
    <div class="icon-menu">
        <a href="${projeto2Path}"><img src="${basePath}/assets/images/icons/relogio-inteligente (1).png" alt="Relogio-Digital"></a>
    </div>
    <div class="icon-menu">
        <a href="${projeto3Path}"><img src="${basePath}/assets/images/icons/relogio.png" alt="Relogio-Analogico"></a>
    </div>
    <div class="icon-menu">
        <a href="${projeto4Path}"><img src="${basePath}/assets/images/icons/slides.png" alt="Slides"></a>
    </div>
    <div class="icon-menu">
        <a href="${projeto5Path}"><img src="${basePath}/assets/images/icons/acordeon.png" alt="Acordeon"></a>
    </div>
    <div class="icon-menu">
        <a href="${projeto6Path}"><img src="${basePath}/assets/images/icons/calculadora.png" alt="Calculadora"></a>
    </div>
    <div class="icon-menu">
        <a href="${projeto7Path}"><img src="${basePath}/assets/images/icons/jogo-da-velha.png" alt="Jogo-Da-Velha"></a>
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


