const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given some integer, find the maximal number you can obtain
 * by deleting exactly one digit of the given number.
 *
 * @param {Number} n
 * @return {Number}
 *
 * @example
 * For n = 152, the output should be 52
 *
 */
function deleteDigit(/*n*/) {throw new NotImplementedError('Not implemented');/*
  n = n + '';
  let max = n[0]*1;
  for(let i=0; i<n.length; i++) {
    let buf='';
    for(let j=0; j<n.length; j++)
      if(i !== j) 
        buf+=n[j];
    console.debug('BB: ',buf);
    buf = buf*1;
    max = max < buf ? buf : max;
  }
  return max;*/
}

module.exports = {
  deleteDigit
};
