const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement chainMaker object according to task description
 * 
 */
const chainMaker = {
  getLength() {throw new NotImplementedError('Not implemented');
    /*return this.arrChain.length;*/
  },



  addLink(/*value*/) {throw new NotImplementedError('Not implemented');/*
    if(arguments.length === 0) 
      this.arrChain.push('(  )');
    else
      this.arrChain.push(`( ${value} )`);
    return this;*/
  },



  removeLink(/*position*/) {throw new NotImplementedError('Not implemented');/*
    if (typeof position === 'number' && position > 0 && position < this.arrChain.length)
      this.arrChain.splice(position-1, 1)
    else {
      this.arrChain = [];
      throw new Error("You can't remove incorrect link!");
    }
    return this;*/
  },



  reverseChain() {throw new NotImplementedError('Not implemented');/*
    this.arrChain = this.arrChain.reverse();
    return this;*/
  },



  finishChain() {throw new NotImplementedError('Not implemented');/*
    let finish = this.arrChain.join('~~');
    this.arrChain = [];
    return finish;*/
  },



  arrChain: []
};

module.exports = {
  chainMaker
};
