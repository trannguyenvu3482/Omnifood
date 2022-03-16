const $ = document.querySelector.bind(document);
const $$ = document.querySelectorAll.bind(document);

const btnNav = $('.btn-mobile-nav');
const header = $('.header');

// Mobile Nav Toggle Button
btnNav.addEventListener('click', (e) => {
  header.classList.toggle('nav-open');
});

// Smooth scrolling for all links
$$('a:link').forEach(function (link) {
  link.addEventListener('click', (e) => {
    e.preventDefault();
    const href = link.getAttribute('href');
    if (href.charAt(0) === '#') {
      $(href).scrollIntoView({
        behavior: 'smooth',
      });
    }
  });

  // Close mobile nav if it's enabled
  if (link.classList.contains('main-nav-link')) {
    header.classList.remove('nav-open');
  }
});

// Sticky Nav
const sectionHeroEl = $('.section-hero');

const obs = new IntersectionObserver(
  function (entries) {
    const ent = entries[0];

    if (!ent.isIntersecting) {
      document.body.classList.add('sticky');
    } else {
      document.body.classList.remove('sticky');
    }
  },
  {
    root: null,
    threshold: 0,
    rootMargin: '-80px',
  }
);

obs.observe(sectionHeroEl);
