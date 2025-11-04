import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Mail, Linkedin, Github, BookOpen } from "lucide-react";
import { toast } from "sonner";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: ""
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Simulate form submission
    toast.success("Message sent successfully! I'll get back to you soon.");
    setFormData({ name: "", email: "", message: "" });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  return (
    <section id="contact" className="py-20 bg-background">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-12 text-foreground">
          Get In Touch
        </h2>
        <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-12">
          {/* Contact Form */}
          <div className="animate-slide-in">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <Input
                  name="name"
                  placeholder="Your Name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="bg-card border-border focus:border-accent"
                />
              </div>
              <div>
                <Input
                  name="email"
                  type="email"
                  placeholder="Your Email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="bg-card border-border focus:border-accent"
                />
              </div>
              <div>
                <Textarea
                  name="message"
                  placeholder="Your Message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={5}
                  className="bg-card border-border focus:border-accent resize-none"
                />
              </div>
              <Button 
                type="submit" 
                className="w-full bg-gradient-primary hover:shadow-glow transition-all duration-300"
              >
                Send Message
              </Button>
            </form>
          </div>

          {/* Contact Info */}
          <div className="space-y-8 animate-fade-in" style={{ animationDelay: '0.2s' }}>
            <div>
              <h3 className="text-2xl font-semibold text-foreground mb-6">Connect With Me</h3>
              <div className="space-y-4">
                <a 
                  href="mailto:pratyuktpc@gmail.com"
                  className="flex items-center gap-3 text-muted-foreground hover:text-accent transition-colors duration-200"
                >
                  <Mail className="h-5 w-5" />
                  <span>pratyuktpc@gmail.com</span>
                </a>
              </div>
            </div>

            <div>
              <h3 className="text-xl font-semibold text-foreground mb-4">Social Links</h3>
              <div className="flex gap-4">
                <a 
                  href="https://www.linkedin.com/in/pratyukt-mohapatra-245304277/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 bg-card border border-border rounded-lg hover:border-accent hover:shadow-glow transition-all duration-300"
                  aria-label="LinkedIn Profile"
                >
                  <Linkedin className="h-6 w-6 text-accent" />
                </a>
                <a 
                  href="https://github.com/PratyuktMohapatra"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 bg-card border border-border rounded-lg hover:border-accent hover:shadow-glow transition-all duration-300"
                  aria-label="GitHub Profile"
                >
                  <Github className="h-6 w-6 text-accent" />
                </a>
                <a 
                  href="https://pratyukt.hashnode.dev/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 bg-card border border-border rounded-lg hover:border-accent hover:shadow-glow transition-all duration-300"
                  aria-label="Blog"
                >
                  <BookOpen className="h-6 w-6 text-accent" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
