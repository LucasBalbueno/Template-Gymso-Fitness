const botaoOpen = document.getElementById('botaoOpen');
const modal = document.getElementById('modal');
const botaoClose = document.getElementById('botaoClose');

botaoOpen.onclick = function () {
    modal.showModal ();
}

botaoClose.onclick = function () {
    modal.closest();
}