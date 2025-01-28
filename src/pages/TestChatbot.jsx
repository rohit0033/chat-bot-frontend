import React from 'react';
import FeedbackBar from '../utils/FeedbackBar';
import ChatWidget from '../utils/ChatWidget';

const TestChatbot = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <FeedbackBar />
      
      {/* Sample Website Header */}
      <header className="mt-10">
        <div className="max-w-7xl mx-auto px-4 py-4 sm:px-6 lg:px-8">
          <h1 className="text-2xl font-bold text-gray-900">Demo Website</h1>
        </div>
      </header>

      {/* Sample Content */}
      <main className="max-w-7xl mx-auto px-4 py-8 sm:px-6 lg:px-8">
        <div className="bg-white rounded-lg shadow p-6">
          <h2 className="text-xl font-semibold mb-4">Welcome to the Test Page</h2>
          <p className="text-gray-600 mb-4">
            This is a demo environment to test the BeyondChats widget integration.
            You should see a chat button in the bottom right corner.
          </p>
          
          <div className="bg-blue-50 border border-blue-200 rounded-md p-4">
            <h3 className="text-sm font-medium text-blue-800 mb-2">
              Testing Instructions
            </h3>
            <ul className="list-disc list-inside text-sm text-blue-700 space-y-1">
              <li>Click the chat button in the bottom right</li>
              <li>Try sending a test message</li>
              <li>Check the chatbot's responses</li>
              <li>Test the widget's responsive design</li>
            </ul>
          </div>
        </div>
      </main>

      {/* Chat Widget */}
      <ChatWidget />
    </div>
  );
};

export default TestChatbot;
