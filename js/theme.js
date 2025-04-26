(() => {
    'use strict'

    window.addEventListener('DOMContentLoaded', () => {
        document.querySelectorAll('.carousel').forEach((element) => new bootstrap.Carousel(element))

        document.querySelectorAll('.carousel-control-panel').forEach((panel) => {
            const carousel = bootstrap.Carousel.getInstance(panel.parentElement)
            for (let element of panel.children) {
                element.addEventListener('mouseover', () => {
                    const index = element.getAttribute('data-slide-to')
                    // console.log(index)
                    carousel.to(index)
                })
            }
        })
    })
})()
  