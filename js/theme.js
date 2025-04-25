(() => {
    'use strict'
  
    window.addEventListener('DOMContentLoaded', () => {
        document.querySelectorAll('.carousel').forEach((element) => new bootstrap.Carousel(element))
    })
    })()
  