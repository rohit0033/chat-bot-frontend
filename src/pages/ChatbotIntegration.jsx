import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Card, CardContent, CardHeader } from "../components/ui/card";
import { Button } from "../components/ui/button";
import FeedbackBar from '../utils/FeedbackBar';
import IntegrationModal from '../utils/IntegrationModal';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const ChatbotIntegration = () => {
  const navigate = useNavigate();
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleTestChatbot = () => {
    navigate('/test-chatbot');
  };

  const handleIntegrateCode = () => {
    setIsModalOpen(true);
  };

  const handleSendInstructions = () => {
    const subject = encodeURIComponent('BeyondChats Integration Instructions');
    const body = encodeURIComponent(`
Hello,

To integrate BeyondChats on your website, please follow these steps:
1. Access your website's HTML
2. Locate the <head> section
3. Add the integration code provided in your dashboard
4. Save and deploy your changes

For detailed instructions, visit: https://docs.beyondchats.com/integration

Best regards,
BeyondChats Team
    `);
    window.location.href = `mailto:?subject=${subject}&body=${body}`;
    toast.success("Integration instructions sent to developer's email.");
  };

  const handleTestIntegration = () => {
    // Simulate integration test
    setTimeout(() => {
      toast.success("Integration test successful!");
      navigate('/success');
    }, 1500);
  };

  return (
    <>
      <FeedbackBar />
      <div className="flex justify-center items-center min-h-screen ">
        <Card className="w-full max-w-xl m-4">
          <CardHeader className="text-center">
            <h2 className="text-2xl font-bold text-gray-900">Chatbot Integration & Testing</h2>
            <p className="text-gray-500 mt-2">Follow these steps to add the chatbot to your website</p>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="space-y-4">
              <Button 
                className="w-full py-6 text-lg"
                onClick={handleTestChatbot}
              >
                Test Chatbot Demo
              </Button>
              
              <div className="bg-gray-50 p-4 rounded-lg space-y-3">
                <h3 className="text-lg font-semibold">Integration Options</h3>
                <div className="flex flex-col gap-2">
                  <Button 
                    onClick={handleIntegrateCode}
                    variant="default"
                  >
                    View Integration Instructions
                  </Button>
                  <Button 
                    onClick={handleSendInstructions}
                    variant="outline"
                  >
                    Email Instructions to Developer
                  </Button>
                  <Button 
                    onClick={handleTestIntegration}
                    variant="secondary"
                    className="bg-green-100 hover:bg-green-200 text-green-700"
                  >
                    Test Integration Status
                  </Button>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      <IntegrationModal 
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
      />
    </>
  );
};

export default ChatbotIntegration;
