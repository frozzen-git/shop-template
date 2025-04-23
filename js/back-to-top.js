(() => {
    'use strict'
  
    window.addEventListener('DOMContentLoaded', () => {
        //set the default state
  let scrolling = false;
      const btt = document.getElementById('btt-button');
      //the scroll listener
      window.addEventListener('scroll', () => {
        scrolling = true;
      })
  //run event handler every 300 ms
  setInterval(() => {
    if (scrolling) {
      //reset the state var
      scrolling = false;
      
      //we already talked about all this
      var top = window.pageYOffset;
      var is_active = btt.classList.contains('is-active');
      if (top > 200 && !is_active) {
        btt.classList.add('is-active');
      } else if (top < 200 && is_active) {
        btt.classList.remove('is-active');
      }
    }
  }, 300)     
      //   //the amount of scroll
      //   var top = window.pageYOffset;
      //   //does the button have the class that displays it
      //   var is_active = btt.classList.contains('is-active');
      //   if (top > 200 && !is_active) {
      //     //if the scroll amount is greater than the threshold and the
      //     //button isn't displayed, add the class to display it
      //     btt.classList.add('is-active');
      //   } else if (top < 200 && is_active) {
      //     //if the scroll amount is less than the threshold and the
      //     //button is displayed, remove the class that displays it
      //     btt.classList.remove('is-active');
      //   }
      // }, {passive: true})
      // //passive: true makes it faster, it's a little bit of a
      // //rabbit hole to explain here
    
      //the click handler, scrolls the page back to top
      btt.addEventListener('click', (e) => {
        e.preventDefault();
        window.scroll({
          top: 0,
          behavior: 'smooth'
        });
      })
    })
  })()
  