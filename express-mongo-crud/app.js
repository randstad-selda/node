import "dotenv/config";
import express from "express";
import { MongoClient, ServerApiVersion, ObjectId } from "mongodb";

const app = express();
let DB, articles;

const uri = `mongodb+srv://${process.env.DB_USERNAME}:${process.env.DB_PASSWORD}@selda.cgeoj1o.mongodb.net/?retryWrites=true&w=majority`;
const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  },
});

// Create
app.get("/new-article", async (req, res) => {
  //   const newArticle = {
  //     title: "Prova inserimento articolo",
  //     content: "Articolo aggiunto dall'app",
  //   };
  //   const result = await articles.insertOne(newArticle);
  const newArticles = [
    {
      title: "Prova inserimento articoli multipli",
      content: "Articolo aggiunto dall'app con insertMany",
    },
    {
      title: "Prova inserimento articoli multipli",
      content: "Articolo aggiunto dall'app con insertMany",
    },
  ];
  const result = await articles.insertMany(newArticles);
  console.log(result);
  if (result.acknowledged) res.send("Nuovo articolo inserito correttamente");
});
// Read
app.get("/article", async (req, res) => {
  //   let listArticles = await articles.find({}).toArray(); // select * from articles
  //   await listArticles.forEach((article) => {
  //     console.log(article);
  //   });
  const article = await articles.findOne({ title: "Prova" });
  console.log(article);

  res.send();
});
// Update
app.get("/edit-article", async (req, res) => {
  const filter = { _id: new ObjectId("64a67d84670662d9ed5a5360") };
  const result = await articles.updateOne(filter, {
    $unset: { tag: "" },
  });
  console.log(result);

  res.send();
});
// Delete
app.get("/delete-article", async (req, res) => {
  const result = await articles.deleteOne({
    _id: new ObjectId("64a67e28670662d9ed5a5361"),
  });

  console.log(result);
  res.send();
});

async function run() {
  await client.connect();
  app.listen(3000, () => console.log("server in ascolto sulla porta 3000"));
  DB = client.db(process.env.DB_NAME);
  articles = DB.collection("articles");
}
run().catch(console.dir);
