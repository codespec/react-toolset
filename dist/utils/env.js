var isBrowser = function isBrowser() {
  return typeof window !== 'undefined';
};
var isMac = function isMac() {
  return (/mac/i.test(isBrowser() && window.navigator && window.navigator.platform)
  );
};

export { isBrowser, isMac };