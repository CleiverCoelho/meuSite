function toggleSidebar(){
    const sideTouch = document.querySelector(".sidebar");

    sideTouch.classList.toggle("opened")

    const projetosOpen = document.querySelector(".projetos");
    projetosOpen.classList.toggle("escondido");

    const overlay = document.querySelector(".overlay");
    overlay.classList.toggle("escondido");
    overlay.classList.toggle("active")

}

function closeSidebar(){
    const sideTouch = document.querySelector(".sidebar");

    sideTouch.classList.remove("opened")

    const projetosOpen = document.querySelector(".projetos");
    projetosOpen.classList.add("escondido");

    const overlay = document.querySelector(".overlay");
    overlay.classList.add("escondido");
    overlay.classList.remove("active")

}

function openSidebar(){
    const sideTouch = document.querySelector(".sidebar");

    sideTouch.classList.add("opened")

    const projetosOpen = document.querySelector(".projetos");
    projetosOpen.classList.remove("escondido");

    const overlay = document.querySelector(".overlay");
    overlay.classList.add("active")
    overlay.classList.remove("escondido");
}