
import React from 'react';
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import NavBar from "@/components/NavBar";
import Dashboard from "@/pages/Dashboard";

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col bg-ats-background">
      <NavBar />
      <main className="flex-1">
        <Dashboard />
      </main>
    </div>
  );
};

export default Index;
