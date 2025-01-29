import React from "react";
import { Card, CardContent, CardHeader } from "../components/ui/card";
import { Button } from "../components/ui/button";
import Confetti from "react-confetti";
import { Twitter, Linkedin, Facebook } from 'lucide-react';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { MovingBorder } from "../components/ui/moving-border";
import { SparklesCore } from "../components/ui/sparkles-core";

const SuccessScreen = () => {
  const handleExploreAdminPanel = () => {
    toast.info("Navigating to Admin Panel...");
    // Simulate navigation to admin panel
  };

  const handleStartChatting = () => {
    toast.info("Launching chatbot interface...");
    // Simulate starting chatbot interaction
  };

  const handleShareOnSocialMedia = (platform) => {
    toast.info(`Sharing success on ${platform}!`);
    // Simulate social media sharing
  };

  return (
    <div className="flex justify-center items-center min-h-screen ">
      <Confetti />
      <MovingBorder>
        <Card className="w-full max-w-lg backdrop-blur-lg bg-slate-900/50 shadow-xl border-0">
          <CardHeader className="text-center">
            <h2 className="text-xl font-bold text-green-600">Setup Successful! 🎉</h2>
          </CardHeader>
          <CardContent>
            <div className="space-y-6 text-center">
              <p className="text-white">
                Congratulations! Your chatbot has been successfully integrated and is ready to use.
              </p>
              <Button className="w-full" onClick={handleExploreAdminPanel}>
                Explore Admin Panel
              </Button>
              <Button
                className="w-full"
                variant="secondary"
                onClick={handleStartChatting}
              >
                Start Talking to Your Chatbot
              </Button>
              <div className="mt-4">
                <h3 className="text-lg font-bold mb-2">Share Your Success</h3>
                <div className="flex justify-center gap-4">
                  <Button
                    onClick={() => handleShareOnSocialMedia("Twitter")}
                    variant="outline"
                    className="flex items-center gap-2"
                  >
                    <Twitter size={18} />
                    Twitter
                  </Button>
                  <Button
                    onClick={() => handleShareOnSocialMedia("LinkedIn")}
                    variant="outline"
                    className="flex items-center gap-2"
                  >
                    <Linkedin size={18} />
                    LinkedIn
                  </Button>
                  <Button
                    onClick={() => handleShareOnSocialMedia("Facebook")}
                    variant="outline"
                    className="flex items-center gap-2"
                  >
                    <Facebook size={18} />
                    Facebook
                  </Button>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </MovingBorder>
      <SparklesCore particleColor="#ffffff" background="transparent" />
    </div>
  );
};

export default SuccessScreen;
