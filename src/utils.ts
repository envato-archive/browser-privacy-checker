// https://github.com/Modernizr/Modernizr/blob/master/feature-detects/cookies.js
export const checkUseCookie = () => {
  try {
    // Create cookie
    document.cookie = 'cookietest=1'
    var ret = document.cookie.indexOf('cookietest=') !== -1
    // Delete cookie
    document.cookie = 'cookietest=1; expires=Thu, 01-Jan-1970 00:00:01 GMT'
    return ret
  } catch (e) {
    return false
  }
}

// https://github.com/Modernizr/Modernizr/blob/master/feature-detects/storage/localstorage.js
export const checkUseLocalStorage = () => {
  var mod = 'modernizr'
  try {
    localStorage.setItem(mod, mod)
    localStorage.removeItem(mod)
    return true
  } catch (e) {
    return false
  }
}
