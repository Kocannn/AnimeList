import React from 'react';

const ComingSoon = () => {
  return (
    <div className="flex items-center justify-center min-h-screen bg-[#222831]">
      <div className="text-center">
        <h1 className="text-5xl font-bold text-white mb-4">Coming Soon</h1>
        <p className="text-lg text-gray-300 mb-8">We're working hard to bring you something amazing. Stay tuned!</p>
        <div className="flex justify-center gap-4">
          <a 
            href="/" 
            className="inline-block px-4 py-2 bg-gray-700 text-white rounded-lg shadow-lg hover:bg-gray-600 transition-all duration-300"
          >
            Back to Home
          </a>
        </div>
      </div>
    </div>
  );
};

export default ComingSoon;
