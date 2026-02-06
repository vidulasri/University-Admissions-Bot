
import React from 'react';
import { APPLICATION_STEPS, SCHOLARSHIPS, UNIVERSITIES } from '../constants.ts';

const Dashboard: React.FC = () => {
  const completedCount = APPLICATION_STEPS.filter(s => s.status === 'completed').length;
  const progress = (completedCount / APPLICATION_STEPS.length) * 100;

  return (
    <div className="space-y-8 animate-fadeIn">
      <header>
        <h1 className="text-3xl font-bold text-gray-900">Welcome back, Alex! 👋</h1>
        <p className="text-gray-500">You have 3 tasks due this week for Heritage Business School.</p>
      </header>

      {/* Progress Overview */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="bg-white p-6 rounded-2xl border border-gray-100 shadow-sm">
          <div className="flex justify-between items-start mb-4">
            <div className="p-3 bg-blue-50 text-blue-600 rounded-xl">
              <i className="fas fa-tasks text-xl"></i>
            </div>
            <span className="text-xs font-bold text-blue-600 bg-blue-50 px-2 py-1 rounded-full">
              {Math.round(progress)}% Complete
            </span>
          </div>
          <h3 className="text-lg font-bold text-gray-800">Application Progress</h3>
          <div className="mt-4 w-full bg-gray-100 rounded-full h-2">
            <div 
              className="bg-blue-600 h-2 rounded-full transition-all duration-1000" 
              style={{ width: `${progress}%` }}
            ></div>
          </div>
          <p className="mt-4 text-sm text-gray-500">{completedCount} of {APPLICATION_STEPS.length} steps completed</p>
        </div>

        <div className="bg-white p-6 rounded-2xl border border-gray-100 shadow-sm">
          <div className="flex justify-between items-start mb-4">
            <div className="p-3 bg-green-50 text-green-600 rounded-xl">
              <i className="fas fa-calendar-alt text-xl"></i>
            </div>
          </div>
          <h3 className="text-lg font-bold text-gray-800">Next Deadline</h3>
          <p className="mt-2 text-2xl font-bold text-gray-900">Jan 01</p>
          <p className="text-sm text-gray-500">Tech Institute (Regular Decision)</p>
          <button className="mt-4 text-sm text-blue-600 font-semibold hover:underline">View Calendar</button>
        </div>

        <div className="bg-white p-6 rounded-2xl border border-gray-100 shadow-sm">
          <div className="flex justify-between items-start mb-4">
            <div className="p-3 bg-purple-50 text-purple-600 rounded-xl">
              <i className="fas fa-award text-xl"></i>
            </div>
          </div>
          <h3 className="text-lg font-bold text-gray-800">Matched Funds</h3>
          <p className="mt-2 text-2xl font-bold text-gray-900">$45,000</p>
          <p className="text-sm text-gray-500">Based on your academic profile</p>
          <button className="mt-4 text-sm text-purple-600 font-semibold hover:underline">Apply Now</button>
        </div>
      </div>

      {/* Main Content Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Recommended Programs */}
        <div className="lg:col-span-2 space-y-4">
          <h2 className="text-xl font-bold text-gray-800">Top Matches for You</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {UNIVERSITIES.slice(0, 2).map((uni) => (
              <div key={uni.id} className="group relative bg-white rounded-2xl overflow-hidden border border-gray-100 shadow-sm hover:shadow-md transition-all">
                <img src={uni.image} alt={uni.name} className="w-full h-40 object-cover group-hover:scale-105 transition-transform duration-500" />
                <div className="p-4">
                  <div className="flex justify-between items-start">
                    <h3 className="font-bold text-gray-900 line-clamp-1">{uni.name}</h3>
                    <span className="text-xs font-bold text-green-600 bg-green-50 px-2 py-1 rounded-full">94% Match</span>
                  </div>
                  <p className="text-sm text-gray-500 mt-1">{uni.location}</p>
                  <div className="mt-4 flex flex-wrap gap-2">
                    {uni.programs.slice(0, 2).map(p => (
                      <span key={p.id} className="text-[10px] bg-gray-100 px-2 py-1 rounded text-gray-600 uppercase font-bold">{p.name}</span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Upcoming Tasks */}
        <div className="space-y-4">
          <h2 className="text-xl font-bold text-gray-800">Next Steps</h2>
          <div className="bg-white rounded-2xl border border-gray-100 shadow-sm p-4 divide-y divide-gray-100">
            {APPLICATION_STEPS.slice(0, 4).map((step) => (
              <div key={step.id} className="py-3 flex items-center gap-4">
                <div className={`w-2 h-2 rounded-full ${
                  step.status === 'completed' ? 'bg-green-500' : 
                  step.status === 'in-progress' ? 'bg-blue-500' : 'bg-gray-300'
                }`}></div>
                <div className="flex-1">
                  <p className={`text-sm font-medium ${step.status === 'completed' ? 'line-through text-gray-400' : 'text-gray-800'}`}>
                    {step.title}
                  </p>
                  <p className="text-xs text-gray-400">Due {step.dueDate}</p>
                </div>
                {step.status === 'pending' && (
                  <button className="p-2 hover:bg-gray-50 rounded-lg text-gray-400">
                    <i className="fas fa-chevron-right text-xs"></i>
                  </button>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
