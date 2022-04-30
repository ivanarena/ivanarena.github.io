document.addEventListener('mousemove', (event) => {
    
    let mouseXPercentage = Math.round(event.pageX / window.innerWidth * 100);
    let mouseYPercentage = Math.round(event.pageY / window.innerHeight * 100);
   
    gradient = 'rgba(255,97,0,0.7) 0%, rgba(255,0,0,0.7010154403558299) 50%, black 100%)';
    property = 'radial-gradient(at ' + mouseXPercentage + '% ' + mouseYPercentage + '%, ' + gradient;

    document.body.style.background = property;
}, false);
