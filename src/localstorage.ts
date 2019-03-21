import { useState, useEffect } from 'react'

import { checkUseLocalStorage } from './utils'

const useLocalStorageChecker = () => {
  const [canUseLocalStorage, updateLocalStorageState] = useState(false)

  useEffect(() => {
    updateLocalStorageState(checkUseLocalStorage())
  }, [])
  return canUseLocalStorage
}

export default useLocalStorageChecker
