import { useState, useEffect, useRef } from "react";
import axios from "axios";
// import { GoogleGenerativeAI } from "@google/generative-ai";
import { FaRobot, FaPaperPlane, FaCommentDots } from "react-icons/fa";

const Chatbot = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([
    { role: "bot", content: "Hello! Ask me anything about Mr. Abderrahmane." },
  ]);
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);
  const messagesEndRef = useRef(null);

//   const API_KEY = import.meta.env.VITE_GEMINI_API_KEY || "";
//   const genAI = new GoogleGenerativeAI(API_KEY);

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  const sendMessage = async () => {
    if (!input.trim() || loading) return;
  
    const newMessages = [...messages, { role: "user", content: input }];
    setMessages(newMessages);
    setInput("");
    setLoading(true);
  
    try {
      const response = await axios.post("http://localhost:5000/chat", { message: input });
  
      if (!response.data) {
        throw new Error("No response from the server");
      }
  
      setMessages([...newMessages, { role: "bot", content: response.data.reply }]);
    } catch (error) {
      console.error("Error:", error);
      setMessages([
        ...newMessages,
        { role: "bot", content: "Oops! Something went wrong. Try again later." },
      ]);
    } finally {
      setLoading(false);
    }
  };
  

  return (
    <div className="fixed bottom-4 right-4 z-[10000] flex flex-col items-end">
      {!isOpen && (
        <button
          onClick={() => setIsOpen(true)}
          className="z-[10000] bg-gray-800 text-white p-3 rounded-full shadow-lg hover:bg-gray-600"
          aria-label="Open chatbot"
        >
          <FaCommentDots size={24} />
        </button>
      )}

      {isOpen && (
        <div
          className={`w-80 z-[10000] bg-gray-700 rounded-lg shadow-lg p-4 flex flex-col transition-all duration-300 ${
            isOpen ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
          }`}
        >
          <div className="flex items-center justify-between pb-2 border-b">
            <h2 className="text-lg text-white font-semibold flex items-center">
              <FaRobot className="mr-2" /> AI Chatbot
            </h2>
            <button
              onClick={() => setIsOpen(false)}
              className="text-white font-bold"
            >
              X
            </button>
          </div>

          <div className="flex-1 z-[10000] overflow-y-auto max-h-60 p-2 space-y-2">
            {messages.map((msg, index) => (
              <div
                key={index}
                className={`p-2 rounded-md ${
                  msg.role === "user"
                    ? "bg-blue-500 text-white self-end"
                    : "bg-gray-200 text-black self-start"
                }`}
              >
                {msg.content}
              </div>
            ))}
            {loading && <p className="text-gray-500">AI is typing...</p>}
            <div ref={messagesEndRef} />
          </div>

          <div className="flex z-[10000] items-center border-t pt-2">
            <input
              type="text"
              className="flex-1 p-2 border rounded-lg focus:outline-none"
              placeholder="Ask me anything..."
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyUp={(e) => e.key === "Enter" && sendMessage()}
            />
            <button
              onClick={sendMessage}
              className="ml-2 bg-blue-600 text-white p-2 rounded-lg hover:bg-blue-700"
            >
              <FaPaperPlane />
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Chatbot;