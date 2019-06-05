'use strict';

const fs = require('fs');
const net = require('net');

// const testFile = require('./test.txt');

const alterFile = (file) => {
  fs.readFile( file, (err, data) => {
    if(err) { throw err; }
    let text = data.toString().toUpperCase();
    fs.writeFile( file, Buffer.from(text), (err, data) => {
      if(err) { throw err; }
      console.log(`${file} saved`);
    });
  });
};

console.log(process.argv);
let file = process.argv.slice(2).shift();
const client = net.createConnection({port:3001},() => {
  console.log('Connected');
  client.on('data', (data) => {
    console.log('I got data! ', data);
  });
  client.write('hello world');
  // alterFile(file);
}); 

// alterFile(file);
