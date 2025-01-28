import React from 'react';
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "../components/ui/dialog";
import { Button } from "../components/ui/button";
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const IntegrationModal = ({ isOpen, onClose }) => {
  const integrationCode = `<!-- BeyondChats Widget Integration -->
<script>
  (function(w,d,s,l,i) {
    w[l]=w[l]||[];
    w[l].push({'widgetId': 'YOUR_WIDGET_ID'});
    var f=d.getElementsByTagName(s)[0],
    j=d.createElement(s);
    j.async=true;
    j.src='https://cdn.beyondchats.com/widget.js';
    f.parentNode.insertBefore(j,f);
  })(window,document,'script','bc','beyondchats');
</script>`;

  const handleCopyCode = async () => {
    try {
      await navigator.clipboard.writeText(integrationCode);
      toast.success('Integration code copied to clipboard!');
    } catch (err) {
      toast.error('Failed to copy code. Please try again.');
    }
  };

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-2xl">
        <DialogHeader>
          <DialogTitle>Integration Instructions</DialogTitle>
        </DialogHeader>
        <div className="space-y-4">
          <div className="text-sm text-gray-600">
            <p className="mb-2">Follow these steps to integrate the chatbot:</p>
            <ol className="list-decimal list-inside space-y-1">
              <li>Copy the code below</li>
              <li>Paste it just before the closing &lt;/head&gt; tag of your website</li>
              <li>Replace YOUR_WIDGET_ID with the ID provided in your dashboard</li>
            </ol>
          </div>
          
          <div className="relative">
            <pre className="bg-gray-100 p-4 rounded-lg overflow-x-auto text-sm">
              <code>{integrationCode}</code>
            </pre>
            <Button 
              onClick={handleCopyCode}
              className="absolute top-2 right-2"
              size="sm"
            >
              Copy Code
            </Button>
          </div>

          <div className="text-sm text-gray-600 mt-4">
            <p>Need help? Contact our support team at support@beyondchats.com</p>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default IntegrationModal;
