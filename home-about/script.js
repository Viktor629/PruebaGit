// Pequeña interactividad: menú móvil y navegación suave
(function(){
  // Smooth scroll for internal links
  document.querySelectorAll('a[href^="#"]').forEach(function(anchor){
    anchor.addEventListener('click', function(e){
      var targetId = this.getAttribute('href').slice(1);
      var target = document.getElementById(targetId);
      if(target){
        e.preventDefault();
        target.scrollIntoView({behavior:'smooth', block:'start'});
      }
    });
  });

  // Mobile menu toggle
  var menuToggle = document.getElementById('menuToggle');
  var nav = document.querySelector('.nav');
  menuToggle && menuToggle.addEventListener('click', function(){
    if(nav.style.display === 'flex'){
      nav.style.display = '';
    } else {
      nav.style.display = 'flex';
      nav.style.flexDirection = 'column';
      nav.style.gap = '0.5rem';
    }
  });

  // Highlight nav link on scroll
  var sections = Array.from(document.querySelectorAll('main section'));
  var navLinks = Array.from(document.querySelectorAll('.nav a'));

  function onScroll(){
    var fromTop = window.scrollY + 80;
    sections.forEach(function(section){
      if(section.offsetTop <= fromTop && (section.offsetTop + section.offsetHeight) > fromTop){
        var id = section.id;
        navLinks.forEach(function(a){ a.classList.toggle('active', a.getAttribute('href') === ('#' + id)); });
      }
    });
  }
  window.addEventListener('scroll', onScroll);
  onScroll();
})();