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
