import { useState, useEffect } from 'react'

import { checkUseLocalStorage } from './utils'

export const useLocalStorageChecker = () => {
  const [canUseLocalStorage, updateLocalStorageState] = useState(true)

  useEffect(() => {
    updateLocalStorageState(checkUseLocalStorage())
  }, [])
  return canUseLocalStorage
}
