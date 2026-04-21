// ══════════════════════════════════════════════════
//  GALLERY PHOTO LIST
//  To add a new photo:
//  1. Put the image file in the gallery/ folder
//  2. Copy one of the lines below, update the
//     filename, title, tag and description
// ══════════════════════════════════════════════════
var GALLERY = [
  { file: "gallery/project-bathroom-1.jpg",  title: "Master Bathroom Renewal",    tag: "Bathroom Remodel", desc: "East Point, GA · Full renovation & tile work" },
  { file: "gallery/project-shower-1.jpg",    title: "Custom Shower Installation",  tag: "Shower",           desc: "Atlanta metro · Custom tile & fixture upgrade" },
  { file: "gallery/project-interior-1.jpg",  title: "Interior Renovation",         tag: "Interior",         desc: "Lithonia, GA · Expert craftsmanship throughout" },

  // ── Add your new photos below this line ──────────
  // { file: "gallery/your-photo.jpg", title: "Project Title", tag: "Type of Work", desc: "City, GA · Description" },
];

// ─── Slideshow engine — no need to edit below this line ───────────────────────
var cur = 0, timer = null;

function buildSlideshow(wrapId, dotsId) {
  var wrap = document.getElementById(wrapId);
  var dotsWrap = document.getElementById(dotsId);
  if (!wrap) return;
  wrap.innerHTML = '';
  if (dotsWrap) dotsWrap.innerHTML = '';

  if (!GALLERY.length) {
    wrap.innerHTML = '<div class="gallery-empty"><strong>No photos yet</strong>Add your project photos to the gallery/ folder and update js/gallery.js</div>';
    return;
  }

  GALLERY.forEach(function(img, i) {
    var slide = document.createElement('div');
    slide.className = 'slide' + (i === 0 ? ' active' : '');
    slide.innerHTML =
      '<img src="' + img.file + '" alt="' + (img.title || 'Project photo') + '" ' +
           'onerror="this.closest(\'.slide\').style.display=\'none\'">' +
      '<div class="slide-counter">' + (i + 1) + ' / ' + GALLERY.length + '</div>' +
      '<div class="slide-overlay">' +
        '<div class="slide-tag">' + (img.tag || 'Project') + '</div>' +
        '<div class="slide-title">' + (img.title || '') + '</div>' +
        '<div class="slide-desc">' + (img.desc || '') + '</div>' +
      '</div>';
    wrap.appendChild(slide);

    if (dotsWrap) {
      var dot = document.createElement('button');
      dot.className = 'dot' + (i === 0 ? ' active' : '');
      dot.setAttribute('aria-label', 'Photo ' + (i + 1));
      dot.onclick = (function(idx){ return function(){ goTo(idx); }; })(i);
      dotsWrap.appendChild(dot);
    }
  });

  var nav = document.createElement('div');
  nav.className = 'slide-controls';
  nav.innerHTML =
    '<button class="slide-btn" onclick="shift(-1)" aria-label="Previous">&#8249;</button>' +
    '<button class="slide-btn" onclick="shift(1)"  aria-label="Next">&#8250;</button>';
  wrap.appendChild(nav);
  startTimer();
}

function goTo(n) {
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

function startTimer() {
  clearInterval(timer);
  timer = setInterval(function() { goTo(cur + 1); }, 5000);
}

document.addEventListener('keydown', function(e) {
  if (e.key === 'ArrowLeft')  shift(-1);
  if (e.key === 'ArrowRight') shift(1);
});
