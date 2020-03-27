import React, { useEffect } from 'react';
import socketIOClient from 'socket.io-client';

function App() {
  useEffect(() => {
    const socket = socketIOClient('http://localhost:5500');
    socket.emit('join', { msg: 'Cao Amore' });
    socket.emit('join 2', { msg: 'Cao amore 2' });
    socket.on('roomJoined', (data) => console.log(data));
  }, []);
  return <div className="App">App</div>;
}

export default App;
