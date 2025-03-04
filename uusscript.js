const toggleButton = document.getElementById('toggle-btn')
const newsidebar = document.getElementById('newsidebar')

// Sidebar is closed from the beginning
function toggleSidebar(event){
    // Prevent closing if clicking a link
    if (event && event.target.tagName === 'A') {
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
        newsidebar.classList.toggle('close')
        toggleButton.classList.toggle('rotate')
    }
}

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
    if(newsidebar.classList.contains('close')){
        newsidebar.classList.toggle('close')
        toggleButton.classList.toggle('rotate')
    }
}

// Prevent sidebar and sub-menu from closing when clicking links
newsidebar.addEventListener('click', (event) => {
    if (event.target.tagName === 'A') {
        event.stopPropagation()
    }
})

// Now, clicking a link keeps both the sidebar and sub-menu open
// Let me know if you want any more adjustments! 🚀
