const StatCard = ({ label, value, icon, color = "blue" }) => {
  const colorClasses = {
    blue: "bg-blue-50 text-blue-600 border-blue-200",
    orange: "bg-orange-50 text-orange-600 border-orange-200",
    green: "bg-green-50 text-green-600 border-green-200",
    purple: "bg-purple-50 text-purple-600 border-purple-200",
  };

  return (
    <div className={`bg-white rounded-xl p-6 shadow border border-gray-200 hover:shadow-lg transition-shadow`}>
      <div className="flex items-start justify-between mb-4">
        <h3 className="text-sm font-medium text-gray-600">{label}</h3>
        {icon && (
          <div className={`p-2 rounded-lg ${colorClasses[color] || colorClasses.blue}`}>
            {icon}
          </div>
        )}
      </div>
      <p className="text-3xl font-bold text-gray-900">{value}</p>
      <p className="text-xs text-gray-500 mt-2">+2.5% from last week</p>
    </div>
  );
};

export default StatCard;
