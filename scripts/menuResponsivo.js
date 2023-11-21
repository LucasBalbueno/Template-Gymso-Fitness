const botaoMenu = document.getElementById('botao__menu-hamburguer')
const menuHamburguer = document.getElementsByClassName('menu__hamburguer')[0]

botaoMenu.onclick = function () {
    menuHamburguer.classList.toggle("ativado")
}