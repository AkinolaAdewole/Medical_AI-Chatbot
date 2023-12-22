// Elements with class 'counter' that will be animated
const counters = document.querySelectorAll('.counter');

// Function to handle the counter animation
function animateCounter(counter) {
  const target = +counter.getAttribute('data-target');
  const increment = target / 100;

  let currentValue = 0;
  const updateCounter = () => {
    if (currentValue < target) {
      currentValue += increment;
      counter.innerText = Math.ceil(currentValue);
      setTimeout(updateCounter, 75);
    } else {
      counter.innerText = target;
    }
  };

  updateCounter();
}

// Function to reset the counters to '0'
function resetCounters() {
  counters.forEach((counter) => (counter.innerText = '0'));
}

// Function to handle scroll events
function scrollHandler(event) {
  const scrollPos = window.scrollY || window.pageYOffset;

  if (scrollPos > 100) {
    counters.forEach(animateCounter);
  } else {
    resetCounters();
  }
}

// Add event listener for scroll
window.addEventListener('scroll', scrollHandler);

// Reset counters on page load or refresh
window.addEventListener('load', resetCounters);





// Function to check if an element is in the viewport
function isInViewport(element) {
  const rect = element.getBoundingClientRect();
  return (
    rect.top >= 0 &&
    rect.left >= 0 &&
    rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
    rect.right <= (window.innerWidth || document.documentElement.clientWidth)
  );
}

// Function to handle the scroll event
function handleScroll() {
  const card = document.querySelector('.card1');

  if (isInViewport(card)) {
    card.classList.add('show'); // Add the 'show' class if card is in the viewport
  }
}

// Add a scroll event listener to trigger the animation
window.addEventListener('scroll', handleScroll);

// Initial check in case the element is already in the viewport on page load
handleScroll();

