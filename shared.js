let backdrop = document.querySelector('.backdrop');

// console.dir(backdrop);

// backdrop.style.display = 'block';
let modal = document.querySelector('.modal');
let modalNoButton = document.querySelector('.modal__action--negative')
let selectPlanButtons = document.querySelectorAll('.plan button');
let toggleButton = document.querySelector('.toggle-button');
let mobileNav = document.querySelector('.mobile-nav')
// console.dir(selectPlanButtons);
for (let i = 0; i < selectPlanButtons.length; i++) {
    selectPlanButtons[i].addEventListener('click', function() {
        // modal.style.display = 'block';
        // backdrop.style.display = 'block';
        modal.classList.add("open");
        backdrop.classList.add("open");
        //we can replace the above 2 lines with modal.className or modal.classList (preferable)
    });
}

backdrop.addEventListener('click', function() {
    mobileNav.style.display = 'none';
    closeModal();
});

if (modalNoButton) {
    modalNoButton.addEventListener('click', closeModal);
}

function closeModal() {
    if (modal){
        // modal.style.display = 'none';
        modal.classList.remove("open");
    }
    backdrop.classList.remove("open");
}

toggleButton.addEventListener('click', function() {
    mobileNav.style.display = 'block';
    backdrop.classList.add("open");

});