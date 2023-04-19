const nextBtn = document.querySelector('#next-btn');
const container = document.querySelector('.container-frames');

nextBtn.addEventListener('click', () => {

    const boxes = document.querySelectorAll('.projeto');
    const firstBox = boxes[0];
    firstBox.classList.add('active');
    setTimeout(() => {
    firstBox.remove();
    container.appendChild(firstBox);
    firstBox.classList.remove('active');
    }, 500);

    const fechar = document.querySelectorAll(".projeto");
    for(let i = 0; i < fechar.length; i++){
        fechar[i].classList.add("conteudo-escondido")
    }
});


function verMais(botao){
    botao.classList.remove("conteudo-escondido");
    botao.classList.add("abrir")
    setTimeout(() => {
        botao.classList.remove("abrir")
        botao.classList.add("conteudo-escondido")
    }, 10000)
}
