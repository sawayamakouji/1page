document.addEventListener('DOMContentLoaded', () => {
  // Create floating circle
  const floatingCircle = document.createElement('div');
  floatingCircle.className = 'floating-circle';
  floatingCircle.innerHTML = `
    <a href="https://twitter.com/your_profile" target="_blank" rel="noopener noreferrer"></a>
  `;
  document.body.appendChild(floatingCircle);

  // Phase 8 visibility control
  const phase8Slide = document.querySelector('.phase-8');
  if (phase8Slide) {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          document.body.classList.add('phase-8-visible');
        }
      });
    }, {
      threshold: 0.1
    });

    observer.observe(phase8Slide);
  }
});