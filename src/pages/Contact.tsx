
import React from 'react';
import NavBar from "@/components/NavBar";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Mail, MapPin, Phone, Github, Linkedin, Twitter as TwitterIcon } from 'lucide-react';

const Contact = () => {
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log('Form submitted');
    // Here you would typically send the form data to a server
  };

  return (
    <div className="flex min-h-screen bg-white">
      <NavBar />
      
      <div className="flex-1 ml-64">
        <header className="border-b border-gray-200 py-3 px-4 bg-white/80 backdrop-blur-sm sticky top-0 z-10">
          <h1 className="text-xl font-bold">Contact Me</h1>
        </header>
        
        <main className="max-w-4xl mx-auto pt-6 px-4 pb-12">
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h2 className="text-2xl font-bold mb-6">Get In Touch</h2>
              
              <div className="space-y-4 mb-8">
                <div className="flex items-start">
                  <MapPin className="h-5 w-5 text-twitter-blue mr-3 mt-0.5" />
                  <div>
                    <h3 className="font-medium">Location</h3>
                    <p className="text-gray-600">San Francisco, California</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <Mail className="h-5 w-5 text-twitter-blue mr-3 mt-0.5" />
                  <div>
                    <h3 className="font-medium">Email</h3>
                    <a href="mailto:john@portfolio.dev" className="text-twitter-blue hover:underline">
                      john@portfolio.dev
                    </a>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <Phone className="h-5 w-5 text-twitter-blue mr-3 mt-0.5" />
                  <div>
                    <h3 className="font-medium">Phone</h3>
                    <p className="text-gray-600">+1 (123) 456-7890</p>
                  </div>
                </div>
              </div>
              
              <h3 className="font-medium mb-3">Connect With Me</h3>
              <div className="flex space-x-4">
                <a 
                  href="https://github.com/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="bg-gray-100 p-3 rounded-full text-gray-700 hover:bg-gray-200 transition-colors"
                >
                  <Github className="h-5 w-5" />
                </a>
                <a 
                  href="https://linkedin.com/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="bg-gray-100 p-3 rounded-full text-gray-700 hover:bg-gray-200 transition-colors"
                >
                  <Linkedin className="h-5 w-5" />
                </a>
                <a 
                  href="https://twitter.com/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="bg-gray-100 p-3 rounded-full text-twitter-blue hover:bg-gray-200 transition-colors"
                >
                  <TwitterIcon className="h-5 w-5" />
                </a>
              </div>
            </div>
            
            <Card>
              <CardHeader>
                <CardTitle>Send Me a Message</CardTitle>
                <CardDescription>
                  Fill out the form below and I'll get back to you as soon as possible.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="space-y-2">
                    <Label htmlFor="name">Name</Label>
                    <Input id="name" placeholder="Your name" required />
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="email">Email</Label>
                    <Input id="email" type="email" placeholder="your.email@example.com" required />
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="subject">Subject</Label>
                    <Input id="subject" placeholder="What is this regarding?" required />
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="message">Message</Label>
                    <Textarea 
                      id="message" 
                      placeholder="Your message..." 
                      className="min-h-[120px]"
                      required
                    />
                  </div>
                  
                  <Button type="submit" className="w-full bg-twitter-blue hover:bg-twitter-blue/90">
                    Send Message
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>
        </main>
      </div>
    </div>
  );
};

export default Contact;
