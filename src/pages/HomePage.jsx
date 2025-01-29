import React from "react";
import { Button } from "../components/ui/button";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";

const HomePage = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:14px_24px]"></div>
      </div>
      
      {/* Main Content */}
      <div className="relative z-10 flex flex-col justify-center items-center text-white min-h-screen px-4 py-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center max-w-3xl"
        >
          <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-white to-blue-100">
            Welcome to BeyondChats
          </h1>
          <p className="text-xl md:text-2xl mb-10 text-blue-100 leading-relaxed">
            Empower your business with intelligent chatbots. Streamline customer 
            interactions and elevate your online presence.
          </p>
          <motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <Button
              onClick={() => navigate("/registration")}
              className="bg-white text-blue-600 hover:bg-blue-50 px-8 py-4 rounded-full shadow-lg text-lg font-semibold transition-all duration-300 hover:shadow-xl"
            >
              Get Started Now →
            </Button>
          </motion.div>
        </motion.div>

        {/* Features Grid */}
        <div className="mt-20 grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto px-4">
          {[
            {
              title: "Simple Setup",
              description: "Follow our guided steps to set up your chatbot quickly and easily.",
              icon: "🚀"
            },
            {
              title: "Smart Integration",
              description: "Seamlessly integrate the chatbot into your website in minutes.",
              icon: "⚡"
            },
            {
              title: "Powerful Features",
              description: "Unlock advanced capabilities to enhance your business communication.",
              icon: "💪"
            }
          ].map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              whileHover={{ y: -5 }}
              className="backdrop-blur-lg bg-gradient-to-br from-white/10 to-white/5 rounded-2xl p-8 shadow-2xl border border-white/10"
            >
              <div className="text-4xl mb-4">{feature.icon}</div>
              <h3 className="text-2xl font-bold mb-3 bg-gradient-to-r from-white to-blue-200 bg-clip-text text-transparent">
                {feature.title}
              </h3>
              <p className="text-blue-100 text-lg">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </div>

       
      </div>
    </div>
  );
};

export default HomePage;
