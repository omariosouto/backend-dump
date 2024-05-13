import express from "express";
import bodyParser from "body-parser";
import { PrismaClient } from '@prisma/client';

const app = express();

app.use(bodyParser.json());

app.get("/", (req, res) => {
  const db = new PrismaClient();
  (async () => {
    const totalInsertions = await db.post.count();
    console.log(totalInsertions);
  })();
  res.send("Hello World");
});

app.post("/api/mutation", (req, res) => {
  console.log("hit", req.body);
  const body = req.body;
  res.send(body);
});


const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});