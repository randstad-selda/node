import "dotenv/config";
import { EventEmitter } from "node:events";
import { MongoClient, ServerApiVersion } from "mongodb";

export default class MongoConnect extends EventEmitter {
  DB;

  constructor() {
    super();
    const uri = `mongodb+srv://${process.env.DB_USERNAME}:${process.env.DB_PASSWORD}@selda.cgeoj1o.mongodb.net/?retryWrites=true&w=majority`;
    this.client = new MongoClient(uri, {
      serverApi: {
        version: ServerApiVersion.v1,
        strict: true,
        deprecationErrors: true,
      },
    });
  }

  async connect() {
    await this.client.connect();
    console.log("La connessione al server è andata a buon fine");
    MongoConnect.DB = this.client.db(process.env.DB_NAME);
    this.emit("dbConnection");
  }
}
