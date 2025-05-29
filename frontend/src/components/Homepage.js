import React from 'react';
import { Link } from 'react-router-dom';

const Homepage = () => {
    return (

    <div className="flex flex-col items-center justify-center h-screen bg-gray-100">
      <h1 className="text-4xl font-bold mb-6">Welcome to Soccer Matches App</h1>
      <Link to="/matches">
        <button className="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition">
          View Upcoming Matches
        </button>
      </Link>
    </div>

    );
};

export default Homepage;