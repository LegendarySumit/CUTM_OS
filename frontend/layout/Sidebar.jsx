import { NavLink, useNavigate } from "react-router-dom";
import { useAuth } from "../src/context/AuthContext";
import { LayoutDashboard, BookOpen, Folder, Wrench, User, LogOut } from "lucide-react";

const Sidebar = () => {
  const { logout } = useAuth();
  const navigate = useNavigate();

  const navItems = [
    { label: "Dashboard", path: "/dashboard", icon: LayoutDashboard },
    { label: "Prep", path: "/prep", icon: BookOpen },
    { label: "Resources", path: "/resources", icon: Folder },
    { label: "Utilities", path: "/utilities", icon: Wrench },
    { label: "Profile", path: "/profile", icon: User },
  ];

  const handleLogout = () => {
    logout();
    navigate("/login");
  };

  return (
    <aside className="w-72 bg-white text-slate-900 flex flex-col p-6 min-h-screen border-r border-slate-200">
      {/* Logo */}
      <NavLink 
        to="/dashboard" 
        className="mb-8 flex items-center gap-3 hover:opacity-80 transition-opacity"
      >
        <div className="w-10 h-10 bg-blue-600 rounded-lg flex items-center justify-center text-white font-bold">
          C
        </div>
        <div>
          <div className="text-xl font-bold text-slate-900">CUTM OS</div>
          <div className="text-xs text-slate-500">v1.0.0</div>
        </div>
      </NavLink>

      {/* Navigation */}
      <nav className="flex-1 space-y-1">
        <div className="text-xs font-semibold text-slate-500 px-4 mb-4 uppercase tracking-wider">Menu</div>
        {navItems.map((item) => {
          const Icon = item.icon;
          return (
            <NavLink
              key={item.label}
              to={item.path}
              className={({ isActive }) =>
                `flex items-center gap-3 px-4 py-2.5 rounded-lg transition ${
                  isActive
                    ? "bg-blue-50 text-blue-600 font-semibold border-l-2 border-blue-600"
                    : "text-slate-600 hover:bg-slate-50"
                }`
              }
            >
              <Icon size={18} />
              <span>{item.label}</span>
            </NavLink>
          );
        })}
      </nav>

      {/* Logout Button */}
      <button
        onClick={handleLogout}
        className="flex items-center justify-center gap-2 px-4 py-2.5 rounded-lg bg-red-50 hover:bg-red-100 text-red-600 transition font-medium w-full"
      >
        <LogOut size={18} />
        <span>Logout</span>
      </button>

      {/* Footer */}
      <div className="mt-6 pt-6 border-t border-slate-200 text-center">
        <p className="text-xs text-slate-500 font-medium">Your System for Success</p>
      </div>
    </aside>
  );
};

export default Sidebar;
