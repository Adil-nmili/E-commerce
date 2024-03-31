const dropDown = document.getElementById('dropDown')
const dropDown2 = document.getElementById('secondDropDown')
const dropDown3 = document.getElementById('thirdDropDown')
const dropDown4 = document.getElementById('compoDropDown')
const dropDown5 = document.getElementById('contDropDown')
const dropDown6 = document.getElementById('forDropDown')
const dropDown7 = document.getElementById('utilDropDown')
const content = document.querySelector('.content')
const menu = document.getElementById('menu')

menu.addEventListener('click', () => {
    let asideBar = document.getElementById('sideBar')
    asideBar.classList.toggle('hide')
    if (asideBar.className.includes('hide')) {
        content.classList.toggle('w-100')
    }
})

dropDown.addEventListener("click", () => {
    let ulDropDown = document.getElementById('dropContainer')
    ulDropDown.classList.toggle("dropcontainer")
})
dropDown2.addEventListener("click", () => {
    let ulDropDown1 = document.getElementById('secondDropContainer')
    ulDropDown1.classList.toggle("dropcontainer")
})
dropDown3.addEventListener("click", () => {
    let ulDropDown2 = document.getElementById('thirdDropContainer')
    ulDropDown2.classList.toggle("dropcontainer")
})
dropDown4.addEventListener("click", () => {
    let ulDropDown3 = document.getElementById('compoDropContainer')
    ulDropDown3.classList.toggle("dropcontainer")
})
dropDown5.addEventListener("click", () => {
    let ulDropDown4 = document.getElementById('contDropContainer')
    ulDropDown4.classList.toggle("dropcontainer")
})
dropDown6.addEventListener("click", () => {
    let ulDropDown5 = document.getElementById('formDropContainer')
    ulDropDown5.classList.toggle("dropcontainer")
})
dropDown7.addEventListener("click", () => {
    let ulDropDown6 = document.getElementById('utilDropContainer')
    ulDropDown6.classList.toggle("dropcontainer")
})

