import * as dotenv from "dotenv";
dotenv.config();

import express from "express";
import cors from "cors";
import OpenAI from "openai";

const server = express();
server.use(cors());
server.use(express.json());

const client = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY ?? process.env.OPENAI,
});

server.post("/dream", async (req, res) => {
  try {
    const prompt = req.body?.prompt;
    if (!prompt) return res.status(400).json({ error: "Missing prompt" });

    const img = await client.images.generate({
      model: "gpt-image-1.5", // or "gpt-image-1-mini"
      prompt,
      n: 1,
      size: "1024x1024",
      output_format: "png", // optional (defaults to png)
      quality: "high", // optional (auto/high/medium/low)
    });

    const b64 = img.data?.[0]?.b64_json;
    if (!b64) return res.status(500).json({ error: "No image returned" });

    // Send a browser-friendly data URL
    res.json({ image: `data:image/png;base64,${b64}` });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Imagevkgfk generation failed" });
  }
});

server.listen(8080, () => {
  console.log("Making art on http://localhost:8080/dream...");
});
