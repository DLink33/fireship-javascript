import * as dotenv from "dotenv";
dotenv.config();

import express from "express";
import cors from "cors";
import OpenAI from "openai";
import path from "path";
import fs from "fs";

const server = express();
server.use(cors());
server.use(express.json());

const MOCK_MODE = process.env.MOCK_MODE === "1";
console.debug(MOCK_MODE);

const client = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY ?? process.env.OPENAI,
});

server.post("/dream", async (req, res) => {
  try {
    console.debug("content-type: ", req.headers["content-type"]);
    console.debug("raw body: ", req.body);

    const prompt = req.body?.prompt;
    if (typeof prompt !== "string" || prompt.trim() === "") {
      return res.status(400).json({ error: "Missing prompt" });
    }

    let b64;
    let mime_type;

    if (MOCK_MODE) {
      // return cute image of Rho
      const imgPath = path.resolve("./assets/imgs/rho.jpg");
      b64 = fs.readFileSync(imgPath).toString("base64");
      mime_type = "image/jpg";
    } else {
      // perform the API request
      const img = await client.images.generate({
        model: "gpt-image-1",
        prompt,
        size: "1024x1024",
        output_format: "png",
        // quality: "high",
      });

      b64 = img.data?.[0]?.b64_json;
      mime_type = "image/png";
    }

    if (!b64) return res.status(502).json({ error: "No image returned" });

    return res.json({
      image: `data:${mime_type};base64,${b64}`,
      mocked: MOCK_MODE,
      promptEcho: prompt,
    });
  } catch (err) {
    console.error(err);
    return res.status(500).json({ error: "Image generation failed" });
  }
});

server.listen(8080, () => {
  console.log("Making art on http://localhost:8080/dream...");
});
