const projects = [
    document.getElementById('uncaptchable'),
    document.getElementById('qtchartifier'),
];

const redirectToProject = (name) => {
    if (name.srcElement.id === 'uncaptchable') {
        window.open('https://github.com/ivanarena/uncaptchable/tree/main', '_blank');
    } else {
        window.open('https://github.com/ivanarena/unipd-progetto-pao/tree/main', '_blank');
    }
};

projects[0].addEventListener('click', (name) => redirectToProject(name));
projects[1].addEventListener('click', (name) => redirectToProject(name));

// TOTOP BUTTON HANDLER
const toTop = document.getElementById('top-link');
let timeout = null;
const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {

        if (entry.isIntersecting) {
            toTop.classList.remove('animation');
            timeout = setTimeout(function () {
                toTop.classList.add('not-displayed');
            }, 1500);
            return;
        }
        timeout && clearTimeout(timeout);
        toTop.classList.remove('not-displayed');
        toTop.classList.add('animation');
    });
});

observer.observe(document.getElementsByClassName('main-heading')[0]);
// ===============================================================

