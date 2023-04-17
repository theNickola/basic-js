const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement class VigenereCipheringMachine that allows us to create
 * direct and reverse ciphering machines according to task description
 * 
 * @example
 * 
 * const directMachine = new VigenereCipheringMachine();
 * 
 * const reverseMachine = new VigenereCipheringMachine(false);
 * 
 * directMachine.encrypt('attack at dawn!', 'alphonse') => 'AEIHQX SX DLLU!'
 * 
 * directMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => 'ATTACK AT DAWN!'
 * 
 * reverseMachine.encrypt('attack at dawn!', 'alphonse') => '!ULLD XS XQHIEA'
 * 
 * reverseMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => '!NWAD TA KCATTA'
 * 
 */
class VigenereCipheringMachine {

  
  constructor(type = true) {
      this.type = type;
  }


  encrypt(w,k) {
    let directCrypt = this.getCrypt(w,k,'encrypt');
    return this.type ? directCrypt : directCrypt.split('').reverse().join('');
  }


  decrypt(w,k) {
    let directCrypt = this.getCrypt(w,k,'decrypt');
    return this.type ? directCrypt : directCrypt.split('').reverse().join('');
  }


  getCrypt(w, k, typeCrypt) {
    if (w === undefined || k === undefined) throw new Error("Incorrect arguments!");
    function insertSym(str, sym, pos) {
      let array = str.split('');
      array.splice(pos, 0, sym);
      return array.join('');
    }
    function deleteSym(str, pos) {
      let array = str.split('');
      array.splice(pos, 1);
      return array.join('');
    }
    
    let abc = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    let countRepeat = Math.ceil(w.length / k.length);
    k= k.repeat(countRepeat).slice(0,w.length);
    w = w.toUpperCase();
    k = k.toUpperCase();
    let result = '';
    let wOrign = w;
  
    for(let i=0; i<w.length; i++) {
      if(!abc.includes(w[i])){
        w = deleteSym(w,i);
        i--;
      }
    }
  
    if(typeCrypt === 'encrypt') {
      for(let i=0; i<w.length; i++) {
        let indexEncrSym = abc.indexOf(k[i]) + abc.indexOf(w[i]);
        if (indexEncrSym > (abc.length - 1))
          indexEncrSym -= abc.length;
        result += abc[indexEncrSym];
      }
    }
    else if(typeCrypt === 'decrypt') {
      for(let i=0; i<w.length; i++) {
        let indexEncrSym = abc.indexOf(w[i]) - abc.indexOf(k[i]);
        if (indexEncrSym < 0)
          indexEncrSym += (abc.length);
        result += abc[indexEncrSym];
      }
    }
  
    for(let i=0; i<wOrign.length; i++) {
      if(!abc.includes(wOrign[i]))
        result = insertSym(result,wOrign[i],i);
    }
    return result;
  }
}

module.exports = {
  VigenereCipheringMachine
};
