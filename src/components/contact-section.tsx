import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { useToast } from "@/hooks/use-toast";
import { Phone, Mail, MapPin, Loader2 } from "lucide-react";

export default function ContactSection() {
  const { toast } = useToast();
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    interest: "",
    message: ""
  });

  // Listen for lot-specific enquiry pre-fill from the lots table
  useEffect(() => {
    const handler = (e: Event) => {
      const { lot } = (e as CustomEvent).detail;
      setFormData(prev => ({ ...prev, message: `I'd like to enquire about Lot ${lot}.` }));
    };
    window.addEventListener('enquireLot', handler);
    return () => window.removeEventListener('enquireLot', handler);
  }, []);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.firstName || !formData.lastName || !formData.email || !formData.phone || !formData.interest) {
      toast({
        title: "Please fill in all required fields",
        variant: "destructive",
      });
      return;
    }

    setIsSubmitting(true);

    const formBody = new URLSearchParams({
      "form-name": "inquiries",
      firstName: formData.firstName,
      lastName: formData.lastName,
      email: formData.email,
      phone: formData.phone,
      interest: formData.interest,
      message: formData.message,
    });

    try {
      const response = await fetch("/", {
        method: "POST",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body: formBody.toString(),
      });

      if (response.ok) {
        setIsSubmitted(true);
        setFormData({
          firstName: "",
          lastName: "",
          email: "",
          phone: "",
          interest: "",
          message: ""
        });
        setTimeout(() => {
          setIsSubmitted(false);
        }, 5000);
      } else {
        throw new Error("Form submission failed");
      }
    } catch (error) {
      toast({
        title: "Error",
        description: "Failed to send inquiry. Please try again or contact us directly.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
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
              <form 
                name="inquiries"
                method="POST"
                data-netlify="true"
                data-netlify-honeypot="bot-field"
                onSubmit={handleSubmit} 
                className="space-y-6"
              >
                <input type="hidden" name="form-name" value="inquiries" />
                <p className="hidden">
                  <label>
                    Don't fill this out if you're human: <input name="bot-field" />
                  </label>
                </p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="firstName" className="text-sm font-medium text-gray-700">
                      First Name *
                    </Label>
                    <Input
                      id="firstName"
                      name="firstName"
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
                      name="lastName"
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
                    name="email"
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
                    name="phone"
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
                  <input type="hidden" name="interest" value={formData.interest} />
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
                    name="message"
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
                  disabled={isSubmitting}
                  data-testid="button-submit-inquiry"
                >
                  {isSubmitting ? (
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
