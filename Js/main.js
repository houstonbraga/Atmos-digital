//manipulacao de mouse enter nos projetos landing-pages e sistemas

const refMouseEnter = document.querySelectorAll('.projeto-img');
const linkProject = document.querySelectorAll('.icon-link');

refMouseEnter.forEach((ref, index) => {
    ref.addEventListener('mouseenter', function() {
        linkProject[index].classList.remove('hidden');
        linkProject[index].classList.add('visible');
    });

    ref.addEventListener('mouseleave', function() {
        linkProject[index].classList.remove('visible');
        linkProject[index].classList.add('hidden');
    });
});




