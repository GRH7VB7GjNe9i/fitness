import React, { useState, useEffect } from "react";
import { collection, addDoc, getDocs, query, where, onSnapshot, setDoc, doc, getDoc, orderBy } from "firebase/firestore";
import { db, auth } from "./firebase";

const Message = () => {
  const [users, setUsers] = useState([]);
  const [currentUser, setCurrentUser] = useState(null);
  const [selectedUser, setSelectedUser] = useState(null);
  const [message, setMessage] = useState("");
  const [chat, setChat] = useState([]);

  // Check if current user exists in Firestore, if not, create a new document
  useEffect(() => {
    const createOrFetchCurrentUser = async () => {
      if (auth.currentUser) {
        const userRef = doc(db, "users", auth.currentUser.uid);
        const userSnap = await getDoc(userRef);

        if (!userSnap.exists()) {
          // If user doesn't exist, create new user in Firestore
          await setDoc(userRef, {
            uid: auth.currentUser.uid,
            displayName: auth.currentUser.displayName,
            email: auth.currentUser.email,
            photoURL: auth.currentUser.photoURL,
          });
          console.log("User added to Firestore:", auth.currentUser.displayName);
        }

        // Set the current user
        setCurrentUser({
          id: auth.currentUser.uid,
          displayName: auth.currentUser.displayName,
          email: auth.currentUser.email,
          photoURL: auth.currentUser.photoURL,
        });
      }
    };

    createOrFetchCurrentUser();
  }, []);

  // Fetch all users from Firestore
  useEffect(() => {
    const fetchUsers = async () => {
      const usersCollection = await getDocs(collection(db, "users"));
      const userList = usersCollection.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));
      setUsers(userList);
    };
    fetchUsers();
  }, []);

  // Listen for real-time updates of messages between currentUser and selectedUser
  useEffect(() => {
    if (currentUser && selectedUser) {
      const chatQuery = query(
        collection(db, "personalMessages"),
        where("sender", "in", [currentUser.id, selectedUser.uid]),
        where("recipient", "in", [currentUser.id, selectedUser.uid]),
        orderBy("timestamp", "asc")
      );

      const unsubscribe = onSnapshot(chatQuery, (snapshot) => {
        const messages = snapshot.docs.map((doc) => doc.data());
        setChat(messages);
      });
      return () => unsubscribe();
    }
  }, [currentUser, selectedUser]);

  // Function to send a message to the selected user
  const sendMessage = async () => {
    if (currentUser && selectedUser && message) {
      await addDoc(collection(db, "personalMessages"), {
        sender: currentUser.id,
        recipient: selectedUser.uid,
        text: message,
        timestamp: new Date(),
      });
      setMessage(""); // Clear the input after sending
    }
  };

  return (
    <div className="flex bg-zinc-100 h-screen">
      <div className="bg-zinc-200 w-68 border-l">

      
    <div className="p-4">
      <h1 className="text-xl font-bold mb-10">Chats</h1>
 
      {/* Select a user to chat with */}
      {currentUser && (
        <div className="mb-4">    

          <ul>
            {users
              .filter((user) => user.uid !== currentUser.id) // Avoid showing the current user in the list
              .map((user) => (
                <li
                  key={user.uid}
                  onClick={() => setSelectedUser(user)}
                  className={`cursor-pointer ${selectedUser?.uid === user.uid ? "font-bold" : ""}`} // Optional chaining on selectedUser
                >
                  <div className="flex items-center w-60 h-15 bg-zinc-100 mb-2 hover:bg-zinc-300 rounded-md shadow-md">
                    {user.photoURL && <img src={user.photoURL} alt="" className="w-10 h-10 rounded-full ml-3 mr-4 hover: hover:w-15" />}
                    {user.displayName}
  
                </div>
                 
                </li>
              ))}
          </ul>
        </div>
      )}
</div>

</div>
<div className="bg-zinc-100 border-l">
      {selectedUser && (
        <div className="">
          <div className="flex items-center gap-5 py-5 border-b hover:bg-zinc-300  ">
            <img className="h-10 w-10 rounded-full ml-5" src={selectedUser.photoURL} alt="" />
          <h2>{selectedUser.displayName}</h2>
          </div>
          <div className="bg-zinc-100 h-120 w-200 rounded-md  p-4 mb-4 overflow-y-auto scroll-smooth border-b">
            {chat.map((msg, index) => (
              <div key={index} className={`${msg.sender === currentUser.id ? "flex justify-self-end" : "flex justify-self-start"}`}>
                <div className="h-5 mt-9 shadow-xl ">
                <p className={`inline-block px-4 py-2 rounded-3xl text-center ${
                    msg.sender === currentUser.id ? "bg-gray-300" : "bg-blue-200"
                  }`} >
                  {msg.text}
                  
                </p>
                </div>
              </div>
            ))}
          </div>
          <div className="flex gap-10 px-5">
          <input
            type="text"
            placeholder="Type a message"
            value={message}
            className="p-2 border w-full mb-2 rounded-md"
            onChange={(e) => setMessage(e.target.value)}
          />
          <button onClick={sendMessage} className="p-2 bg-green-500 text-white rounded-xl">
            Send
          </button>
          </div>
        </div>
      )}
      </div>
      
    </div>
  );
};

export default Message;
