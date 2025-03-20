/* eslint-disable no-undef */

const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");
const fs = require("fs");
const { GoogleGenerativeAI } = require("@google/generative-ai");

dotenv.config();

const app = express();
const port = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY);

// Load portfolio data
const portfolioData = JSON.parse(fs.readFileSync("portfolio_data.json", "utf8"));

// Predefined context about Abderrahmane
// const personalInfo = `You are an AI assistant that knows about Abderrahmane Salmi.
// Abderrahmane is a software engineer, the president of the Club Génie Informatique, 
// and the founder of Arcade Nexus. He specializes in web development (React, Spring Boot, MySQL), 
// AI, e-commerce solutions, and mobile apps. He has developed projects like a 3D portfolio, 
// an e-learning app (LearnSpace), and a cryptocurrency trading platform. 
// He also has expertise in ASP.NET, Salesforce, and Symfony.
// If asked about Abderrahmane, respond as if you are well-informed about his work.`;

const personalInfo = `
Abderrahmane Salmi is a skilled software engineering student at the national school of applied sciences of Oujda (ENSAO). 

He is also the president of Club Génie Informatique and has worked on 
several projects, including:
- A 3D portfolio using React and Three.js.
- An e-learning app called LearnSpace, built for Android.
- A cryptocurrency trading platform with an integrated AI chatbot.
- A MERN e-commerce website with translation options, theme switching, and cookie management.
- A Symfony-based web application for partnership management.
- A Spring Boot and React-based e-commerce platform allowing users to create online stores.
- A Spring Boot and React-based Hotel Management & booking System.

His expertise includes React, Spring Boot, MySQL, ASP.NET, Salesforce, Symfony, and AI chatbots.
He also uses Tailwind, Redux, and other modern frameworks in his projects.

When asked about Abderrahmane Salmi or his work, respond based on this information.
`;

// Inject this context into every request


// Test route
app.get("/", (req, res) => {
  res.send("Welcome to the Gemini AI Chatbot API!");
});

// Chatbot API
app.post("/chat", async (req, res) => {
  try {
    const { message } = req.body;

    if (!message) {
      return res.status(400).json({ error: "Message is required" });
    }

    console.log("Received message:", message);

    const model = genAI.getGenerativeModel({ model: "gemini-1.5-pro" });

    // Append personal info to the user's message
    const prompt = `${personalInfo}\n\nUser: ${message}`;

    const result = await model.generateContent({ contents: [{ role: "user", parts: [{ text: prompt }] }] });

    if (!result || !result.response) {
      throw new Error("Invalid response from AI model");
    }

    const response = result.response.text();
    console.log("Processed response:", response);

    res.json({ reply: response });

  } catch (error) {
    console.error("Error:", error);
    res.status(500).json({ error: error.message || "Internal Server Error" });
  }
});

// console.log("GEMINI_API_KEY:", process.env.GEMINI_API_KEY);

// Start the server
app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});
