import express from "express";
import { db, connectToDb } from "./db.js";
let articlesInfo = [
  {
    name: "learn-react",
    upvotes: 0,
    comments: [],
  },
  {
    name: "learn-node",
    upvotes: 0,
    comments: [],
  },
  {
    name: "mongodb",
    upvotes: 0,
    comments: [],
  },
];
const app = express();
app.use(express.json());

app.post("/hello", (req, res) => {
  console.log(req.body);
  res.send(`Hello ${req.body.name}!`);
});

app.get("/hello/:name", (req, res) => {
  const { name } = req.params;
  res.send(`Hello ${name}!!`);
});

app.get("/api/articles/:name", async (req, res) => {
  const { name } = req.params;

  const article = await db.collection("articles").findOne({ name });

  if (article) {
    res.json(article);
  } else {
    res.sendStatus(404).send("Articles not found!");
  }
});
app.put("/api/articles/:name/upvote", async (req, res) => {
  const { name } = req.params;
  // const article = articlesInfo.find((a) => a.name === name);

  await db.collection("articles").updateOne(
    { name },
    {
      $inc: { upvotes: 1 },
    }
  );
  const article = await db.collection("articles").findOne({ name });

  if (article) {
    // article.upvotes += 1;
    res.send(`The ${name} article now has ${article.upvotes} upvotes!!!`);
  } else {
    res.send("The article doesn't exist");
  }
});

app.post("/api/articles/:name/comments", async (req, res) => {
  const { name } = req.params;
  const { postedBy, text } = req.body;
  // const article = articlesInfo.find((a) => a.name === name);

  await db.collection("articles").updateOne(
    { name },
    {
      $push: { comments: { postedBy, text } },
    }
  );

  const article = await db.collection("articles").findOne({ name });

  if (article) {
    // article.comments.push({ postedBy, text });
    res.send(article.comments);
  } else {
    res.send("The article doesn't exist");
  }
});

connectToDb(() => {
  console.log("Successfully connected to database!");
  app.listen(8000, () => {
    console.log("Server is listening on port 8000");
  });
});
