import { useState, useEffect, useRef } from "react";
import axios from "axios";
import { FaRobot, FaPaperPlane, FaCommentDots } from "react-icons/fa";

const Chatbot = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([
    { role: "bot", content: "Hello! Ask me anything about Abderrahmane." }
  ]);
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);
  const messagesEndRef = useRef(null);

  // Replace with your Wit.ai access token
  const WIT_API_KEY = import.meta.env.VITE_WIT_API_KEY; 

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  const sendMessage = async () => {
    if (!input.trim()) return;

    const newMessages = [...messages, { role: "user", content: input }];
    setMessages(newMessages);
    setInput("");
    setLoading(true);

    try {
      // Call Wit.ai API to process the user message
      const response = await axios.get("https://api.wit.ai/message", {
        params: {
          v: "20230331", // API version
          q: input, // The user's input
        },
        headers: {
          Authorization: `Bearer ${WIT_API_KEY}`,
        },
      });

      // Process the Wit.ai response and generate a reply
      const witResponse = response.data;
      const botReply = getBotReply(witResponse); // Extract or customize the bot's response

      setMessages([...newMessages, { role: "bot", content: botReply }]);
    } catch (error) {
      console.error("Error calling Wit.ai:", error);
      setMessages([
        ...newMessages,
        { role: "bot", content: "Oops! Something went wrong. Try again later." },
      ]);
    }
    setLoading(false);
  };

  // Customize the bot's response based on the Wit.ai response
  const getBotReply = (witResponse) => {
    // Check if Wit.ai returned any entities or intents
    if (witResponse.entities && witResponse.entities.intent) {
      const intent = witResponse.entities.intent[0].value;

      // Example intents you might have set up in Wit.ai
      if (intent === "greet") {
        return "Hello! How can I help you today?";
      } else if (intent === "ask_about_abderrahmane") {
        return "Abderrahmane is a software engineer.";
      } else if (intent === "ask_for_help") {
        return "Sure! How can I assist you?";
      }
    }

    // Default response if no relevant intent is matched
    return "I'm not sure how to answer that. Can you rephrase?";
  };

  return (
    <div className="fixed bottom-4 right-4 z-[10000] flex flex-col items-end">
      {!isOpen && (
        <button
          onClick={() => setIsOpen(true)}
          className="z-[10000] bg-gray-800 text-white p-3 rounded-full shadow-lg hover:bg-gray-600"
        >
          <FaCommentDots size={24} />
        </button>
      )}

      {isOpen && (
        <div className="w-80 z-[10000] bg-gray-700 rounded-lg shadow-lg p-4 flex flex-col">
          <div className="flex items-center justify-between pb-2 border-b">
            <h2 className="text-lg text-white font-semibold flex items-center">
              <FaRobot className="mr-2" /> AI Chatbot
            </h2>
            <button onClick={() => setIsOpen(false)} className="text-white font-bold">
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
