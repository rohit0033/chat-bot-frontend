import React, { useState } from "react";
import axios from 'axios';
import { useNavigate } from "react-router-dom";
import { Card, CardContent, CardHeader } from "../components/ui/card";
import { Input } from "../components/ui/input";
import { Button } from "../components/ui/button";
import PageTransition from "../components/PageTransition";
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { MovingBorder } from "../components/ui/moving-border";

const SetupOrganisation = () => {
  const [orgData, setOrgData] = useState({
    companyName: "",
    websiteURL: "",
    description: "",
  });
  const [isLoading, setIsLoading] = useState(false);
  const [metaDescription, setMetaDescription] = useState("");
  const navigate = useNavigate();

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setOrgData({ ...orgData, [name]: value });
  };

  const fetchMetaDescription = async () => {
    if (!orgData.websiteURL) {
      toast.error("Please enter a website URL.");
      return;
    }

    setIsLoading(true);
    try {
      const response = await axios.get(`https://api.microlink.io?url=${encodeURIComponent(orgData.websiteURL)}`);
      
      const description = response.data.data.description || 'No description found';
      setMetaDescription(description);
      
      setOrgData(prev => ({
        ...prev,
        description: description
      }));
      toast.success("Meta description fetched successfully!");
    } catch (error) {
      console.error("Error fetching meta-description:", error);
      toast.error("Failed to fetch website description. Please try again or enter manually.");
    } finally {
      setIsLoading(false);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Organisation Data:", orgData);
    toast.success("Organisation setup successfully!");
    navigate("/scraped-data");
  };

  return (
    <PageTransition>
      <div className="flex justify-center items-center min-h-screen">
        <MovingBorder>
          <Card className="w-full max-w-lg backdrop-blur-lg bg-slate-900/50 shadow-xl border-0">
            <CardHeader className="text-center">
              <h2 className="text-xl font-bold text-white">Setup Organisation</h2>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label className="block text-sm font-medium mb-1 text-slate-200" htmlFor="companyName">
                    Company Name
                  </label>
                  <Input
                    type="text"
                    name="companyName"
                    id="companyName"
                    value={orgData.companyName}
                    onChange={handleInputChange}
                    required
                    className="bg-slate-800/50 border-slate-700 text-white placeholder-slate-400 focus:border-blue-500 focus:ring-blue-500 transition duration-300 ease-in-out"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium mb-1 text-slate-200" htmlFor="websiteURL">
                    Company Website URL
                  </label>
                  <div className="flex gap-2">
                    <Input
                      type="url"
                      name="websiteURL"
                      id="websiteURL"
                      value={orgData.websiteURL}
                      onChange={handleInputChange}
                      required
                      className="bg-slate-800/50 border-slate-700 text-white placeholder-slate-400 focus:border-blue-500 focus:ring-blue-500 transition duration-300 ease-in-out"
                    />
                    <Button type="button" onClick={fetchMetaDescription} disabled={isLoading} className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white">
                      {isLoading ? "Fetching..." : "Auto-Fetch"}
                    </Button>
                  </div>
                  {metaDescription && (
                    <p className="mt-2 text-sm text-slate-200">
                      <strong>Meta Description:</strong> {metaDescription}
                    </p>
                  )}
                </div>

                <div>
                  <label className="block text-sm font-medium mb-1 text-slate-200" htmlFor="description">
                    Company Description
                  </label>
                  <Input
                    type="text"
                    name="description"
                    id="description"
                    value={orgData.description || metaDescription}
                    onChange={handleInputChange}
                    required
                    className="bg-slate-800/50 border-slate-700 text-white placeholder-slate-400 focus:border-blue-500 focus:ring-blue-500 transition duration-300 ease-in-out"
                  />
                </div>

                <Button type="submit" className="w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white">
                  Save Organisation
                </Button>
              </form>
            </CardContent>
          </Card>
        </MovingBorder>
      </div>
    </PageTransition>
  );
};

export default SetupOrganisation;
