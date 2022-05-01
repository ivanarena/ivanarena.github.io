document.addEventListener('mousemove', (event) => {
    let element = document.getElementById('gradient');
    
    let mouseXPercentage = Math.round(event.pageX / window.innerWidth * 100);
    let mouseYPercentage = Math.round(event.pageY / window.innerHeight * 100);
    
    let gradient = 'rgba(0, 242, 148, 0.6) 30%, rgba(242, 102, 0, 0.6) 40%, rgba(0, 242, 148, 0.6) 60%,  rgba(242, 102, 0, 0.6) 70%, rgba(0, 0, 0, 1) 100%)';
    let property = `radial-gradient(at ${mouseYPercentage}% ${mouseXPercentage}%, ${gradient}`;
    
    element.style.background = property;
    
}, false);
    