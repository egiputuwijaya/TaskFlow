"use client";
import { useState, useEffect } from "react";
import * as motion from "motion/react-client";
import { MdSend } from "react-icons/md";

export default function ChatBox() {
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState("");
  const [userName, setUserName] = useState(null);

  useEffect(() => {
    async function fetchUser() {
      try {
        const res = await fetch("/api/user", { method: "GET" });
        if (!res.ok) throw new Error("Failed to fetch user");
        const data = await res.json();
        setUserName(data.user);
      } catch (err) {
        console.error(err);
      }
    }
    fetchUser();
  }, []);

  async function send() {
    const newMsg = { role: "user", content: input };
    const updated = [...messages, newMsg];
    setMessages(updated);
    setInput("");

    const res = await fetch("/api/chat", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ messages: updated }),
    });

    const data = await res.json();
    setMessages([...updated, { role: "assistant", content: data.reply }]);
  }

  return (
    <div className="bg-white text-gray-500 rounded-2xl min-h-screen">
      <div className="flex flex-col justify-center items-center py-5">
        <div className="px-5 py-2 text-2xl rounded-2xl">
          <h1>Welcome, {userName ? userName.name : "Loading..."} 👋</h1>
        </div>

        <p className="text-5xl font-semibold ">How can I help you today?</p>

        <div className="flex space-x-2 mt-5">
          {[0, 0.2, 0.4, 0.6].map((delay, index) => (
            <motion.span
              key={index}
              className="w-3 h-3 bg-gray-500 rounded-full"
              animate={{
                y: [0, -5, 0],
              }}
              transition={{
                duration: 0.6,
                repeat: Infinity,
                ease: "easeInOut",
                delay: delay,
              }}
            />
          ))}
        </div>
      </div>
      <div className="px-3 flex flex-col space-y-4">
        {messages.map((m, i) => (
          <div
            key={i}
            className={`flex ${
              m.role === "assistant" ? "justify-start" : "justify-end"
            }`}
          >
            <div
              className={`px-4 py-2 rounded-2xl max-w-2xl ${
                m.role === "assistant"
                  ? "bg-gray-200 text-gray-900 self-start"
                  : "bg-blue-500 text-white self-end"
              }`}
            >
              {m.content.split("\n").map((line, index) => (
                <p key={index} className="mb-1 leading-relaxed">
                  {line}
                </p>
              ))}
            </div>
          </div>
        ))}
      </div>
      <div className="p-3 flex gap-2">
        <textarea
          value={input}
          onChange={(e) => setInput(e.target.value)}
          className="flex-1 border rounded-full px-3 py-1 resize-none focus:outline-none "
          rows={1}
          placeholder="Type your message..."
        />
        <button
          onClick={send}
          className="bg-blue-500 text-white px-4 py-2 rounded-full hover:bg-blue-600 transition"
        >
          <MdSend className="text-xl text-white" />
        </button>
      </div>
    </div>
  );
}
