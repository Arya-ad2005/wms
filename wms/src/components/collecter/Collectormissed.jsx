import React from 'react';
import './collectermissed.css';
const CollectorMissed = ({ onReschedule, onContactSupport }) => {
  return (
    <div className="max-w-md mx-auto bg-white rounded-xl shadow-lg overflow-hidden md:max-w-2xl border-l-4 border-yellow-400">
      <div className="p-8">
        <div className="uppercase tracking-wide text-sm text-yellow-500 font-bold">
          Action Required
        </div>
        <h2 className="block mt-1 text-lg leading-tight font-medium text-black">
          We missed you today
        </h2>
        <p className="mt-2 text-slate-500">
          Our collection agent attempted to visit your location but was unable to reach you. Please reschedule or contact us to avoid service interruption.
        </p>
        
        <div className="mt-6 flex gap-3">
          <button 
            onClick={onReschedule}
            className="px-4 py-2 bg-blue-600 text-white text-sm font-medium rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition-all"
          >
            Reschedule Visit
          </button>
          <button 
            onClick={onContactSupport}
            className="px-4 py-2 bg-white text-slate-700 border border-slate-300 text-sm font-medium rounded-md hover:bg-slate-50 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 transition-all"
          >
            Contact Support
          </button>
        </div>
      </div>
    </div>
  );
};

export default CollectorMissed;