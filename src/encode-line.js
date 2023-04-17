const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given a string, return its encoding version.
 *
 * @param {String} str
 * @return {String}
 *
 * @example
 * For aabbbc should return 2a3bc
 *
 */
function encodeLine(/*str*/) {throw new NotImplementedError('Not implemented');/*
  if(!str) return '';
  let result = '';
  let count = 0;
  let current = '';
  for(let i=0; i<str.length; i++) {
    if(str[i] !== current) {
      if(current) result += count === 1 ? current : count+current;
      current = str [i]; 
      count = 1;
    }
    else {
      count++
    }
  }
  result += count === 1 ? current : count+current;
  return result;*/
}

module.exports = {
  encodeLine
};
