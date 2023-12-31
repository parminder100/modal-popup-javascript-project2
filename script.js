const modalShowBtn = document.querySelector(".modal-open-btn");
const modalCloseBtn = document.querySelector(".modal-close-btn");
const modalContainer = document.querySelector(".modal-container");
const banner = document.querySelector(".banner");

modalShowBtn.addEventListener('click', function(){
    modalContainer.classList.toggle('show-modal');
    banner.classList.toggle('hide');
});

modalCloseBtn.addEventListener('click', function(){
    modalContainer.classList.toggle('show-modal');
    banner.classList.toggle('hide');
})