// DARK MODE HANDLER
const darkToggle = document.getElementById('dark-toggle');
const lightToggle = document.getElementById('light-toggle');
const body = document.getElementsByTagName('body')[0];

if (localStorage.prefersDark === undefined) {
    localStorage.setItem('prefersDark',
        window.matchMedia("(prefers-color-scheme: dark)").matches);
}

if (localStorage.prefersDark === "true") {
    darkModeOn();
}


function darkModeOn() {
    darkToggle.classList.add('not-displayed');
    lightToggle.classList.remove('not-displayed');
    console.log('darkModeOn');
    body.classList.add('dark');

}

function darkModeOff() {
    lightToggle.classList.add('not-displayed');
    darkToggle.classList.remove('not-displayed');
    console.log('darkModeOff');
    body.classList.remove('dark');
}

darkToggle.addEventListener('click', darkModeOn);
lightToggle.addEventListener('click', darkModeOff);
// ===============================================================


// TOTOP BUTTON HANDLER
const toTop = document.getElementById('top-link-box');
let timeout = null;
const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {

        if (entry.isIntersecting) {
            toTop.classList.remove('animation');
            timeout = setTimeout(function () {
                toTop.classList.add('not-displayed');
            }, 2000);
            return;
        }
        timeout && clearTimeout(timeout);
        console.log('show')
        toTop.classList.remove('not-displayed');
        toTop.classList.add('animation');
    });
});

observer.observe(document.getElementsByClassName('main-sec')[0]);
// ===============================================================