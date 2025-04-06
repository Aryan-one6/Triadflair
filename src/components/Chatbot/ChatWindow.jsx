import React, { useState } from 'react';
import MessageList from './MessageList';
import MessageInput from './MessageInput';
import { IoMdClose } from 'react-icons/io';

import { sendToGemini, sendToGroq, searchPinecone } from "./chatService";

const ChatWindow = ({ onClose }) => {
  const [messages, setMessages] = useState([
    { from: 'bot', text: 'Hi there! What’s your name?' },
  ]);
  const [user, setUser] = useState({ name: '', email: '' });

  // Basic email validation using a regex
  const isValidEmail = (email) => {
    // Just a simple pattern; you can improve it
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  };

  const handleSend = async (msg) => {
    // 1) If no name yet, treat the current message as the name
    if (!user.name) {
      const updatedUser = { ...user, name: msg };
      setUser(updatedUser);

      setMessages((prev) => [
        ...prev,
        { from: 'user', text: msg },
        { from: 'bot', text: 'Please enter your email:' },
      ]);
      return;
    }

    // 2) If we have a name but no email yet, treat the current message as the email
    if (!user.email) {
      if (!isValidEmail(msg)) {
        // Invalid email => prompt user again
        setMessages((prev) => [
          ...prev,
          { from: 'user', text: msg },
          { from: 'bot', text: 'That doesn’t look like a valid email. Please try again:' },
        ]);
      } else {
        // Valid email => greet them by name
        const updatedUser = { ...user, email: msg };
        setUser(updatedUser);

        setMessages((prev) => [
          ...prev,
          { from: 'user', text: msg },
          {
            from: 'bot',
            text: `Hey! ${updatedUser.name}, Hope you are doing great. Please tell me how I can help you.`,
          },
        ]);
      }
      return;
    }

    // 3) If name & email are both set, proceed with normal chat logic
    setMessages((prev) => [...prev, { from: 'user', text: msg }]);

    try {
      // Use Pinecone to get any relevant context
      const pineconeResults = await searchPinecone(msg);
      const context = pineconeResults.map((item) => item.metadata.text).join('\n');

      // Call either Gemini or Groq (here we're using Gemini as the example)
      const response = await sendToGemini(`User: ${msg}\n\nContext:\n${context}`);

      // If you prefer Gemini, you can do:
      // const response = await sendToGemini(`User: ${msg}\n\nContext:\n${context}`);

      setMessages((prev) => [...prev, { from: 'bot', text: response }]);
    } catch (error) {
      console.error('Error:', error);
      setMessages((prev) => [
        ...prev,
        { from: 'bot', text: 'Sorry, something went wrong.' },
      ]);
    }
  };

  return (
    <div className="fixed bottom-24 right-6 w-80 text-gray-500 border border-gray-300 rounded-lg shadow-lg flex flex-col">
      <div className="flex justify-between items-center bg-blue-600 text-white p-3 rounded-t-lg">
        <h4 className="text-lg font-semibold">Chat with Us</h4>
        <button onClick={onClose}>
          <IoMdClose size={20} />
        </button>
      </div>

      {/* Renders the chat messages */}
      <MessageList messages={messages} />
      {/* Input box with a "Send" button */}
      <MessageInput onSend={handleSend} />
    </div>
  );
};

export default ChatWindow;
