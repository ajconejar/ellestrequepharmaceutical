document.addEventListener('DOMContentLoaded', function() {
  // Cache DOM elements
  const heroTitle = document.querySelector('.hero-title');
  const contentSections = document.querySelectorAll('.content-section');
  const scrollArrow = document.querySelector('.scroll-arrow');
  const targetSection = document.querySelector('#services');
  const ticker = document.querySelector('.ticker');
  const tickerWrapper = document.getElementById('tickerWrapper');
  const scrollUpBtn = document.getElementById('scrollUpBtn');
  const video1 = document.getElementById('video1');
  const navbar = document.getElementById('navbar');
  
  const triggerHeight = window.innerHeight / 2;
  let lastScrollTop = 0;
  let isArrowHidden = false;

  // Scroll event handler
  function onScroll() {
    const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    
    // Hero and content section scroll effect
    if (scrollTop > triggerHeight) {
      document.body.classList.add('scrolled');
      heroTitle.classList.add('scrolled');
      contentSections.forEach(section => section.classList.add('scrolled'));
    } else {
      document.body.classList.remove('scrolled');
      heroTitle.classList.remove('scrolled');
      contentSections.forEach(section => section.classList.remove('scrolled'));
    }

    // Scroll arrow visibility
    const targetPosition = targetSection ? targetSection.offsetTop : 0;
    if (scrollTop < targetPosition - triggerHeight && isArrowHidden) {
      scrollArrow.classList.remove('hidden');
      isArrowHidden = false;
    } else if (scrollTop >= targetPosition - triggerHeight && !isArrowHidden) {
      scrollArrow.classList.add('hidden');
      isArrowHidden = true;
    }

    // Navbar scroll effect
    if (scrollTop > 50) {
      navbar.classList.add('scrolled');
    } else {
      navbar.classList.remove('scrolled');
    }

    // Scroll-up button visibility
    if (scrollTop > 100) {
      scrollUpBtn.style.display = "block";
    } else {
      scrollUpBtn.style.display = "none";
    }

    // Ticker visibility
    if (scrollTop > lastScrollTop) {
      tickerWrapper.classList.add('hidden');
      ticker.style.animationPlayState = 'paused';
    } else {
      tickerWrapper.classList.remove('hidden');
      ticker.style.animationPlayState = 'running';
    }
    lastScrollTop = scrollTop <= 0 ? 0 : scrollTop;
  }

  // Scroll to top functionality
  function scrollToTop() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }

  // Play video sequence
  function playVideoSequence() {
    video1.play();
    video1.addEventListener('ended', function() {
      setTimeout(function() {
        video1.play();
      }, 2000);
    });
  }

  // Event listeners
  window.addEventListener('scroll', onScroll);

  scrollArrow.addEventListener('click', function(e) {
    e.preventDefault();
    targetSection.scrollIntoView({ behavior: 'smooth' });
  });

  scrollUpBtn.addEventListener('click', scrollToTop);

  document.addEventListener('keydown', function(event) {
    if (event.key === "ArrowUp") {
      scrollToTop();
    }
  });

  ticker.addEventListener('mouseenter', () => {
    ticker.style.animationPlayState = 'paused';
  });

  ticker.addEventListener('mouseleave', () => {
    ticker.style.animationPlayState = 'running';
  });

  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
      e.preventDefault();
      document.querySelector(this.getAttribute('href')).scrollIntoView({
        behavior: 'smooth'
      });
    });
  });

  // Initialize video sequence
  playVideoSequence();
});