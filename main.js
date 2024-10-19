
onload = () => {
  window.addEventListener('click', () => {
    const audio = document.getElementById('background-music');
    audio.muted = false;
    audio.play();
  });
  const c = setTimeout(() => {
    document.body.classList.remove("not-loaded");
    clearTimeout(c);
  }, 1000);
  
};

