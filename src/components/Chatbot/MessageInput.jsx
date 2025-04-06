import React, { useState } from 'react';
import { FiSend } from 'react-icons/fi';

const MessageInput = ({ onSend }) => {
  const [input, setInput] = useState('');

  const sendMessage = () => {
    if (input.trim()) {
      onSend(input.trim());
      setInput('');
    }
  };

  return (
    <div className="flex items-center border-t border-gray-300 p-2">
      <input
        type="text"
        className="flex-grow px-3 py-2 border bg-white text-gray-900 rounded-full focus:outline-none text-sm"
        placeholder="Type a message..."
        value={input}
        onChange={(e) => setInput(e.target.value)}
        onKeyDown={(e) => e.key === 'Enter' && sendMessage()}
      />
      <button
        className="ml-2 bg-blue-600 text-white p-2 rounded-full hover:bg-blue-700 transition"
        onClick={sendMessage}
      >
        <FiSend size={18} />
      </button>
    </div>
  );
};

export default MessageInput;
