function reduce(arr, fn, initial) {
  let result = initial;

  for (let i = 0; i < arr.length; i++) {
    result = Object.assign({}, result, fn(initial, arr[i], i, arr));
  }

  return result;
}

module.exports = reduce;
