(() => {
    'use strict'

    window.addEventListener('DOMContentLoaded', () => {
        // CAROUSEL
        document.querySelectorAll('.carousel').forEach((element) => {
            let id = element.id
            if (!id) {
                id = String(Date.now().toString(32) + Math.random().toString(16)).replace(/\./g, '');
                element.id = id
            }

            let slides = element.getElementsByClassName('carousel-item')
            if (!slides.length) {
                return;
            }

            if (!element.getElementsByClassName('carousel-item active').length) {
                slides[0].classList.add('active')
            }

            let indicators = document.createElement('div')
            indicators.className = 'carousel-indicators'
            let controls
            if (!element.classList.contains('slider-buttons')) {
                controls = document.createElement('div')
                controls.classList.add('mouse-device', 'carousel-control-panel')
            }

            Object.keys(slides).forEach((index) => {
                let active = slides[index].classList.contains('active')
                indicators.insertAdjacentHTML('beforeend', '<button type="button" data-bs-target="#' + id + '" data-bs-slide-to="' + index + '"' + (active ? ' class="active"' : '') + '></button>')
                if (!element.classList.contains('slider-buttons')) {
                    controls.insertAdjacentHTML('beforeend', '<div data-slide-to="' + index + '"></div>')
                }
            })

            element.insertAdjacentElement('beforeend', indicators)
            if (element.classList.contains('slider-buttons')) {
                element.insertAdjacentHTML('beforeend',
                    '<button class="mouse-device carousel-control-prev" type="button" data-bs-target="#' + id + '" data-bs-slide="prev">'
                    + '<span class="carousel-control-prev-icon" aria-hidden="true"></span>'
                    + '<span class="visually-hidden">Previous</span>'
                    + '</button>')
                element.insertAdjacentHTML('beforeend',
                    '<button class="mouse-device carousel-control-next" type="button" data-bs-target="#'+ id + '" data-bs-slide="next">'
                    + '<span class="carousel-control-next-icon" aria-hidden="true"></span>'
                    + '<span class="visually-hidden">Next</span>'
                    + '</button>')
            }
            else {
                element.insertAdjacentElement('beforeend', controls)
            }

            const carousel = new bootstrap.Carousel(element)
            if (!element.classList.contains('slider-buttons')) {
                for (let el of controls.children) {
                    el.addEventListener('mouseover', () => {
                        const index = el.getAttribute('data-slide-to')
                        carousel.to(index)
                    })
                }
            }
        })
        // CAROUSEL

        // CATEGORIES MENU
        document.querySelectorAll('.cat-card .btn-show-sub').forEach((element) => {
            element.addEventListener('click', (e) => {
                e.preventDefault()
                e.stopPropagation()
                let li = element.closest('.cat-card')
                let uls = li.getElementsByTagName('ul')
                if (uls.length && uls[0].classList.contains('show')) {
                    for (let ul of uls) {
                        ul.classList.remove('show')
                    }
                }
                else {
                    uls[0].classList.add('show')
                }
            })
        })
        // CATEGORIES MENU

    })
})()
  