import * as React from 'react'

import { useCookieChecker, useLocalStorageChecker } from '.'

const containerStyle = {
  backgroundColor: '#F8F8FA',
  width: '100%',
  position: 'relative' as 'relative',
  zIndex: 1000
}

const textStyle = {
  textAlign: 'center' as 'center',
  padding: '10px'
}

const DefaultBanner = () => {
  return (
    <div className="browser-privacy-checker-container" style={containerStyle}>
      <p className="browser-privacy-checker-text" style={textStyle}>
        Your browser appears to block all cookies. This site requires some
        cookies to function correctly. Please review your brower settings before
        continuing.
      </p>
    </div>
  )
}

export const PrivacyBanner = ({ children }: { children?: React.ReactNode }) => {
  const canUseCookie = useCookieChecker()
  const canUseLocalStorage = useLocalStorageChecker()

  const shouldShowBanner = canUseCookie && canUseLocalStorage

  if (!shouldShowBanner) return null

  return children ? children : <DefaultBanner />
}
