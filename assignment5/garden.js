function animateTextShadow() {
    const offset = Math.sin(performance.now() * 0.002) * 3; 
    const blur = 3 + Math.sin(performance.now() * 0.003) * 2; 
  
    document.body.style.textShadow = `${offset}px ${offset}px ${blur}px rgba(0,0,0,0.4)`;
  
    requestAnimationFrame(animateTextShadow);
  }
  
  requestAnimationFrame(animateTextShadow);