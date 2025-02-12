import React, { useState, useEffect } from "react";
import { collection, addDoc, onSnapshot, query, orderBy } from "firebase/firestore";
import { db } from "./firebase";
import { onAuthStateChanged,} from "firebase/auth";
import { auth } from "./firebase";

const Community = () => {
  const [message, setMessage] = useState("");
  const [messages, setMessages] = useState([]);

  useEffect(() => {
    const q = query(collection(db, "messages"), orderBy("createdAt", "asc"));
    const unsubscribe = onSnapshot(q, (snapshot) => {
      setMessages(snapshot.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
    });

    return () => unsubscribe();
  }, []);

  const handleSendMessage = async (e) => {
    e.preventDefault();

    if (message.trim()) {
      await addDoc(collection(db, "messages"), {
        text: message,
        uid: user.uid,
        displayName: user.displayName,
        createdAt: new Date(),
        photoUrl: user.photoURL,
      });
      setMessage("");
    }
  };
const [user, setUser] = useState(null);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
    });

    return () => {
      unsubscribe();
    };
  }, []);
  return (
    <div className="w-full mt-10">
      <div className="w-120 h-90 bg-zinc-100 ml-20">
      <h2 className="text-2xl font-semibold mb-4">Community</h2>
      <div className="h-100 overflow-y-auto mb-4">
        {messages.map((msg) => (
          <div key={msg.id} className={`min-w-35 p-2 mb-2 rounded-full shadow-md text-center ${msg.uid === user.uid ? 'bg-blue-100 justify-self-end' : 'bg-gray-300 justify-self-start'}`}>
            <div className="flex gap-3">
          <img className="h-10 w-10 rounded-full" src={msg.photoUrl}/>
            <p className="mt-2">{msg.text}</p>
            </div>
          </div>
          
        ))}
      </div>
      <form onSubmit={handleSendMessage} className="flex">
        <input
          type="text"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          className="flex-grow p-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
          placeholder="Type your message"
        />
        <button
          type="submit"
          className="ml-2 bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600 transition"
        >
          Send
        </button>
      </form>
      </div>

    </div>
  );
};

export default Community;
