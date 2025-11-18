function animateBackground() {
    const newColor = Math.sin(performance.now() * 0.001) * 10;


    const color1 = `hsl(${220 + newColor}, 100%, 50%)`;  
    const color2 = `hsl(${200 + newColor}, 80%, 60%)`;   

    document.body.style.background = `linear-gradient(to bottom, ${color1}, ${color2})`;

    requestAnimationFrame(animateBackground);
}

requestAnimationFrame(animateBackground);
