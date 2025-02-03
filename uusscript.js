const toggleButton = document.getElementById('toggle-btn')
const newsidebar = document.getElementById('newsidebar')

function toggleSidebar(){
    newsidebar.classList.toggle('close')
    toggleButton.classList.toggle('rotate')

    Array.from(newsidebar.getElementsByClassName('show')).forEach(ul=>{
        ul.classList.remove('show')
        ul.previousElementSibling.classList.remove('rotate')
    })
}
function toggleSubMenu(button){
    button.nextElementSibling.classList.toggle('show')
    button.classList.toggle('rotate')

    if(newsidebar.classList.contains('close')){
        newsidebar.classList.toggle('close')
        toggleButton.classList.toggle('rotate')
    }
}