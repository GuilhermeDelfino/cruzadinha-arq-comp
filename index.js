/**
* @param {HTMLDivElement} divNode 
*/
function verificarPalavra(divNode) {
    let palavra = divNode.getAttribute('data-help-word');
    let inputs = divNode.querySelectorAll('input');
    let erro = false;
    for(let i = 0; i < palavra.length; i++){
        if(palavra[i].toUpperCase() == inputs[i].value.toUpperCase()){
            inputs[i].classList.add('acerto');
            inputs[i].classList.remove('erro');
        }else{
            inputs[i].classList.add('erro');
            inputs[i].classList.remove('acerto');
            erro = true;
        }
    }

    alert(erro ? `Você errou esta palavra! A palavra correta é ${palavra.toUpperCase()}` : `Parabéns você acertou a palavra!`)
}
(() => {
    'use strict';
    const palavras = ['CPU', 'ULA', 'registradores', 'RAM', 'ROM', 'Eprom', 'Flash', 'memória de massa', 'DMA', 'CS', 'adress bus', 'data bus', 'I5', 'I7', 'dual core', 'quad core'];

    /**
     * @description Coloque uma palavra e ele irá gerar automáticamente os quadradinhos na tela
     * @param {string} palavra 
     */
    function gerar_cruzadinha(palavra) {

        let palavraDiv = document.createElement('div');
        palavraDiv.setAttribute('data-help-word', palavra);
        for (let i = 0; i < palavra.length; i++) {
            palavraDiv.innerHTML += (`<input data-help='${palavra[i]}' autofocus maxlength='1'/>`)
            document.body.appendChild(palavraDiv);
        }
        palavraDiv.innerHTML += `<button class='btn' onclick='verificarPalavra(this.parentNode)'>Verificar</button>`;
        document.body.innerHTML += '<br />';
    }

    palavras.forEach(palavra =>gerar_cruzadinha(palavra))
})()