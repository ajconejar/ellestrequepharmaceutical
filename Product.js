document.addEventListener('DOMContentLoaded', () => {
  const filterBtn = document.getElementById('filterBtn');

  const searchProducts = () => {
    const searchQuery = document.getElementById('searchBar').value.toLowerCase();
    const productCards = document.querySelectorAll('.product-card');

    productCards.forEach(card => {
      const title = card.querySelector('.product-title').innerText.toLowerCase();

      if (title.includes(searchQuery)) {
        card.style.display = 'block';
      } else {
        card.style.display = 'none';
      }
    });
  };

  filterBtn.addEventListener('click', searchProducts);

  document.addEventListener('keydown', (event) => {
    if (event.key === 'Enter') {
      searchProducts();
    }
  });

  // Quick View functionality
  const quickViewButtons = document.querySelectorAll('.quick-view-btn');
  quickViewButtons.forEach((button, index) => {
    button.addEventListener('click', () => {
      const overlay = document.querySelectorAll('.quick-view-overlay')[index];
      overlay.classList.add('show');
    });
  });

  const closeButtons = document.querySelectorAll('.close-btn');
  closeButtons.forEach((button, index) => {
    button.addEventListener('click', () => {
      const overlay = document.querySelectorAll('.quick-view-overlay')[index];
      overlay.classList.remove('show');
    });
  });

  // Handle size selection and image change
  const sizeSelects = document.querySelectorAll('.size-select');
  sizeSelects.forEach(select => {
    select.addEventListener('change', (event) => {
      const selectedSize = event.target.value;
      const productCard = event.target.closest('.product-card');
      const productImage = productCard.querySelector('.product-image');
      const newImageSrc = productCard.getAttribute(`data-image-${selectedSize}`);
      productImage.src = newImageSrc;
    });
  });
});

// Function to show/hide the scroll-up button based on scroll position
window.onscroll = function() {
  var scrollUpBtn = document.getElementById("scrollUpBtn");
  if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
    scrollUpBtn.style.display = "block";
  } else {
    scrollUpBtn.style.display = "none";
  }
};

// Function to scroll to the top of the page
function scrollToTop() {
  window.scrollTo({ top: 0, behavior: 'smooth' });
}

// Listen for the ArrowUp key press to trigger the scroll up
document.addEventListener('keydown', function(event) {
  if (event.key === "ArrowUp") {
    scrollToTop();
  }
});
