const isBrowser = () => (typeof window !== 'undefined')
const isMac = () => (/mac/i).test(isBrowser() && window.navigator && window.navigator.platform)

export {
  isBrowser,
  isMac,
}
