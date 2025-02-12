import React from 'react'
import { useState } from "react";
const mockConnections = [
  {
    id: 1,
    name: "Jasneet Kaur",
    title: "Lead HRBP & Talent Acquisition || HR40under40",
    connected: "Connected 1 day ago",
    img:"https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8cG9ydHJhaXR8ZW58MHx8MHx8fDA%3D",
  },
  {
    id: 2,
    name: "Priyanshi Jain",
    title: "Software Engineering at Microsoft | IIIT-Delhi",
    connected: "Connected 1 day ago",
    img:"https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8cG9ydHJhaXR8ZW58MHx8MHx8fDA%3D"
  },
  {
    id: 3,
    name: "Yash Bhosale",
    title: "Associate Software Engineer at Data Axle India",
    connected: "Connected 5 days ago",
    img:"https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8cG9ydHJhaXR8ZW58MHx8MHx8fDA%3D",
  },
  {
    id: 4,
    name: "Bhushan Sonawane",
    title: "Senior Software Engineer at Blue Yonder | Ex-Thoughtworks",
    connected: "Connected 1 week ago",
    img:"https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fHBvcnRyYWl0fGVufDB8fDB8fHww",
  },
  {
    id: 5,
    name: "Naman Sharma",
    title: "SDE-3 at ZETA(Direct i) | IIT BHU",
    connected: "Connected 1 week ago",
    img:"https://images.unsplash.com/photo-1521119989659-a83eee488004?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8cG9ydHJhaXR8ZW58MHx8MHx8fDA%3D",
  },
];

function Connections() {



  const [connections] = useState(mockConnections); // Connections data remains unchanged
  const [searchTerm, setSearchTerm] = useState(""); // State for capturing the search input

  // Update search term as the user types
  const handleSearch = (event) => {
    setSearchTerm(event.target.value);
  };

  // Filter connections based on the search term (case-insensitive)
  const filteredConnections = connections.filter((connection) =>
    connection.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="min-h-screen p-4 bg-gray-100">
      <div className="max-w-4xl mx-auto bg-white p-6 shadow-md rounded-lg">
        <h1 className="text-2xl font-bold mb-4">2,674 Connections</h1>

        {/* Search and Sort Bar */}
        <div className="flex justify-between items-center mb-4">
          {/* Sort by dropdown */}
          <div className="flex items-center space-x-4">
            <span className="text-gray-700">Sort by:</span>
            <select className="border rounded-md p-2 text-gray-700">
              <option>Recently added</option>
            </select>
          </div>

          {/* Search input */}
          <div className="flex space-x-4">
            <input
              type="text"
              placeholder="Search by name"
              value={searchTerm}
              onChange={handleSearch}
              className="border p-2 rounded-md w-60"
            />
            <button className="text-blue-600">Search with filters</button>
          </div>
        </div>

        {/* Display Filtered Connections */}
        <div>
          {filteredConnections.length > 0 ? (
            filteredConnections.map((connection) => (
              <div
                key={connection.id}
                className="flex justify-between items-center border-b py-4"
              >
                <div className="flex items-center">
                  <img
                    src={connection.img}
                    alt={connection.name}
                    className="w-12 h-12 rounded-full mr-4"
                  />
                  <div>
                    <h3 className="font-bold text-gray-900">
                      {connection.name}
                    </h3>
                    <p className="text-gray-600">{connection.title}</p>
                    <p className="text-gray-500 text-sm">
                      {connection.connected}
                    </p>
                  </div>
                </div>
                <div className="flex space-x-2 items-center">
                  <button className="text-blue-600 border px-4 py-2 rounded-md">
                    Message
                  </button>
                  <button className="text-gray-600">...</button>
                </div>
              </div>
            ))
          ) : (
            <p className="text-gray-500 text-center">No connections found</p>
          )}
        </div>
      </div>
    </div>
  );
};



export default Connections;
