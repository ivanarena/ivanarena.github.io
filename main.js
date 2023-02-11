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