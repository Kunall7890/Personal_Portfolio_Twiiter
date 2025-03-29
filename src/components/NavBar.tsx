
import React from 'react';
import { Button } from "@/components/ui/button";
import { 
  LayoutDashboard, 
  FilePlus, 
  Settings, 
  Users, 
  BriefcaseBusiness 
} from "lucide-react";
import { Link } from "react-router-dom";

const NavBar = () => {
  return (
    <div className="flex justify-between items-center py-4 px-6 bg-white border-b">
      <div className="flex items-center space-x-2">
        <BriefcaseBusiness className="h-8 w-8 text-ats-primary" />
        <h1 className="text-xl font-bold text-ats-primary">ResumeGenius ATS</h1>
      </div>
      <nav>
        <ul className="flex space-x-2">
          <li>
            <Button variant="ghost" asChild>
              <Link to="/" className="flex items-center space-x-1">
                <LayoutDashboard className="h-4 w-4" />
                <span>Dashboard</span>
              </Link>
            </Button>
          </li>
          <li>
            <Button variant="ghost" asChild>
              <Link to="/upload" className="flex items-center space-x-1">
                <FilePlus className="h-4 w-4" />
                <span>Upload</span>
              </Link>
            </Button>
          </li>
          <li>
            <Button variant="ghost" asChild>
              <Link to="/candidates" className="flex items-center space-x-1">
                <Users className="h-4 w-4" />
                <span>Candidates</span>
              </Link>
            </Button>
          </li>
          <li>
            <Button variant="ghost" asChild>
              <Link to="/settings" className="flex items-center space-x-1">
                <Settings className="h-4 w-4" />
                <span>Settings</span>
              </Link>
            </Button>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default NavBar;
