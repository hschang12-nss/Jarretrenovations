// ══════════════════════════════════════════════════
//  GALLERY PHOTO LIST
//  To add a photo:
//  1. Put the image file in the gallery/ folder
//  2. Add a new entry to the GALLERY array below
// ══════════════════════════════════════════════════
var GALLERY = [
  // { file: "gallery/your-photo.jpg", title: "Project Title", tag: "Type of Work", desc: "City, GA · Description" },
];

var cur = 0, timer = null;

function buildSlideshow(wrapId, dotsId) {
  var wrap = document.getElementById(wrapId);
  var dotsWrap = document.getElementById(dotsId);
  if (!wrap) return;
  wrap.innerHTML = '';
  if (dotsWrap) dotsWrap.innerHTML = '';

  if (!GALLERY.length) {
    wrap.innerHTML = '<div class="gallery-empty"><strong>No photos yet</strong>Drop your photos into the gallery/ folder and add them to js/gallery.js</div>';
    return;
  }

  GALLERY.forEach(function(img, i) {
    var slide = document.createElement('div');
    slide.className = 'slide' + (i === 0 ? ' active' : '');
    slide.innerHTML =
      '<img src="gallery/' + img.file + '" alt="' + (img.title||'Project') + '" onerror="this.closest(\'.slide\').style.display=\'none\'">' +
      '<div class="slide-counter">' + (i+1) + ' / ' + GALLERY.length + '</div>' +
      '<div class="slide-overlay">' +
        '<div class="slide-tag">' + (img.tag||'Project') + '</div>' +
        '<div class="slide-title">' + (img.title||'') + '</div>' +
        '<div class="slide-desc">' + (img.desc||'') + '</div>' +
      '</div>';
    wrap.appendChild(slide);
    if (dotsWrap) {
      var dot = document.createElement('button');
      dot.className = 'dot' + (i === 0 ? ' active' : '');
      dot.setAttribute('aria-label','Photo '+(i+1));
      dot.onclick = function(){ goTo(i); };
      dotsWrap.appendChild(dot);
    }
  });

  var nav = document.createElement('div');
  nav.className = 'slide-controls';
  nav.innerHTML = '<button class="slide-btn" onclick="shift(-1)" aria-label="Previous">&#8249;</button><button class="slide-btn" onclick="shift(1)" aria-label="Next">&#8250;</button>';
  wrap.appendChild(nav);
  startTimer();
}

function goTo(n) {
  var slides = document.querySelectorAll('.slide:not(:last-child), .slide');
  var allSlides = document.querySelectorAll('.gallery-wrap .slide');
  var dots = document.querySelectorAll('.dot');
  if (!allSlides.length) return;
  allSlides[cur].classList.remove('active');
  if (dots[cur]) dots[cur].classList.remove('active');
  cur = ((n % allSlides.length) + allSlides.length) % allSlides.length;
  allSlides[cur].classList.add('active');
  if (dots[cur]) dots[cur].classList.add('active');
  startTimer();
}
function shift(d) { goTo(cur + d); }
function startTimer() { clearInterval(timer); timer = setInterval(function(){ goTo(cur+1); }, 5000); }

document.addEventListener('keydown', function(e) {
  if (e.key === 'ArrowLeft') shift(-1);
  if (e.key === 'ArrowRight') shift(1);
});
