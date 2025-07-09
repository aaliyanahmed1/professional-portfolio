import type { VercelRequest, VercelResponse } from '@vercel/node';
import { insertContactMessageSchema } from '../shared/schema';
import { z } from 'zod';

// In-memory storage for demo purposes
// In production, you should use a proper database
let contactMessages: any[] = [];
let messageId = 1;

export default async function handler(
  req: VercelRequest,
  res: VercelResponse
) {
  // Enable CORS
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');

  // Handle preflight requests
  if (req.method === 'OPTIONS') {
    res.status(200).end();
    return;
  }

  if (req.method === 'POST') {
    try {
      const validatedData = insertContactMessageSchema.parse(req.body);
      const message = {
        ...validatedData,
        id: messageId++,
        createdAt: new Date(),
      };
      
      contactMessages.push(message);
      
      // In a real application, you would send an email here
      console.log("New contact message:", message);
      
      res.status(200).json({ success: true, message: "Message sent successfully!" });
    } catch (error) {
      if (error instanceof z.ZodError) {
        res.status(400).json({ error: "Invalid form data", details: error.errors });
      } else {
        res.status(500).json({ error: "Failed to send message" });
      }
    }
  } else if (req.method === 'GET') {
    try {
      res.status(200).json(contactMessages);
    } catch (error) {
      res.status(500).json({ error: "Failed to fetch messages" });
    }
  } else {
    res.status(405).json({ error: 'Method not allowed' });
  }
} 