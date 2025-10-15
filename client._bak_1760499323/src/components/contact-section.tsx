import { useState } from "react";
import { useMutation } from "@tanstack/react-query";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { useToast } from "@/hooks/use-toast";
import { apiRequest } from "@/lib/queryClient";
import { Phone, Mail, MapPin, Loader2 } from "lucide-react";
import type { InsertInquiry } from "@shared/schema";

export default function ContactSection() {
  const { toast } = useToast();
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    interest: "",
    message: ""
  });

  const inquiryMutation = useMutation({
    mutationFn: async (data: InsertInquiry) => {
      const response = await apiRequest("POST", "/api/inquiries", data);
      return response.json();
    },
    onSuccess: () => {
      setIsSubmitted(true);
      setFormData({
        firstName: "",
        lastName: "",
        email: "",
        phone: "",
        interest: "",
        message: ""
      });
      // Hide success message after 5 seconds
      setTimeout(() => {
        setIsSubmitted(false);
      }, 5000);
    },
    onError: (error) => {
      toast({
        title: "Error",
        description: "Failed to send inquiry. Please try again or contact us directly.",
        variant: "destructive",
      });
    },
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.firstName || !formData.lastName || !formData.email || !formData.phone || !formData.interest) {
      toast({
        title: "Please fill in all required fields",
        variant: "destructive",
      });
      return;
    }
    inquiryMutation.mutate(formData);
  };

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  return (
    <section id="contact" className="py-24 md:py-32 bg-smoke-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div>
            <h2 className="text-4xl font-bold text-forest-green mb-6">Ready to Secure Your Coastal Dream?</h2>
            <p className="text-lg text-gray-700 mb-8">
              This is a once-in-a-lifetime opportunity to secure premium residential land in Stanley. 
              With blocks becoming increasingly rare, don't miss your chance to invest in this award-winning coastal paradise.
            </p>
            
            <div className="space-y-6">
              <div className="flex items-center">
                <div className="bg-forest-green rounded-full p-3 mr-4">
                  <Phone size={20} color="#8B7040" />
                </div>
                <div>
                  <h3 className="font-semibold text-forest-green">Call Us</h3>
                  <p className="text-gray-600">0455 569 646</p>
                </div>
              </div>
              
              <div className="flex items-center">
                <div className="bg-forest-green rounded-full p-3 mr-4">
                  <Mail size={20} color="#8B7040" />
                </div>
                <div>
                  <h3 className="font-semibold text-forest-green">Email Enquiries</h3>
                  <p className="text-gray-600">info@dovecoteestate.com.au</p>
                </div>
              </div>
              
              <div className="flex items-center">
                <div className="bg-forest-green rounded-full p-3 mr-4">
                  <MapPin size={20} color="#8B7040" />
                </div>
                <div>
                  <h3 className="font-semibold text-forest-green">Visit Stanley</h3>
                  <p className="text-gray-600">40 Dovecote Rd, Stanley</p>
                </div>
              </div>
            </div>
          </div>
          
          <Card className="bg-mist-white">
            <CardHeader>
              <CardTitle className="text-2xl text-forest-green">Request Information</CardTitle>
            </CardHeader>
            <CardContent>
              {isSubmitted ? (
                <div className="text-center py-12" role="alert" aria-live="polite" data-testid="contact-success-message">
                  <div className="bg-forest-green/10 rounded-2xl p-8 mb-4">
                    <h3 className="text-2xl font-semibold text-forest-green mb-4" style={{ fontFamily: 'Prata, serif' }}>
                      Thank you for your enquiry. Our team will be in touch shortly.
                    </h3>
                    <p className="text-gray-700" style={{ fontFamily: 'Inter, sans-serif' }}>
                      We appreciate your interest in Dovecote Estate Stanley.
                    </p>
                  </div>
                </div>
              ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="firstName" className="text-sm font-medium text-gray-700">
                      First Name *
                    </Label>
                    <Input
                      id="firstName"
                      type="text"
                      placeholder="Enter your first name"
                      value={formData.firstName}
                      onChange={(e) => handleInputChange("firstName", e.target.value)}
                      className="mt-1"
                      required
                      data-testid="input-firstName"
                    />
                  </div>
                  <div>
                    <Label htmlFor="lastName" className="text-sm font-medium text-gray-700">
                      Last Name *
                    </Label>
                    <Input
                      id="lastName"
                      type="text"
                      placeholder="Enter your last name"
                      value={formData.lastName}
                      onChange={(e) => handleInputChange("lastName", e.target.value)}
                      className="mt-1"
                      required
                      data-testid="input-lastName"
                    />
                  </div>
                </div>
                
                <div>
                  <Label htmlFor="email" className="text-sm font-medium text-gray-700">
                    Email *
                  </Label>
                  <Input
                    id="email"
                    type="email"
                    placeholder="Enter your email"
                    value={formData.email}
                    onChange={(e) => handleInputChange("email", e.target.value)}
                    className="mt-1"
                    required
                    data-testid="input-email"
                  />
                </div>
                
                <div>
                  <Label htmlFor="phone" className="text-sm font-medium text-gray-700">
                    Phone *
                  </Label>
                  <Input
                    id="phone"
                    type="tel"
                    placeholder="Enter your phone number"
                    value={formData.phone}
                    onChange={(e) => handleInputChange("phone", e.target.value)}
                    className="mt-1"
                    required
                    data-testid="input-phone"
                  />
                </div>
                
                <div>
                  <Label htmlFor="interest" className="text-sm font-medium text-gray-700">
                    Interest *
                  </Label>
                  <Select value={formData.interest} onValueChange={(value) => handleInputChange("interest", value)}>
                    <SelectTrigger className="mt-1" data-testid="select-interest">
                      <SelectValue placeholder="Select your interest" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="Land Only">Land Only</SelectItem>
                      <SelectItem value="Home & Land Package">Home & Land Package</SelectItem>
                      <SelectItem value="Investment Information">Investment Information</SelectItem>
                      <SelectItem value="General Enquiry">General Enquiry</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                
                <div>
                  <Label htmlFor="message" className="text-sm font-medium text-gray-700">
                    Message
                  </Label>
                  <Textarea
                    id="message"
                    placeholder="Enter your message"
                    value={formData.message}
                    onChange={(e) => handleInputChange("message", e.target.value)}
                    className="mt-1"
                    rows={4}
                    data-testid="textarea-message"
                  />
                </div>
                
                <Button
                  type="submit"
                  className="w-full rounded-2xl px-5 py-3 text-base font-medium bg-forest-green text-white shadow hover:opacity-95 transition"
                  disabled={inquiryMutation.isPending}
                  data-testid="button-submit-inquiry"
                >
                  {inquiryMutation.isPending ? (
                    <>
                      <Loader2 className="mr-2 h-4 w-4 animate-spin" color="#8B7040" />
                      Sending...
                    </>
                  ) : (
                    "Send Enquiry"
                  )}
                </Button>
              </form>
              )}
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}
