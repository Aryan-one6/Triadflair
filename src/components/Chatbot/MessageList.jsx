import React from 'react';

const MessageList = ({ messages }) => (
  <div className="flex-1 overflow-y-auto p-3 space-y-2 max-h-80">
    {messages.map((msg, index) => (
      <div
        key={index}
        className={`px-4 py-2 rounded-lg text-sm max-w-[75%] ${
          msg.from === 'user' ? 'bg-blue-100 self-end ml-auto' : 'bg-gray-100 self-start'
        }`}
      >
        {msg.text}
      </div>
    ))}
  </div>
);

export default MessageList;
