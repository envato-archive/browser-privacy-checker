# browser-privacy-checker

Handy React 🎣 modules to check whether can use user cookie and similar technologies from browser

### Installation

```
npm i @envato/browser-privacy-checker
```

### Usage

#### Use as React 🎣

- Cookie checker hook: `useCookieChecker`
- LocalStorage checker hook: `useLocalStorageChecker`

```jsx
import {
  useCookieChecker,
  useLocalStorageChecker
} from '@envato/browser-privacy-checker'

const MyApp = () => {
  const canUseCookie = useCookieChecker()
  const canUseLocalStorage = useLocalStorageChecker()

  return (
    <>
      <span>{canUseCookie}</span>
      <span>{canUseLocalStorage}</span>
    </>
  )
}
```

#### Show banner when cookie/localstorage blocked

```jsx
import { PrivacyBanner } from '@envato/browser-privacy-checker'

const MyApp = () => {
  return (
    <div>
      <PrivacyBanner />
      <PrivacyBanner>
        <MyCustomerBanner />
      </PrivacyBanner>
    </div>
  )
}
```

#### Use as utils

```js
import {
  checkUseLocalStorage,
  checkUseCookie
} from '@envato/browser-privacy-checker'

checkUseCookie()
checkUseLocalStorage()
```
