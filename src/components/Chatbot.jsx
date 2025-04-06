import React, { useState, useEffect } from 'react';
import io from 'socket.io-client';

const socket = io('http://localhost:5030'); // Adjust the URL if needed

const Chatbot = () => {
  const [user, setUser] = useState({ name: '', email: '' });
  const [isRegistered, setIsRegistered] = useState(false);
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState('');

  useEffect(() => {
    // Listen for messages from the server
    socket.on('bot reply', (reply) => {
      setMessages(prev => [...prev, { text: reply, sender: 'bot' }]);
    });

    return () => socket.off('bot reply');
  }, []);

  const handleRegistration = (e) => {
    e.preventDefault();
    if (user.name && user.email) {
      setIsRegistered(true);
      setMessages(prev => [
        ...prev,
        { text: `Hey ${user.name}! Hope you are doing great, please let me know how may I help you.`, sender: 'bot' }
      ]);
    }
  };

  const sendMessage = () => {
    if (input.trim() === '') return;
    setMessages(prev => [...prev, { text: input, sender: 'user' }]);
    socket.emit('chat message', input);
    setInput('');
  };

  return (
    <div className="chat-container max-w-md mx-auto p-4 bg-white shadow rounded">
      {!isRegistered ? (
        <form onSubmit={handleRegistration} className="registration-form flex flex-col gap-4">
          <input 
            type="text" 
            placeholder="Name" 
            value={user.name} 
            onChange={(e) => setUser({ ...user, name: e.target.value })} 
            className="border p-2 rounded"
          />
          <input 
            type="email" 
            placeholder="Email" 
            value={user.email} 
            onChange={(e) => setUser({ ...user, email: e.target.value })} 
            className="border p-2 rounded"
          />
          <button type="submit" className="bg-blue-500 text-white p-2 rounded">
            Start Chat
          </button>
        </form>
      ) : (
        <div className="chat-interface flex flex-col">
          <div className="messages flex flex-col gap-2 mb-4 max-h-80 overflow-y-auto">
            {messages.map((msg, index) => (
              <div
                key={index}
                className={`message p-2 rounded ${msg.sender === 'bot' ? 'bg-blue-100 text-blue-800' : 'bg-gray-100 text-gray-800'}`}
              >
                {msg.text}
              </div>
            ))}
          </div>
          <div className="input-area flex gap-2">
            <input 
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder="Type your message..."
              className="flex-grow border p-2 rounded"
            />
            <button onClick={sendMessage} className="bg-green-500 text-white p-2 rounded">
              Send
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Chatbot;
