import { useNavigate } from "react-router-dom";
import { FaHome } from "react-icons/fa";

const NotFound = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-primary-50 via-white to-primary-50">
      <div className="text-center">
        <h1 className="text-6xl font-bold text-gray-900 mb-4">404</h1>
        <p className="text-2xl text-gray-600 mb-8">Page Not Found</p>
        <p className="text-gray-500 mb-8 max-w-md">
          The page you're looking for doesn't exist. Let's get you back on track!
        </p>
        <button
          onClick={() => navigate("/dashboard")}
          className="inline-flex items-center gap-2 bg-gradient-to-r from-primary-500 to-primary-600 text-white px-8 py-3 rounded-lg hover:from-primary-600 hover:to-primary-700 transition-all font-semibold"
        >
          <FaHome /> Back to Dashboard
        </button>
      </div>
    </div>
  );
};

export default NotFound;
