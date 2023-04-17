const { NotImplementedError } = require('../extensions/index.js');

/**
 * There's a list of file, since two files cannot have equal names,
 * the one which comes later will have a suffix (k),
 * where k is the smallest integer such that the found name is not used yet.
 *
 * Return an array of names that will be given to the files.
 *
 * @param {Array} names
 * @return {Array}
 *
 * @example
 * For input ["file", "file", "image", "file(1)", "file"],
 * the output should be ["file", "file(1)", "image", "file(1)(1)", "file(2)"]
 *
 */
function renameFiles(names) {
  let result = [];
  for(let i=0; i<names.length; i++) {
    let number = 0;
    let newName = '';
    for(let j=0; j<i; j++) {
      if(names[i] === names[j]) number++;
    }
    newName = number === 0 ? names[i] : names[i]+`(${number})`;
    number = 0;
    for(let j=0; j<result.length; j++) {
      if(newName === result[j]) number++;
    }
    newName = number === 0 ? newName : newName+`(${number})`;
    result.push(newName);
  }
  return result;
}

module.exports = {
  renameFiles
};
