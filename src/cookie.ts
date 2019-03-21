import { useState, useEffect } from 'react'

import { checkUseCookie } from './utils'

const useCookieChecker = () => {
  const [canUseCookie, updateCookieState] = useState(false)

  useEffect(() => {
    updateCookieState(checkUseCookie())
  }, [])
  return canUseCookie
}

export default useCookieChecker
