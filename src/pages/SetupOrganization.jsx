import React, { useState } from "react";
import axios from 'axios';
import { useNavigate } from "react-router-dom";
import { Card, CardContent, CardHeader } from "../components/ui/card";
import { Input } from "../components/ui/input";
import { Button } from "../components/ui/button";
import PageTransition from "../components/PageTransition";
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

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
        <Card className="w-full max-w-lg">
          <CardHeader className="text-center">
            <h2 className="text-xl font-bold">Setup Organisation</h2>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="block text-sm font-medium mb-1" htmlFor="companyName">
                  Company Name
                </label>
                <Input
                  type="text"
                  name="companyName"
                  id="companyName"
                  value={orgData.companyName}
                  onChange={handleInputChange}
                  required
                />
              </div>

              <div>
                <label className="block text-sm font-medium mb-1" htmlFor="websiteURL">
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
                  />
                  <Button type="button" onClick={fetchMetaDescription} disabled={isLoading}>
                    {isLoading ? "Fetching..." : "Auto-Fetch"}
                  </Button>
                </div>
                {metaDescription && (
                  <p className="mt-2 text-sm text-gray-600">
                    <strong>Meta Description:</strong> {metaDescription}
                  </p>
                )}
              </div>

              <div>
                <label className="block text-sm font-medium mb-1" htmlFor="description">
                  Company Description
                </label>
                <Input
                  type="text"
                  name="description"
                  id="description"
                  value={orgData.description || metaDescription}
                  onChange={handleInputChange}
                  required
                />
              </div>

              <Button type="submit" className="w-full">
                Save Organisation
              </Button>
            </form>
          </CardContent>
        </Card>
      </div>
    </PageTransition>
  );
};

export default SetupOrganisation;
