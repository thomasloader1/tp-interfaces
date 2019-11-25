var buttomSend = document.getElementById('send');
var mainContent = document.getElementById('content');
var mainContentTwo = document.getElementById('content-two');
buttomSend.addEventListener('click', () => {
    mainContent.classList.replace('d-inline', 'd-none');
    mainContentTwo.classList.replace('d-none', 'd-inline');

});