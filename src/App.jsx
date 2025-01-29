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
import { LampContainer } from "./components/ui/lamp-container";

function App() {
  return (
    <div className="min-h-screen bg-slate-950">
      <ToastContainer />
      <LampContainer>
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
      </LampContainer>
    </div>
  );
}

export default App;
