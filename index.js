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


