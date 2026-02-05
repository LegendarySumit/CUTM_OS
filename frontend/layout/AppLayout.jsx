import Sidebar from "./Sidebar";
import Topbar from "./Topbar";

const AppLayout = ({ children }) => {
  return (
    <div className="flex h-screen bg-white">
      <Sidebar />
      <div className="flex flex-col flex-1 overflow-hidden">
        <Topbar />
        <main className="flex-1 overflow-y-auto p-8 bg-slate-50">
          <div className="max-w-7xl mx-auto">
            {children}
          </div>
        </main>
      </div>
    </div>
  );
};
export default AppLayout;