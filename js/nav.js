function openMobileMenu(){document.getElementById('mobileMenu').classList.add('open')}
function closeMobileMenu(){document.getElementById('mobileMenu').classList.remove('open')}
// Mark active nav link based on current page filename
document.addEventListener('DOMContentLoaded',function(){
  const page = window.location.pathname.split('/').pop() || 'index.html';
  document.querySelectorAll('.nav-link').forEach(function(l){
    if(l.getAttribute('href') === page) l.classList.add('active');
  });
});
