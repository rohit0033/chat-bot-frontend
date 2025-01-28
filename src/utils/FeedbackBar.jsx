import React from 'react';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const FeedbackBar = () => {
  const handleFeedbackClick = () => {
    const subject = encodeURIComponent('Chatbot Feedback');
    const body = encodeURIComponent('Please describe the issue you are experiencing:');
    window.location.href = `mailto:support@beyondchats.com?subject=${subject}&body=${body}`;
    toast.info('Opening email client for feedback...');
  };

  return (
    <div 
      onClick={handleFeedbackClick}
      className="fixed top-0 left-0 right-0 bg-blue-600 text-white py-2 px-4 text-center cursor-pointer 
                hover:bg-blue-700 transition-colors duration-200 z-50 text-sm md:text-base"
    >
      Chatbot not working as intended? Share feedback
    </div>
  );
};

export default FeedbackBar;
