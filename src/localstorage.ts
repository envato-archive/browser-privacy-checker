import { useState, useEffect } from 'react'

import { checkUseLocalStorage } from './utils'

export const useLocalStorageChecker = () => {
  const [canUseLocalStorage, updateLocalStorageState] = useState(false)

  useEffect(() => {
    updateLocalStorageState(checkUseLocalStorage())
  }, [])
  return canUseLocalStorage
}
