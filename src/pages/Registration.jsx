import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Card, CardContent, CardHeader } from "../components/ui/card";
import { Input } from "../components/ui/input";
import { Button } from "../components/ui/button";
import PageTransition from "../components/PageTransition";
import { toast } from "react-toastify"; // Import toast from react-toastify
import "react-toastify/dist/ReactToastify.css"; // Import toastify CSS
import { motion, AnimatePresence } from "framer-motion"; // Import framer-motion and AnimatePresence
import { pageTransition, cardAnimation, fadeInUp } from "../utils/animations"; // Import animations
import { MovingBorder } from "../components/ui/moving-border"; // Import MovingBorder
import { SparklesCore } from "../components/ui/sparkles-core"; // Import SparklesCore

const Registration = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
  });

  const [verificationCode, setVerificationCode] = useState("");
  const [isVerified, setIsVerified] = useState(false);
  const navigate = useNavigate();

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (formData.email === "admin@gmail.com" && formData.password === "rohit123") {
      console.log("User Registered:", formData);
      toast.success("A verification code has been sent to your email."); // Toast notification
      setIsVerified(true); // Set isVerified to true after successful registration
    } else {
      toast.error("Invalid email or password."); // Toast notification
    }
  };

  const handleVerifyCode = () => {
    if (verificationCode === "123456") {
      toast.success("Email verified successfully!"); // Toast notification
      navigate("/setup-organisation");
    } else {
      toast.error("Invalid verification code."); // Toast notification
    }
  };

  return (
    <motion.div {...pageTransition}>
      <motion.div className="flex justify-center items-center min-h-screen px-4">
        <motion.div {...cardAnimation} className="w-[500px]">
          <MovingBorder>
            <Card className="w-full backdrop-blur-lg bg-slate-900/50 shadow-xl border-0 p-6">
              <CardHeader className="text-center">
                <motion.h2 {...fadeInUp} className="text-2xl font-bold text-white">
                  User Registration
                </motion.h2>
              </CardHeader>
              <CardContent>
                <AnimatePresence mode="wait">
                  {!isVerified ? (
                    <motion.form 
                      key="registration"
                      {...fadeInUp}
                      onSubmit={handleSubmit} 
                      className="space-y-6"
                    >
                      <div>
                        <label className="block text-sm font-medium mb-2 text-slate-200" htmlFor="name">
                          Name
                        </label>
                        <Input
                          type="text"
                          name="name"
                          id="name"
                          value={formData.name}
                          onChange={handleInputChange}
                          required
                          className="bg-slate-800/50 border-slate-700 text-white placeholder-slate-400 focus:border-blue-500 focus:ring-blue-500 transition duration-300 ease-in-out"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium mb-2 text-slate-200" htmlFor="email">
                          Email
                        </label>
                        <Input
                          type="email"
                          name="email"
                          id="email"
                          value={formData.email}
                          onChange={handleInputChange}
                          required
                          className="bg-slate-800/50 border-slate-700 text-white placeholder-slate-400 focus:border-blue-500 focus:ring-blue-500 transition duration-300 ease-in-out"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium mb-2 text-slate-200" htmlFor="password">
                          Password
                        </label>
                        <Input
                          type="password"
                          name="password"
                          id="password"
                          value={formData.password}
                          onChange={handleInputChange}
                          required
                          className="bg-slate-800/50 border-slate-700 text-white placeholder-slate-400 focus:border-blue-500 focus:ring-blue-500 transition duration-300 ease-in-out"
                        />
                      </div>
                      <motion.div
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                      >
                        <Button 
                          type="submit" 
                          className="w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white font-medium py-2.5"
                        >
                          Register
                        </Button>
                      </motion.div>
                    </motion.form>
                  ) : (
                    <motion.div 
                      key="verification"
                      {...fadeInUp}
                      className="space-y-6"
                    >
                      <label className="block text-sm font-medium mb-2 text-slate-200" htmlFor="verificationCode">
                        Verification Code
                      </label>
                      <Input
                        type="text"
                        id="verificationCode"
                        value={verificationCode}
                        onChange={(e) => setVerificationCode(e.target.value)}
                        required
                        className="bg-slate-800/50 border-slate-700 text-white placeholder-slate-400 focus:border-blue-500 focus:ring-blue-500 transition duration-300 ease-in-out"
                      />
                      <Button 
                        onClick={handleVerifyCode} 
                        className="w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white font-medium py-2.5"
                      >
                        Verify Email
                      </Button>
                    </motion.div>
                  )}
                </AnimatePresence>
              </CardContent>
            </Card>
          </MovingBorder>
          <SparklesCore particleColor="#ffffff" background="transparent" />
        </motion.div>
      </motion.div>
    </motion.div>
  );
};

export default Registration;
