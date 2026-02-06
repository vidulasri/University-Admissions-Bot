
import React, { useState } from 'react';
import { UNIVERSITIES } from '../constants.ts';
import { University } from '../types.ts';

const UniversityExplorer: React.FC = () => {
  const [selectedUni, setSelectedUni] = useState<University | null>(null);
  const [searchTerm, setSearchTerm] = useState('');

  const filteredUnis = UNIVERSITIES.filter(u => 
    u.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    u.location.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="space-y-6 animate-fadeIn">
      <header className="flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div>
          <h1 className="text-3xl font-bold text-gray-900">University Explorer</h1>
          <p className="text-gray-500">Discover and compare programs globally.</p>
        </div>
        <div className="relative w-full md:w-72">
          <i className="fas fa-search absolute left-3 top-1/2 -translate-y-1/2 text-gray-400"></i>
          <input
            type="text"
            placeholder="Search institutions..."
            className="w-full pl-10 pr-4 py-2 bg-white border border-gray-200 rounded-xl text-sm focus:ring-2 focus:ring-blue-500 focus:outline-none"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>
      </header>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredUnis.map((uni) => (
          <div 
            key={uni.id} 
            className="bg-white rounded-2xl overflow-hidden border border-gray-100 shadow-sm hover:shadow-xl transition-all cursor-pointer"
            onClick={() => setSelectedUni(uni)}
          >
            <div className="relative h-48">
              <img src={uni.image} alt={uni.name} className="w-full h-full object-cover" />
              <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-md px-3 py-1 rounded-full shadow-sm text-xs font-bold text-blue-600">
                #{uni.rank} Global
              </div>
            </div>
            <div className="p-5">
              <h3 className="text-xl font-bold text-gray-900">{uni.name}</h3>
              <p className="text-sm text-gray-500 flex items-center gap-2 mt-1">
                <i className="fas fa-map-marker-alt text-red-400"></i> {uni.location}
              </p>
              
              <div className="mt-6 flex items-center justify-between text-sm">
                <div>
                  <p className="text-gray-400 text-[10px] uppercase font-bold">Acceptance Rate</p>
                  <p className="font-bold text-gray-800">{uni.acceptanceRate}</p>
                </div>
                <div className="text-right">
                  <p className="text-gray-400 text-[10px] uppercase font-bold">Annual Tuition</p>
                  <p className="font-bold text-gray-800">{uni.tuition}</p>
                </div>
              </div>

              <div className="mt-6 pt-6 border-t border-gray-50 flex items-center gap-4">
                <button className="flex-1 bg-blue-600 text-white py-2.5 rounded-xl text-sm font-semibold hover:bg-blue-700 transition-colors">
                  View Programs
                </button>
                <button className="w-10 h-10 flex items-center justify-center border border-gray-200 rounded-xl hover:bg-gray-50 text-gray-400" onClick={(e) => e.stopPropagation()}>
                  <i className="far fa-heart"></i>
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* University Details Modal Placeholder */}
      {selectedUni && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm">
          <div className="bg-white w-full max-w-2xl rounded-3xl overflow-hidden shadow-2xl animate-scaleIn">
            <div className="relative h-64">
              <img src={selectedUni.image} className="w-full h-full object-cover" />
              <button 
                onClick={() => setSelectedUni(null)}
                className="absolute top-4 right-4 w-10 h-10 bg-white/20 hover:bg-white/40 backdrop-blur-md rounded-full flex items-center justify-center text-white"
              >
                <i className="fas fa-times"></i>
              </button>
            </div>
            <div className="p-8">
              <h2 className="text-2xl font-bold text-gray-900">{selectedUni.name}</h2>
              <div className="mt-6 grid grid-cols-2 gap-6">
                <div>
                  <h4 className="text-sm font-bold text-gray-800 mb-2">Requirements</h4>
                  <ul className="space-y-2">
                    {selectedUni.requirements.map((req, i) => (
                      <li key={i} className="text-sm text-gray-600 flex items-center gap-2">
                        <i className="fas fa-check-circle text-green-500 text-xs"></i> {req}
                      </li>
                    ))}
                  </ul>
                </div>
                <div>
                  <h4 className="text-sm font-bold text-gray-800 mb-2">Deadlines</h4>
                  <div className="bg-gray-50 p-3 rounded-xl">
                    <p className="text-xs text-gray-500">Regular Decision</p>
                    <p className="text-sm font-bold text-gray-800">{selectedUni.deadlines.regularDecision}</p>
                  </div>
                </div>
              </div>
              <div className="mt-8 flex gap-4">
                <button className="flex-1 bg-blue-600 text-white py-3 rounded-xl font-bold shadow-lg shadow-blue-200 hover:bg-blue-700 transition-all">
                  Start Application
                </button>
                <button className="px-6 py-3 border border-gray-200 rounded-xl font-bold text-gray-700 hover:bg-gray-50">
                  Virtual Tour
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default UniversityExplorer;
