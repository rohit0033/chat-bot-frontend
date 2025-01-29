import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { Card, CardContent, CardHeader, CardFooter } from "../components/ui/card";
import { Input } from "../components/ui/input";
import { Button } from "../components/ui/button";
import { pageTransition, cardAnimation, staggerChildren, fadeInUp } from "../utils/animations";
import { MovingBorder } from "../components/ui/moving-border";
import { SparklesCore } from "../components/ui/sparkles-core";

const dummyScrapedData = [
  {
    url: "https://example.com/about",
    status: "Scraped",
    chunks: [
      "About Us: We are an innovative company.",
      "Mission: To revolutionize technology.",
    ],
  },
  {
    url: "https://example.com/contact",
    status: "Pending",
    chunks: [],
  },
  {
    url: "https://example.com/services",
    status: "Scraped",
    chunks: [
      "Services: Web Development, Mobile Apps.",
      "Expertise: Cutting-edge solutions for businesses.",
    ],
  },
];

const ScrapedData = () => {
  const navigate = useNavigate();
  const [selectedPage, setSelectedPage] = useState(null);

  const handlePageClick = (page) => {
    setSelectedPage(page);
  };

  return (
    <motion.div {...pageTransition}>
      <motion.div {...cardAnimation} className="flex justify-center items-center min-h-screen p-4">
        <MovingBorder>
          <Card className="w-full max-w-3xl backdrop-blur-lg bg-slate-900/50 shadow-xl border-0">
            <CardHeader className="text-center p-4">
              <motion.h2 {...fadeInUp} className="text-xl md:text-2xl font-bold text-white">
                Scraped Data Overview
              </motion.h2>
            </CardHeader>
            <CardContent className="p-4">
              <motion.div 
                variants={staggerChildren}
                initial="initial"
                animate="animate"
                className="space-y-4"
              >
                {dummyScrapedData.map((page, index) => (
                  <motion.div
                    key={index}
                    variants={fadeInUp}
                    whileHover={{ scale: 1.02 }}
                    className="border-b pb-4 rounded-lg hover:bg-gray-700 transition-colors duration-200"
                  >
                    <div className="flex flex-col md:flex-row justify-between items-start md:items-center space-y-2 md:space-y-0">
                      <div className="w-full md:w-auto">
                        <p className="font-medium text-sm md:text-base text-white break-all">{page.url}</p>
                        <p className={`text-xs md:text-sm ${
                          page.status === "Scraped" ? "text-green-400" : "text-yellow-400"
                        }`}>
                          Status: {page.status}
                        </p>
                      </div>
                      <Button
                        onClick={() => handlePageClick(page)}
                        disabled={page.status !== "Scraped"}
                        className="w-full md:w-auto text-sm whitespace-nowrap bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white"
                      >
                        {page.status === "Scraped" ? "View Chunks" : "Scraping..."}
                      </Button>
                    </div>
                  </motion.div>
                ))}

                <AnimatePresence>
                  {selectedPage && (
                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -20 }}
                      className="mt-6 p-4 bg-gray-700 rounded-lg border"
                    >
                      <h3 className="text-base md:text-lg font-bold mb-2 text-white break-all">
                        Chunks from {selectedPage.url}
                      </h3>
                      <ul className="list-disc pl-4 md:pl-5 space-y-2">
                        {selectedPage.chunks.length > 0 ? (
                          selectedPage.chunks.map((chunk, idx) => (
                            <li key={idx} className="text-xs md:text-sm text-gray-300">
                              {chunk}
                            </li>
                          ))
                        ) : (
                          <p className="text-xs md:text-sm text-gray-400">
                            No chunks available.
                          </p>
                        )}
                      </ul>
                      <Button 
                        className="mt-4 w-full md:w-auto bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white" 
                        onClick={() => setSelectedPage(null)}
                      >
                        Close
                      </Button>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            </CardContent>
            <CardFooter className="flex justify-center p-4 border-t">
              <motion.div
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="w-full"
              >
                <Button 
                  onClick={() => navigate("/chatbot-integration")}
                  className="w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white text-sm md:text-base"
                >
                  Continue to Chatbot Integration
                </Button>
              </motion.div>
            </CardFooter>
          </Card>
        </MovingBorder>
        <SparklesCore particleColor="#ffffff" background="transparent" />
      </motion.div>
    </motion.div>
  );
};

export default ScrapedData;
