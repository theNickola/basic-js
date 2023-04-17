const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given an array of domains, return the object with the appearances of the DNS.
 *
 * @param {Array} domains
 * @return {Object}
 *
 * @example
 * domains = [
 *  'code.yandex.ru',
 *  'music.yandex.ru',
 *  'yandex.ru'
 * ]
 *
 * The result should be the following:
 * {
 *   '.ru': 3,
 *   '.ru.yandex': 3,
 *   '.ru.yandex.code': 1,
 *   '.ru.yandex.music': 1,
 * }
 *
 */
function getDNSStats(/*domains*/) {throw new NotImplementedError('Not implemented');/*
  let allDomains = [];
  for(let i=0; i<domains.length; i++) {
    
    let d = domains[i].split('.');
    d = d.reverse();
    let one = '';
    for(let j=0; j<d.length; j++) {
      one +='.'+d[j]
      allDomains.push(one);
    }
  }
  let result = {};
  for(let i=0; i<allDomains.length; i++) {
    if(result[`${allDomains[i]}`] === undefined) result[`${allDomains[i]}`] = 1;
    else result[`${allDomains[i]}`]++;
  }
  return result;*/
}

module.exports = {
  getDNSStats
};
