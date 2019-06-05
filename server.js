'use strict';

const net = require('net');

const port = process.env.PORT || 3001;
const server = net.createServer();

server.listen(port, () => console.log(`Server up on ${port}`) );

let socketPool = {};

const allowedCommands = [
  'READ',
  'UPPERCASE',
  'WRITE',
];

//defining what actions to take based on actions that are emitted
server.on('connection', (socket) => {

  const id = `Socket-${Math.random()}`;
  socketPool[id] = socket;
  console.log('socket pool keys: ', Object.keys(socketPool));
  //emitting data events
  socket.on('data', (buffer) => dispatchEvent(buffer));
  socket.on('close', () => {
    delete socketPool[id];
  });
});

//emitting events
let dispatchEvent = (buffer) => {
  console.log('I dispatched an event');
  let text = buffer.toString().trim();
  for (let socket in socketPool) {
    //still need to define event, currently 'data' string
    socketPool[socket].write(`${'data'} ${text}`);
  }
};


