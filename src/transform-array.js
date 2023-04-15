const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create transformed array based on the control sequences that original
 * array contains
 * 
 * @param {Array} arr initial array
 * @returns {Array} transformed array
 * 
 * @example
 * 
 * transform([1, 2, 3, '--double-next', 4, 5]) => [1, 2, 3, 4, 4, 5]
 * transform([1, 2, 3, '--discard-prev', 4, 5]) => [1, 2, 4, 5]
 * 
 */
function transform(/*arr*/) {
  throw new NotImplementedError('Not implemented');
  /*
  if (!(arr instanceof Array)) throw Error("'arr' parameter must be an instance of the Array!");
  if(arr.length === 0) return [];
  let a = [];
  for(let i=0; i<arr.length; i++) {
    if (arr[i] === '--discard-next' || arr[i-1] === '--discard-next')
      a.push(undefined);
    else if (arr[i] === '--discard-prev')
      a.push(a[i-1] = undefined);
    else if (arr[i] === '--double-next') 
      a.push(arr[i+1]);
    else if (arr[i] === '--double-prev') 
      a.push(a[i-1]);
    else a.push(arr[i]);
  }
  a = a.filter( (e) => typeof e !== 'undefined');
  return a*/
}

module.exports = {
  transform
};
