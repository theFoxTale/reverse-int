module.exports = function reverse(number) {
  const arr = Math.abs(number).toString().split('');
  return Number(arr.reverse().join(''));
};
