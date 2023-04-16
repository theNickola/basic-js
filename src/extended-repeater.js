const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create a repeating string based on the given parameters
 *  
 * @param {String} str string to repeat
 * @param {Object} options options object 
 * @return {String} repeating string
 * 
 *
 * @example
 * 
 * repeater('STRING', { repeatTimes: 3, separator: '**', 
 * addition: 'PLUS', additionRepeatTimes: 3, additionSeparator: '00' })
 * => 'STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS'
 *
 */
function repeater(/*str, options*/) {throw new NotImplementedError('Not implemented');
  /*
  let separator = options.separator ? options.separator : '+';
  let additionSeparator = options.additionSeparator ? options.additionSeparator : '|';
  let repeatTimes = options.repeatTimes ? options.repeatTimes : 1;
  let additionRepeatTimes = options.additionRepeatTimes ? options.additionRepeatTimes : 1;

  let additionalStr ='';
  if(options.addition !== undefined) {
    let additionalArr = [];
    for(let i=0; i<additionRepeatTimes; i++)
      additionalArr.push(options.addition+'');
    additionalStr = additionalArr.join(additionSeparator);
  }

  let mainStr = str + additionalStr;
  let mainArr = [];
  for(let i=0; i<repeatTimes; i++) 
    mainArr.push(mainStr);
  
  return mainArr.join(separator);*/
}

module.exports = {
  repeater
};
