// Variables
const toggleButton = document.getElementById('toggle-btn')
const newsidebar = document.getElementById('newsidebar')
let hamburgerToggleBtn = document.querySelector('.menu_icon_box')

function isMobileView(){
    return window.innerWidth < 800
}

function closeMobileSidebar(){
    newsidebar.classList.remove('open')
    hamburgerToggleBtn.classList.remove('open')
}

// Sidebar is closed from the beginning
function toggleSidebar(event){
    // Prevent closing if clicking a link
    if (event && event.target.tagName === 'A') {
        return
    }
    if (isMobileView()) {
        return
    }
    newsidebar.classList.toggle('close')
    toggleButton.classList.toggle('rotate')
    closeAllSubMenus()
}

// As you toggle the sidebar arrows, it opens the sidebar
function toggleSubMenu(button){
    if(!button.nextElementSibling.classList.contains('show')) {
        closeAllSubMenus()
    }
    button.nextElementSibling.classList.toggle('show')
    button.classList.toggle('rotate')

    if(newsidebar.classList.contains('close')){
        newsidebar.classList.toggle('open')
        toggleButton.classList.toggle('rotate')
    }
}

// Close sidebar when clicking outside of it, but only on smaller screens
function setnewsidebarInitialState(){
    if(isMobileView()){
        newsidebar.classList.add('open');
        hamburgerToggleBtn.classList.add('open');
        newsidebar.classList.remove('close');
    } else {
        newsidebar.classList.remove('open')
        hamburgerToggleBtn.classList.remove('open')
    }
}

hamburgerToggleBtn.onclick = function(){
    if (!isMobileView()) {
        return
    }
    hamburgerToggleBtn.classList.toggle('open')
    newsidebar.classList.toggle('open')
    newsidebar.classList.remove('close')
}
// if (hamburgerToggleBtn.classList.contains ('open')){
//     newsidebar.classList.add('open');
// }else{
//     newsidebar.classList.toggle('close');
//     hamburgerToggleBtn.classList.toggle('close');
// }
document.addEventListener('click', (e) => {
    if (!isMobileView()) {
        return
    }
    if (!hamburgerToggleBtn.contains(e.target) && !newsidebar.contains(e.target)) {
        closeMobileSidebar()
    }
})
// Close opened sub-menus if user clicks another sub-menu (but not a link)
function closeAllSubMenus(){
    Array.from(newsidebar.getElementsByClassName('show')).forEach(ul => {
        ul.classList.remove('show')
        ul.previousElementSibling.classList.remove('rotate')
    })
}

// Searchbar functions
function search(button){
    button.nextElementSibling.classList.toggle('show')
    // if(newsidebar.classList.contains('close')){
    //     newsidebar.classList.toggle('close')
    //     toggleButton.classList.toggle('rotate')
    // }
}

// Prevent sidebar and sub-menu from closing when clicking links
newsidebar.addEventListener('click', (event) => {
    if (event.target.tagName === 'A') {
        event.stopPropagation()
    }
})

window.addEventListener('load', setnewsidebarInitialState);
window.addEventListener('resize', setnewsidebarInitialState);
