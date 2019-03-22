import { useState, useEffect } from 'react'

import { checkUseCookie } from './utils'

export const useCookieChecker = () => {
  const [canUseCookie, updateCookieState] = useState(true)

  useEffect(() => {
    updateCookieState(checkUseCookie())
  }, [])
  return canUseCookie
}
