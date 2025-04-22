(() => {
    'use strict'
  
    // const getStoredTheme = () => localStorage.getItem('theme')
    // const setStoredTheme = theme => localStorage.setItem('theme', theme)
  
    // const getPreferredTheme = () => {
    //   const storedTheme = getStoredTheme()
    //   if (storedTheme) {
    //     return storedTheme
    //   }
  
    //   return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light'
    // }
  
    // const setTheme = theme => {
    //   if (theme === 'auto') {
    //     document.documentElement.setAttribute('data-bs-theme', (window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light'))
    //   } else {
    //     document.documentElement.setAttribute('data-bs-theme', theme)
    //   }
    // }
  
    // setTheme(getPreferredTheme())
  
    const setActiveTheme = (theme = 'left') => {
      const themeSwitcher = document.querySelector('#hand-theme')
  
      if (!themeSwitcher) {
        return
      }
  
      const mainContainer = document.querySelector('#page-wrapper')
      if (mainContainer.classList.contains('right-hand')) {
        mainContainer.classList.remove('right-hand')
      }
      else {
        mainContainer.classList.add('right-hand')
      }
    //   const themeText = (theme == 'light' ? 'Dark Theme' : 'Light Theme')
    //   const themeIcon = (theme == 'light' ? 'bi-moon-stars-fill' : 'bi-brightness-high-fill')
  
    //   themeSwitcher.setAttribute('data-bs-theme-value', (theme == 'left' ? 'right' : 'light'))
    //   themeSwitcher.setAttribute('title', themeText)
    //   themeSwitcher.children[0].classList.remove(themeSwitcher.children[0].classList[0])
    //   themeSwitcher.children[0].classList.add(themeIcon)

    }
  
    // window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', () => {
    //   const storedTheme = getStoredTheme()
    //   if (storedTheme !== 'light' && storedTheme !== 'dark') {
    //     console.log('matchMedia', getPreferredTheme())
    //     const theme = getPreferredTheme()
    //     setTheme(theme)
    //     showActiveTheme(theme)
    //   }
    // })
  
    window.addEventListener('DOMContentLoaded', () => {
    //   showActiveTheme(getPreferredTheme())
    //  setActiveTheme()
  
      const toggle = document.querySelector('#hand-theme')
      toggle.addEventListener('click', () => {
    //         const theme = toggle.getAttribute('data-bs-theme-value')
    //         setStoredTheme(theme)
    //         setTheme(theme)
    //         showActiveTheme(theme)
            setActiveTheme()
        })
    })
  })()
  