import React, { useState,useEffect, useInsertionEffect } from 'react'
import { getDatabase, ref, push, set, onChildAdded } from "firebase/database";




const n = prompt('enter your name to get started')
function ChatApp() {
  
  const db = getDatabase();
  const[name,setName] =useState(n);
  const[chats,setChats] = useState([]);
  const[message,setMessage] = useState();
  const chatListRef = ref(db, 'chats');

  useInsertionEffect(() => {onChildAdded(chatListRef,(data)=>{
    const newChat = data.val();
    if (!chats.some(chats => chats.name === newChat.name && chats.message === newChat.message)) {
      setChats(chats => [...chats,newChat]);
    }
    });
  },[]);

  const sendMessage = () =>{
    const chatRef = push(chatListRef);
    set(chatRef, {
        name,message
    });

    // const c = [...chats];
    // c.push({name,message})  
    // setChats(c);
    document.getElementById('msgInput').value = "";
  }

  

  return (
    
    <div className="flex flex-col bg-slate-400 rounded-lg m-auto p-auto py-8  mt-10 w-[50vw]" >
        <label className = "text-lg font-medium m-auto">Logged in as: <strong>{name}</strong></label>
        <div id = "msg-comtainer" className="flex flex-col w-[40vw] h-[60vh]  m-auto overflow-y-auto mt-6 rounded-lg shadow-md shadow-black">
                {chats.map(c => <span className={`${c.name ===name? 'rMsg':'lMsg'} `}>
                    <strong>{c.name}: </strong>
                    {c.message}
                </span>)}
        </div>
                <form action="#" className="m-auto mt-5">
                    <input id="msgInput" className=" h-14 border-2 border-blue-600 w-[35vw] rounded-lg px-3 outline-none text-black bg-inherit" placeholder="Enter a message" onInput={e=>setMessage(e.target.value)}></input>
                    <button type="submit" className = "bg-blue-500 px-3 py-4 rounded-xl font-medium text-white hover:bg-blue-600" onClick={e=>sendMessage()}>Send </button>
                </form>
    </div>
  )
}

export default ChatApp
