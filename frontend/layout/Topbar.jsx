import { useAuth } from "../src/context/AuthContext";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { User, LogOut, Settings, ChevronDown } from "lucide-react";

const Topbar = () => {
  const { user, logout } = useAuth();
  const [showMenu, setShowMenu] = useState(false);
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate("/login");
  };

  return (
    <header className="h-16 bg-white border-b border-slate-200 flex items-center px-8 justify-between sticky top-0 z-40">
      <div>
        <p className="font-semibold text-slate-900">{user?.name}</p>
        <p className="text-xs text-slate-500">{user?.branch} • Semester {user?.semester}</p>
      </div>

      <div className="flex items-center gap-4">
        <div className="relative">
          <button
            onClick={() => setShowMenu(!showMenu)}
            className="flex items-center gap-2 px-4 py-2.5 bg-blue-600 hover:bg-blue-700 text-white rounded-lg transition-all duration-200 font-semibold shadow-sm hover:shadow-md border border-blue-700"
          >
            <User size={18} className="text-white" />
            <span>Profile</span>
            <ChevronDown size={16} className={`transition-transform duration-200 ${showMenu ? 'rotate-180' : ''}`} />
          </button>

          {showMenu && (
            <div className="absolute right-0 mt-3 w-56 bg-white rounded-xl shadow-xl border border-slate-200 py-2 z-50">
              {/* User Info Header */}
              <div className="px-4 py-4 border-b border-slate-100 bg-gradient-to-r from-blue-50 to-transparent">
                <p className="font-bold text-slate-900">{user?.name}</p>
                <p className="text-xs text-slate-500 mt-1">{user?.email}</p>
                <div className="text-xs text-slate-600 mt-2 font-medium">
                  {user?.branch} • Semester {user?.semester}
                </div>
              </div>

              {/* Menu Items */}
              <button
                onClick={() => {
                  navigate("/profile");
                  setShowMenu(false);
                }}
                className="w-full text-left px-4 py-3 hover:bg-blue-50 text-slate-700 text-sm flex items-center gap-3 transition-colors"
              >
                <User size={16} className="text-blue-600" />
                View Profile
              </button>
              
              <button
                onClick={() => {
                  navigate("/profile");
                  setShowMenu(false);
                }}
                className="w-full text-left px-4 py-3 hover:bg-blue-50 text-slate-700 text-sm flex items-center gap-3 transition-colors"
              >
                <Settings size={16} className="text-slate-600" />
                Settings
              </button>

              <div className="border-t border-slate-100"></div>

              <button
                onClick={handleLogout}
                className="w-full text-left px-4 py-3 hover:bg-red-50 text-red-600 text-sm flex items-center gap-3 transition-colors font-medium"
              >
                <LogOut size={16} />
                Logout
              </button>
            </div>
          )}
        </div>
      </div>
    </header>
  );
};

export default Topbar;
