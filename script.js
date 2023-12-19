document.addEventListener('DOMContentLoaded', function() {
    var popup = document.querySelector('.popup');
    popup.classList.add('hide');
    setTimeout(function(){
        popup.classList.remove('hide');
        popup.classList.add('show');
    }, 5000);
});
