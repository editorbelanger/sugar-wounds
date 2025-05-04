function toggleNav() {
  document.body.classList.toggle('hide-nav');
}
document.addEventListener('click', function(event) {
    const nav = document.querySelector('.nav');
    const hamburger = document.querySelector('.hamburger');
  
    if (!nav.contains(event.target) && !hamburger.contains(event.target)) {
      document.body.classList.add('hide-nav');
    }
  });