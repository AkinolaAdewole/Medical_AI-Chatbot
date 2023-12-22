
const counters = document.querySelectorAll('.counter');
 
 // Function to animate the counters
 function countUp() {
   counters.forEach((counter) => {
     // Initialize the counter text to '0'
     counter.innerText = '0';
 
     const updateCounter = () => {
       // Get the target value from the 'data-target' attribute
       const target = +counter.getAttribute('data-target');
       // Get the current counter value
       const c = +counter.innerText;
 
       // Calculate an increment value (1% of the target)
       const increment = target / 100;
 
       // If the current counter is less than the target, increment it
       if (c < target) {
         // Increment and round up, then update the counter text
         counter.innerText = `${Math.ceil(c + increment)}`;
 
         // Schedule the next update with a delay of 75ms
         setTimeout(updateCounter, 75);
       } else {
         // If the target is reached, set the counter text to the target value
         counter.innerText = target;
       }
     };
 
     // Start the counter animation
     updateCounter();
   });
 }
 
 // Function to reset the counters to '0'
 function reset() {
   counters.forEach((counter) => (counter.innerHTML = '0'));
 }
 