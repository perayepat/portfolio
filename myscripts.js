const header = document.querySelector("header");
const sectionOne = document.querySelector(".home");
const navbar = document.querySelector(".tabs");

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