const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create name of dream team based on the names of its members
 *  
 * @param {Array} members names of the members 
 * @return {String | Boolean} name of the team or false
 * in case of incorrect members
 *
 * @example
 * 
 * createDreamTeam(['Matt', 'Ann', 'Dmitry', 'Max']) => 'ADMM'
 * createDreamTeam(['Olivia', 1111, 'Lily', 'Oscar', true, null]) => 'LOO'
 *
 */
function createDreamTeam(members) {
  if(!Array.isArray(members)) return false;
  members = members.filter((e) => typeof e === 'string');
  members = members.map((e) => e=e.trim()[0].toUpperCase());
  members = members.sort();
  let res='';
  for(let i=0;i<members.length;i++) {
    res+=members[i];
  }
  return res;
}

module.exports = {
  createDreamTeam
};
