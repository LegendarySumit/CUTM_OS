import { useAuth } from "../src/context/AuthContext";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

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
            className="flex items-center gap-2 px-3 py-2 hover:bg-slate-100 rounded-lg transition"
          >
            <div className="w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center text-white text-sm font-bold">
              {user?.name?.charAt(0)}
            </div>
            <span className="text-slate-700 text-sm">{user?.name?.split(' ')[0]}</span>
          </button>

          {showMenu && (
            <div className="absolute right-0 mt-2 w-48 bg-white rounded-lg shadow-lg border border-slate-200 py-2">
              <div className="px-4 py-3 border-b border-slate-100">
                <p className="font-semibold text-slate-900">{user?.name}</p>
                <p className="text-xs text-slate-500">{user?.email}</p>
              </div>
              <button
                onClick={() => {
                  navigate("/profile");
                  setShowMenu(false);
                }}
                className="w-full text-left px-4 py-2 hover:bg-slate-50 text-slate-700 text-sm"
              >
                Profile
              </button>
              <button
                onClick={handleLogout}
                className="w-full text-left px-4 py-2 hover:bg-red-50 text-red-600 text-sm border-t border-slate-100"
              >
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
