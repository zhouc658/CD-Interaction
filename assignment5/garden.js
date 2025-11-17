function animateTextShadow() {
    const offset = Math.sin(performance.now() * 0.002) * 3; // oscillates ±3px
    const blur = 3 + Math.sin(performance.now() * 0.003) * 2; // subtle blur change
  
    // Apply to body text
    document.body.style.textShadow = `${offset}px ${offset}px ${blur}px rgba(0,0,0,0.4)`;
  
    requestAnimationFrame(animateTextShadow);
  }
  
  // start the animation
  requestAnimationFrame(animateTextShadow);
  