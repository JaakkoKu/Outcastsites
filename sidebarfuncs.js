// =============================
// Element references
// =============================
const toggleButton = document.getElementById('toggle-btn')
const newsidebar = document.getElementById('newsidebar')
let hamburgerToggleBtn = document.querySelector('.menu_icon_box')
// const searchBar = document.getElementById('search-container')

// =============================
// Shared utilities
// =============================
function isMobileView(){
    return window.innerWidth < 800
}

function closeAllSubMenus(){
    Array.from(newsidebar.getElementsByClassName('show')).forEach(ul => {
        ul.classList.remove('show')
        ul.previousElementSibling.classList.remove('rotate')
    })
}

// =============================
// Desktop sidebar functions
// =============================
function toggleSidebar(event){
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

// =============================
// Mobile sidebar functions
// =============================
function closeMobileSidebar(){
    newsidebar.classList.remove('open')
    hamburgerToggleBtn.classList.remove('open')
}

function setnewsidebarInitialState(){
    if(isMobileView()){
        newsidebar.classList.add('close')
        hamburgerToggleBtn.classList.add('close')
        newsidebar.classList.remove('open')
        hamburgerToggleBtn.classList.remove('open')
    } else {
        newsidebar.classList.remove('close')
        hamburgerToggleBtn.classList.remove('close')
    }
}
// toggle hamburger menu to open and remove close class to show the sidebar
function handleMobileHamburgerClick(){
    if (!isMobileView()) {
        return
    }

    hamburgerToggleBtn.classList.toggle('open')
    newsidebar.classList.toggle('open')
    newsidebar.classList.remove('close')
    hamburgerToggleBtn.classList.remove('close')
// If hamburger menu is open, add open class for sidebar and remove close class. Otherwise toggle both to close
    if (hamburgerToggleBtn.classList.contains('open')) {
        newsidebar.classList.add('open')
        newsidebar.classList.remove('close')
    } else {
        newsidebar.classList.toggle('close')
        hamburgerToggleBtn.classList.toggle('close')
    }
}

function handleMobileOutsideClick(event){
    if (!isMobileView()) {
        return
    }

    if (!hamburgerToggleBtn.contains(event.target) && !newsidebar.contains(event.target) && !event.target.classList.contains('search-btn')) {
        closeMobileSidebar()
    }
}

// =============================
// Search functions
// =============================
function search(button, event){
    if (event) {
        
        event.stopPropagation()
    }

    button.nextElementSibling.classList.toggle('show')
    if(!newsidebar.classList.contains('open')){
        newsidebar.classList.toggle('open')
        toggleButton.classList.toggle('rotate')
    }
}

// =============================
// Event bindings
// =============================
hamburgerToggleBtn.onclick = handleMobileHamburgerClick

document.addEventListener('click', handleMobileOutsideClick)

newsidebar.addEventListener('click', (event) => {
    if (event.target.tagName === 'A') {
        event.stopPropagation()
    }
})

window.addEventListener('load', setnewsidebarInitialState)
// window.addEventListener('resize', setnewsidebarInitialState)
