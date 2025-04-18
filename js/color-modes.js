/*!
 * Color mode toggler for Bootstrap's docs (https://getbootstrap.com/)
 * Copyright 2011-2025 The Bootstrap Authors
 * Licensed under the Creative Commons Attribution 3.0 Unported License.
 */

(() => {
  'use strict'

  const getStoredTheme = () => localStorage.getItem('theme')
  const setStoredTheme = theme => localStorage.setItem('theme', theme)

  const getPreferredTheme = () => {
    const storedTheme = getStoredTheme()
    if (storedTheme) {
      return storedTheme
    }

    return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light'
  }

  const setTheme = theme => {
    if (theme === 'auto') {
      document.documentElement.setAttribute('data-bs-theme', (window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light'))
    } else {
      document.documentElement.setAttribute('data-bs-theme', theme)
    }
  }

  setTheme(getPreferredTheme())

  const showActiveTheme = (theme) => {
    const themeSwitcher = document.querySelector('#bd-theme')

    if (!themeSwitcher) {
      return
    }

    const themeText = (theme == 'light' ? 'Dark Theme' : 'Light Theme')
    const themeIcon = (theme == 'light' ? 'bi-moon-stars-fill' : 'bi-brightness-high-fill')

    themeSwitcher.setAttribute('data-bs-theme-value', (theme == 'light' ? 'dark' : 'light'))
    themeSwitcher.setAttribute('title', themeText)
    themeSwitcher.children[0].classList.remove(themeSwitcher.children[0].classList[0])
    themeSwitcher.children[0].classList.add(themeIcon)
  }

  window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', () => {
    const storedTheme = getStoredTheme()
    if (storedTheme !== 'light' && storedTheme !== 'dark') {
      console.log('matchMedia', getPreferredTheme())
      const theme = getPreferredTheme()
      setTheme(theme)
      showActiveTheme(theme)
    }
  })

  window.addEventListener('DOMContentLoaded', () => {
    showActiveTheme(getPreferredTheme())

    const toggle = document.querySelector('#bd-theme')
    toggle.addEventListener('click', () => {
          const theme = toggle.getAttribute('data-bs-theme-value')
          setStoredTheme(theme)
          setTheme(theme)
          showActiveTheme(theme)
        })
  })
})()
