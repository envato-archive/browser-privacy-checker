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

Screenshot:
![screenshot](https://user-images.githubusercontent.com/1183541/54971930-1e865e80-4fdd-11e9-9f9d-487ac1448cf1.png)


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
