
import React from 'react';
import NavBar from "@/components/NavBar";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const Index = () => {
  const tweets = [
    {
      id: 1,
      content: "Just launched my new project! Check it out in the projects section.",
      date: "2h ago",
      likes: 42,
      retweets: 12
    },
    {
      id: 2,
      content: "Learning new React patterns and improving my portfolio website.",
      date: "1d ago",
      likes: 28,
      retweets: 5
    },
    {
      id: 3,
      content: "Excited to share that I've been working on a new design system. More updates coming soon!",
      date: "3d ago",
      likes: 84,
      retweets: 22
    }
  ];

  return (
    <div className="flex min-h-screen bg-white">
      <NavBar />
      
      <div className="flex-1 ml-64">
        <header className="border-b border-gray-200 py-3 px-4 bg-white/80 backdrop-blur-sm sticky top-0 z-10">
          <h1 className="text-xl font-bold">Home</h1>
        </header>
        
        <main className="max-w-2xl mx-auto pt-4 px-4">
          <div className="pb-6 border-b border-gray-200">
            <div className="flex gap-3">
              <Avatar className="h-12 w-12">
                <AvatarImage src="/placeholder.svg" alt="Profile" />
                <AvatarFallback>JP</AvatarFallback>
              </Avatar>
              
              <div className="flex-1">
                <div className="flex items-center mb-1">
                  <h2 className="font-bold">John Portfolio</h2>
                  <span className="text-gray-500 text-sm ml-2">@johndev</span>
                </div>
                <p className="text-lg mb-4">Full Stack Developer | React | Node.js | TypeScript</p>
                <div className="flex gap-4 text-sm text-gray-500">
                  <span>San Francisco, CA</span>
                  <span>Portfolio since 2020</span>
                  <Link to="/about" className="text-twitter-blue hover:underline">More info</Link>
                </div>
              </div>
            </div>
            
            <div className="flex justify-between items-center mt-6">
              <div>
                <span className="font-bold">145</span> <span className="text-gray-500">Following</span>
                <span className="font-bold ml-4">2.5K</span> <span className="text-gray-500">Followers</span>
              </div>
              <Link to="/contact">
                <Button className="bg-twitter-blue hover:bg-twitter-blue/90 text-white rounded-full">
                  Contact Me
                </Button>
              </Link>
            </div>
          </div>
          
          <section className="mt-4">
            <div className="flex justify-between items-center mb-4">
              <h2 className="font-bold text-xl">Recent Updates</h2>
              <Link to="/projects" className="text-twitter-blue hover:underline text-sm">
                View all projects
              </Link>
            </div>
            
            <div className="space-y-4">
              {tweets.map(tweet => (
                <Card key={tweet.id} className="border border-gray-200 hover:bg-gray-50 transition-colors">
                  <CardContent className="p-4">
                    <div className="flex gap-3">
                      <Avatar className="h-10 w-10">
                        <AvatarImage src="/placeholder.svg" alt="Profile" />
                        <AvatarFallback>JP</AvatarFallback>
                      </Avatar>
                      
                      <div className="flex-1">
                        <div className="flex items-center mb-1">
                          <h3 className="font-bold">John Portfolio</h3>
                          <span className="text-gray-500 text-sm ml-2">@johndev</span>
                          <span className="text-gray-500 text-sm ml-2">· {tweet.date}</span>
                        </div>
                        
                        <p className="mb-3">{tweet.content}</p>
                        
                        <div className="flex text-gray-500 text-sm justify-between">
                          <span className="flex items-center gap-1">
                            <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                            </svg>
                            20
                          </span>
                          
                          <span className="flex items-center gap-1">
                            <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
                            </svg>
                            {tweet.retweets}
                          </span>
                          
                          <span className="flex items-center gap-1">
                            <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                            </svg>
                            {tweet.likes}
                          </span>
                          
                          <span className="flex items-center gap-1">
                            <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.368 2.684 3 3 0 00-5.368-2.684z" />
                            </svg>
                            Share
                          </span>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </section>
        </main>
      </div>
    </div>
  );
};

export default Index;
