(function(){
  // Billing toggle (monthly / yearly)
  var billingToggle = document.getElementById('billingToggle');
  var amounts = document.querySelectorAll('.amount');

  function updateBilling(){
    var yearly = billingToggle.checked;
    amounts.forEach(function(node){
      var monthly = node.getAttribute('data-monthly');
      var yearlyVal = node.getAttribute('data-yearly');
      if(yearly){
        node.textContent = yearlyVal;
        node.nextElementSibling && (node.nextElementSibling.textContent = '/año');
      } else {
        node.textContent = monthly;
        node.nextElementSibling && (node.nextElementSibling.textContent = '/mes');
      }
    });
  }

  billingToggle && billingToggle.addEventListener('change', updateBilling);
  updateBilling();

  // Simple contact form validation + fake submit
  var form = document.getElementById('contactForm');
  var status = document.getElementById('formStatus');

  function validateEmail(email){
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  }

  form && form.addEventListener('submit', function(e){
    e.preventDefault();
    status.textContent = '';
    var name = document.getElementById('name').value.trim();
    var email = document.getElementById('email').value.trim();
    var message = document.getElementById('message').value.trim();

    if(!name || !email || !message){
      status.textContent = 'Por favor completa todos los campos.';
      return;
    }
    if(!validateEmail(email)){
      status.textContent = 'Ingresa un correo electrónico válido.';
      return;
    }

    // Simular envío
    status.textContent = 'Enviando...';
    setTimeout(function(){
      status.textContent = '¡Gracias! Recibimos tu mensaje y te contactaremos pronto.';
      form.reset();
      updateBilling(); // en caso de que haya cambiado focus
    }, 900);
  });

  // Mobile menu toggle similar al otro archivo
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
})();