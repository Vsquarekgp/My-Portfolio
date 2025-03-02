import { useState } from 'react';
import { Mail, Phone, MapPin, Send, Linkedin } from 'lucide-react';
import { toast } from 'sonner';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  
  const [isSubmitting, setIsSubmitting] = useState(false);
  
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      toast.success("Your message has been sent successfully!");
      setFormData({
        name: '',
        email: '',
        subject: '',
        message: ''
      });
      setIsSubmitting(false);
    }, 1500);
  };

  return (
    <section id="contact" className="section bg-background">
      <div className="container">
        <div className="section-title">
          <h2>Get In Touch</h2>
          <p>Let's connect and explore cutting-edge Gen AI solutions together.</p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-12">
          <div className="lg:col-span-2 animate-on-scroll">
            <h3 className="text-2xl mb-6 font-serif">Let's <span className="text-got-gold">Connect</span></h3>
            <p className="mb-8 text-muted-foreground">
              Whether you're looking for AI-driven automation or innovative Gen AI solutions, I'm here to collaborate.
            </p>
            
            <div className="space-y-6">
              <div className="flex items-start">
                <div className="w-12 h-12 rounded-full bg-got-gold/10 flex items-center justify-center mr-4 shrink-0">
                  <Mail className="text-got-gold" size={20} />
                </div>
                <div>
                  <h4 className="text-lg font-medium mb-1">Email</h4>
                  <a href="mailto:vasuverma132004@gmail.com" className="text-got-gold hover:underline">
                    vasuverma132004@gmail.com
                  </a>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="w-12 h-12 rounded-full bg-got-gold/10 flex items-center justify-center mr-4 shrink-0">
                  <Phone className="text-got-gold" size={20} />
                </div>
                <div>
                  <h4 className="text-lg font-medium mb-1">Phone</h4>
                  <a href="tel:+919759280690" className="text-got-gold hover:underline">
                    +91 9759280690
                  </a>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="w-12 h-12 rounded-full bg-got-gold/10 flex items-center justify-center mr-4 shrink-0">
                  <Linkedin className="text-got-gold" size={20} />
                </div>
                <div>
                  <h4 className="text-lg font-medium mb-1">LinkedIn</h4>
                  <a href="https://www.linkedin.com/in/vasu-verma-795287234/" target="_blank" rel="noopener noreferrer" className="text-got-gold hover:underline">
                    linkedin.com/in/vasu-verma-795287234/
                  </a>
                </div>
              </div>
            </div>
          </div>
          
          <div className="lg:col-span-3 animate-on-scroll delay-100">
            <form onSubmit={handleSubmit} className="p-8 bg-white dark:bg-got-charcoal rounded-md shadow-md">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium mb-2">Name</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-md border focus:outline-none focus:ring-2 focus:ring-got-gold transition-all bg-white dark:bg-got-charcoal"
                    placeholder="Your name"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium mb-2">Email</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-md border focus:outline-none focus:ring-2 focus:ring-got-gold transition-all bg-white dark:bg-got-charcoal"
                    placeholder="Your email"
                  />
                </div>
              </div>
              
              <div className="mb-6">
                <label htmlFor="subject" className="block text-sm font-medium mb-2">Subject</label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  required
                  value={formData.subject}
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded-md border focus:outline-none focus:ring-2 focus:ring-got-gold transition-all bg-white dark:bg-got-charcoal"
                  placeholder="Subject"
                />
              </div>
              
              <div className="mb-6">
                <label htmlFor="message" className="block text-sm font-medium mb-2">Message</label>
                <textarea
                  id="message"
                  name="message"
                  required
                  rows={5}
                  value={formData.message}
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded-md border focus:outline-none focus:ring-2 focus:ring-got-gold transition-all bg-white dark:bg-got-charcoal"
                  placeholder="Your message"
                ></textarea>
              </div>
              
              <button
                type="submit"
                disabled={isSubmitting}
                className="btn-primary w-full flex items-center justify-center"
              >
                {isSubmitting ? (
                  <span>Sending...</span>
                ) : (
                  <>
                    <Send size={16} className="mr-2" />
                    Send Message
                  </>
                )}
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
