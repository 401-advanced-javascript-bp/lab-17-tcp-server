'use strict';

// const eventEmitter = require('./event-emitter.js');
// const eventNames = require('./event-names.js');
// const upperCase = require('./uppercase.js');
// const consoleThis = require('./console-log.js');
// const util = require('util');
// const fs = require('fs');

// const handleRead = (fileName) => {
//     console.log('handleRead');
//     const read = util.promisify(fs.readFile);

//     read(fileName).then((fileContents) => {
//         eventEmitter.emit(eventNames.UPPERCASE, fileContents);
//     }).catch((error) => {
//         console.log(error);
//     });
 
// };
// //keep
// eventEmitter.on(eventNames.READ, handleRead);

// const handleUpperCase = (fileContents) => {
//     const upperCaseString = fileContents.toString().toUpperCase();
//     // build new payload
//     eventEmitter.emit(eventNames.WRITE, upperCaseString);
// }

// eventEmitter.on(eventNames.UPPERCASE, handleUpperCase);


// const handleWrite = (upperCaseString) => {
//     //validate inpute (please validate if you can)
//     const write = util.promisify(fs.writeFile);
//     //hardcode
//     write('./readthis.txt', Buffer.from(upperCaseString)).then((write) => { //need to verify
//     eventEmitter.emit(eventNames.LOG, consoleThis);
//     }).catch((error) => {
//         console.log(error);
//     });
// };

// //in process
// eventEmitter.on(eventNames.WRITE, handleWrite);