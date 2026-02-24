import React from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { Home, Briefcase, MessageSquare, User } from "lucide-react";

const BottomNav = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const currentPath = location.pathname.toLowerCase();

  const isActive = (path) => currentPath.startsWith(path);

  return (
    <div className="fixed bottom-0 left-0 w-full md:hidden border-t bg-white flex justify-around items-center text-[10px] py-2 shadow-lg z-50">
      <div
        className={`flex flex-col items-center gap-1 cursor-pointer transition-colors ${isActive('/dashboard') ? 'text-primary font-medium' : 'text-gray-500 hover:text-primary'}`}
        onClick={() => navigate('/dashboard')}
      >
        <Home size={20} />
        <span>Home</span>
      </div>

      <div
        className={`flex flex-col items-center gap-1 cursor-pointer transition-colors ${isActive('/tools') ? 'text-primary font-medium' : 'text-gray-500 hover:text-primary'}`}
        onClick={() => navigate('/tools')}
      >
        <Briefcase size={20} />
        <span>Tools</span>
      </div>

      <div
        className={`flex flex-col items-center gap-1 cursor-pointer transition-colors ${isActive('/chat') ? 'text-primary font-medium' : 'text-gray-500 hover:text-primary'}`}
        onClick={() => navigate('/chat')}
      >
        <MessageSquare size={20} />
        <span>AI Mentor</span>
      </div>

      <div
        className={`flex flex-col items-center gap-1 cursor-pointer transition-colors ${isActive('/profile') ? 'text-primary font-medium' : 'text-gray-500 hover:text-primary'}`}
        onClick={() => navigate('/profile')}
      >
        <User size={20} />
        <span>Profile</span>
      </div>
    </div>
  );
};

export default BottomNav;