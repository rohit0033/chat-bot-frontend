import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { AnimatePresence } from "framer-motion";
import Registration from "./pages/Registration";
import SetupOrganisation from "./pages/SetupOrganization";
import ScrapedData from "./pages/ScrapedData";
import ChatbotIntegration from "./pages/ChatbotIntegration";
import SuccessScreen from "./pages/SuccessScreen";
import HomePage from "./pages/HomePage";
import TestBotpage from "./pages/TestChatbot";
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer } from 'react-toastify';

function App() {
  return (
    <>
      <ToastContainer />
      <div className="min-h-screen bg-gradient-to-br from-blue-500 to-purple-600 text-white">
        <Router> 
          <AnimatePresence mode="wait">
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/registration" element={<Registration />} />
              <Route path="/setup-organisation" element={<SetupOrganisation />} />
              <Route path="/scraped-data" element={<ScrapedData />} />
              <Route path="/chatbot-integration" element={<ChatbotIntegration />} />
              <Route path="/success" element={<SuccessScreen />} />
              <Route path="/test-chatbot" element={<TestBotpage />} />
            </Routes>
          </AnimatePresence>
        </Router>
      </div>
    </>
  );
}

export default App;
