document.addEventListener('DOMContentLoaded', function () {

    setInterval(function () {
        let icons = document.querySelectorAll('.icon');
        icons.forEach(function (icon) {
            icon.classList.toggle('vibrar-anima');
        });
    }, 5000)
});