const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement class DepthCalculator with method calculateDepth
 * that calculates deoth of nested array
 * 
 * @example
 * 
 * const depthCalc = new DepthCalculator();
 * depthCalc.calculateDepth([1, 2, 3, 4, 5]) => 1
 * depthCalc.calculateDepth([1, 2, 3, [4, 5]]) => 2
 * depthCalc.calculateDepth([[[]]]) => 3
 *
 */
class DepthCalculator {
  calculateDepth(arr) {throw new NotImplementedError('Not implemented');/*
    let depth = 0;
    let digMax = 0;
    if(arr instanceof Array)
      depth++;
    
    for(let i = 0; i < arr.length; i++) {
      if(arr[i] instanceof Array) {
        digMax = Math.max(this.calculateDepth(arr[i]), digMax); 
      }
    }
    depth +=digMax;

    return depth;*/
  }
}

module.exports = {
  DepthCalculator
};
