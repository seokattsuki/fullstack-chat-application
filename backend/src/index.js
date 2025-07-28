import express from 'express';
import authRoutes from "./routes/auth.route.js";
import messageRoutes from "./routes/message.route.js";
import dotenv from 'dotenv';
import { connectDB } from './lib/db.js';
import cookieParser from "cookie-parser";
import cors from "cors";
import { app, server } from "./lib/socket.js";
import path from "path";

dotenv.config();

const PORT = process.env.PORT || 5001;
const __dirname = path.resolve();

// DEBUG: Add route debugging
const originalUse = app.use;
app.use = function(path, ...args) {
  console.log('Registering middleware/route for path:', path);
  try {
    return originalUse.call(this, path, ...args);
  } catch (error) {
    console.error('Error registering route for path:', path, 'Error:', error.message);
    throw error;
  }
};

// Middleware
app.use(express.json({ limit: "10mb" }));
app.use(express.urlencoded({ extended: true, limit: "10mb" }));
app.use(cookieParser());
app.use(cors({
  origin: "http://localhost:5173",
  credentials: true,
}));

// Routes - with try-catch for debugging
console.log('Loading auth routes...');
try {
  app.use("/api/auth", authRoutes);
  console.log('Auth routes loaded successfully');
} catch (error) {
  console.error('Error loading auth routes:', error.message);
  throw error;
}

console.log('Loading message routes...');
try {
  app.use("/api/messages", messageRoutes);
  console.log('Message routes loaded successfully');
} catch (error) {
  console.error('Error loading message routes:', error.message);
  throw error;
}

if(process.env.NODE_ENV === "production"){
  app.use(express.static(path.join(__dirname, "../frontend/dist")));

  // Fix: Use a more specific catch-all pattern
  console.log('Registering catch-all route...');
  try {
    app.get("/*", (req, res) => {
      console.log('Catch-all route hit for:', req.path);
      res.sendFile(path.join(__dirname, "../frontend", "dist", "index.html"));
    });
    console.log('Catch-all route registered successfully');
  } catch (error) {
    console.error('Error registering catch-all route:', error.message);
    throw error;
  }
}

// Start server
server.listen(PORT, () => {
  console.log("Server is running on PORT:", PORT);
  connectDB();
});