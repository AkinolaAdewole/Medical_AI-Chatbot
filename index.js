// Elements with class 'counter' that will be animated
const counters = document.querySelectorAll('.counter');

// Function to handle the counter animation
const mongoose = require("mongoose");

const todoSchema = new mongoose.Schema({
    item: { type: String, required: true },
    time: { type: String, required: true },
    date: { type: String, required: true },
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User", // Make sure this matches the actual user model name
        required: true
    }
});

const todoModel = mongoose.model("Todo", todoSchema);

module.exports = todoModel;


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

