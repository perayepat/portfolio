const header = document.querySelector("header");
const sectionOne = document.querySelector(".home");
const navbar = document.querySelector(".tabs");
const openModalButtons = document.querySelectorAll('[data-modal-target]');
const closeModalButtons = document.querySelectorAll('[data-close-button_1]');
const overlay = document.getElementById('overlay');
const navToggle = document.getElementById('navToggle');
const navbarLinks = document.querySelector(".tabs");

// navbar
navToggle.addEventListener("click", () =>{
    console.log("navbar clicked");
        navbarLinks.classList.add('active')
    })
// navbar end

openModalButtons.forEach(button => {
    button.addEventListener("click", () =>{
        const modal = document.querySelector(button.dataset.modalTarget)
        openModal(modal)
    })
})

closeModalButtons.forEach(button => {
    button.addEventListener("click", () =>{
        // close button
        const modals = button.closest('.modal')
        closeopenModal(modals)
    })
})

overlay.addEventListener("click", () =>{
    const modals = document.querySelectorAll('.modal.active')
    modals.forEach(modal =>{
        closeModal(modal)
    })
})

function openModal(modal) {
    if(modal == null) return
    modal.classList.add('active')
    overlay.classList.add('active')
}


function closeModal(modal) {
    if(modal == null) return
    modal.classList.remove('active')
    overlay.classList.remove('active')
}

const sectionOneOptions = {};

const sectionOneObserver = new IntersectionObserver(function(
    entries, 
    sectionOneObserver
    ) {
        entries.forEach(entry => {
            if(!entry.isIntersecting)
            {
                navbar.style.background = 'white';
                navbar.style.border = '0px solid';
            }
            else{
                navbar.style.background ='transparent';
                navbar.style.border = '1px solid black';
            }
        })
    },
    sectionOneOptions);

    sectionOneObserver.observe(sectionOne);

    