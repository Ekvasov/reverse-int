module.exports = function reverse (n) {
  const module = Math.abs(n);
  let reverseNumber = '';
  for (i = String(module).length - 1; i >= 0; i--) {
    reverseNumber += String(module)[i];
  }
  return Number(reverseNumber);
}
