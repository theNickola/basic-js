const { NotImplementedError } = require('../extensions/index.js');

/**
 * Extract season from given date and expose the enemy scout!
 * 
 * @param {Date | FakeDate} date real or fake date
 * @returns {String} time of the year
 * 
 * @example
 * 
 * getSeason(new Date(2020, 02, 31)) => 'spring'
 * 
 */
function getSeason(/*date*/) {
  throw new NotImplementedError('Not implemented');
  /*if(arguments.length!==1) return 'Unable to determine the time of year!';

  if(!(date instanceof Date)) throw new Error('Invalid date!');
  if(Object.getOwnPropertyNames(date).length !== 0) throw new Error('Invalid date!');
  
  let m = date.getMonth()+1;
  let res = m > 2 && m < 6 ?  'spring' :
    m > 5 && m < 9 ? 'summer' :
      m > 8 && m < 12 ? 'autumn' : 
        m > 11 || m < 3 ? 'winter':'';
  return res;*/
}

module.exports = {
  getSeason
};
