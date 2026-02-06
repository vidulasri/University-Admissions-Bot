
import React from 'react';

interface SidebarProps {
  activeTab: string;
  setActiveTab: (tab: string) => void;
}

const Sidebar: React.FC<SidebarProps> = ({ activeTab, setActiveTab }) => {
  const menuItems = [
    { id: 'dashboard', label: 'Dashboard', icon: 'fa-chart-pie' },
    { id: 'chat', label: 'Assistant', icon: 'fa-robot' },
    { id: 'programs', label: 'Universities', icon: 'fa-university' },
    { id: 'tracker', label: 'My Tracker', icon: 'fa-tasks' },
    { id: 'scholarships', label: 'Scholarships', icon: 'fa-graduation-cap' },
  ];

  return (
    <div className="w-64 bg-white border-r border-gray-200 flex flex-col h-screen fixed left-0 top-0">
      <div className="p-6">
        <div className="flex items-center gap-2 mb-8">
          <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center">
            <i className="fas fa-graduation-cap text-white text-sm"></i>
          </div>
          <span className="text-xl font-bold text-gray-800">EduPath</span>
        </div>

        <nav className="space-y-2">
          {menuItems.map((item) => (
            <button
              key={item.id}
              onClick={() => setActiveTab(item.id)}
              className={`w-full flex items-center gap-3 px-4 py-3 rounded-xl transition-all ${
                activeTab === item.id
                  ? 'bg-blue-50 text-blue-600 font-semibold'
                  : 'text-gray-500 hover:bg-gray-50'
              }`}
            >
              <i className={`fas ${item.icon} w-5`}></i>
              {item.label}
            </button>
          ))}
        </nav>
      </div>

      <div className="mt-auto p-6 border-t border-gray-100">
        <div className="flex items-center gap-3">
          <img
            src="https://picsum.photos/seed/user123/40/40"
            alt="Profile"
            className="w-10 h-10 rounded-full border border-gray-200"
          />
          <div>
            <p className="text-sm font-semibold text-gray-800">Alex Johnson</p>
            <p className="text-xs text-gray-500">Applicant ID: #4492</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
