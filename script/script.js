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
    
});


function verMais(botao){
    // fecha o ver mais de uma div antes de abrir outra
    const activeBox = document.querySelector('.abrir');
    if(activeBox) {
        activeBox.classList.remove('abrir');
        activeBox.classList.add('conteudo-escondido');    
    }

    botao.classList.remove("conteudo-escondido");
    botao.classList.add("abrir");
}
