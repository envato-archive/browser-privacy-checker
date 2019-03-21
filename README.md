# browser-privacy-checker

Handy React modules to check whether can use user cookie and similar technologies from browser

### Installation

```
npm i @envato/browser-privacy-checker
```

### Usage

Cookie checker

```jsx
import { useCookieChecker } from '@envat/browser-privacy-checker'

const MyApp = () => {
  const canUseCookie = useCookieChecker()

  return <span>{canUseCookie}</span>
}
```

LocalStorage checker

```jsx
import { useLocalStorageChecker } from '@envat/browser-privacy-checker'

const MyApp = () => {
  const canUseLocalStorage = useLocalStorageChecker()

  return <span>{canUseLocalStorage}</span>
}
```
