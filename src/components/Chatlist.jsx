import React from "react";

// ChatList Component to show list of chats with search functionality
const Chatlist = ({ chats, selectChat, searchQuery, setSearchQuery }) => {
  // Filter chats based on the search query
  const filteredChats = chats.filter((chat) =>
    chat.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="w-1/4 h-full border-r p-4">
      <h2 className="font-bold text-xl mb-4">Chats</h2>
      {/* Search Input */}
      <input
        type="text"
        placeholder="Search for workouts and friends"
        className="w-full mb-4 p-2 border rounded-md"
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
      />

      {/* Scrollable Chat List */}
      <div className="overflow-y-auto max-h-[70vh]"> {/* max-h controls the max height */}
        {filteredChats.map((chat) => (
          <div
            key={chat.id}
            onClick={() => selectChat(chat)}  // On click, pass the selected chat to parent component
            className={`flex items-center justify-between p-3 cursor-pointer ${
              chat.unread ? "bg-gray-200" : ""
            }`}
          >
            <div className="flex items-center">
              <div className="w-12 h-12 bg-gray-400 rounded-full mr-3 overflow-hidden">
                <img
                  src={chat.img || "https://via.placeholder.com/150"}
                  alt={chat.name}
                />
              </div>
              <div>
                <h3 className="font-bold">{chat.name}</h3>
                <p className="text-gray-600">{chat.message}</p>
              </div>
            </div>
            {chat.time && <span className="text-xs text-gray-400">{chat.time}</span>}
            {chat.unread && <span className="text-red-600 font-bold">•</span>}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Chatlist;
