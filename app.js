const {accessSync:aS,constants:cs,appendFileSync:afs}= require('fs')

try {
    aS('package.json', cs.R_OK | cs.W_OK);
    afs('message.txt',`hi ${__filename}`);
    console.log('can read/write');
  } catch (err) {
    console.log(err);
    console.error('no access!');
  }