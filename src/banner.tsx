import React from 'react'

import { useCookieChecker, useLocalStorageChecker } from '.'

const DefaultBanner = () => {
  return (
    <div className="browser-privacy-checker-container">
      <span className="browser-privacy-checker-text">
        Your browser appears to block all cookies. This site requires some
        cookies to function correctly. Please review your brower settings before
        continuing.
      </span>
    </div>
  )
}

export const PrivacyBanner = ({ children }: { children?: React.ReactNode }) => {
  const canUseCookie = useCookieChecker()
  const canUseLocalStorage = useLocalStorageChecker()

  const shouldShowBanner = canUseCookie && canUseLocalStorage

  if (!shouldShowBanner) return null

  return children ? DefaultBanner : children
}
