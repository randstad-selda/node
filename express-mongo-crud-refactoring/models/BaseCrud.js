import { ObjectId } from "mongodb";
import MongoConnect from "../mongo-connection.js";

export default class BaseCrud {
  collection;

  index() {
    return MongoConnect.DB.collection(this.collection).find({}).toArray();
  }

  show(id) {
    return MongoConnect.DB.collection(this.collection).findOne({
      _id: new ObjectId(id),
    });
  }
  create(payload) {
    return MongoConnect.DB.collection(this.collection).insertOne(payload);
  }
  edit(id, payload) {}
  delete(id) {}
}
