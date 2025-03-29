
import React from 'react';
import { 
  Home, 
  Briefcase, 
  User, 
  Mail, 
  Twitter 
} from "lucide-react";
import { Link, useLocation } from "react-router-dom";
import { cn } from "@/lib/utils";

const NavBar = () => {
  const location = useLocation();
  
  const isActive = (path: string) => location.pathname === path;

  return (
    <div className="fixed h-screen w-64 border-r border-gray-200 py-4 px-3 bg-white">
      <div className="flex items-center mb-8 px-3">
        <Twitter className="h-8 w-8 text-twitter-blue" />
        <h1 className="text-xl font-bold ml-2">My Portfolio</h1>
      </div>
      <nav className="space-y-1">
        <NavItem 
          to="/" 
          icon={Home} 
          label="Home" 
          active={isActive("/")} 
        />
        <NavItem 
          to="/projects" 
          icon={Briefcase} 
          label="Projects" 
          active={isActive("/projects")} 
        />
        <NavItem 
          to="/about" 
          icon={User} 
          label="About" 
          active={isActive("/about")} 
        />
        <NavItem 
          to="/contact" 
          icon={Mail} 
          label="Contact" 
          active={isActive("/contact")} 
        />
      </nav>
    </div>
  );
};

interface NavItemProps {
  to: string;
  icon: React.ComponentType<any>;
  label: string;
  active: boolean;
}

const NavItem = ({ to, icon: Icon, label, active }: NavItemProps) => {
  return (
    <Link
      to={to}
      className={cn(
        "flex items-center px-3 py-3 text-gray-700 rounded-full hover:bg-twitter-blue/10 hover:text-twitter-blue transition-colors",
        active && "bg-twitter-blue/10 text-twitter-blue font-medium"
      )}
    >
      <Icon className="h-6 w-6 mr-4" />
      <span className="text-lg">{label}</span>
    </Link>
  );
};

export default NavBar;
