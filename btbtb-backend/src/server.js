import express from "express";
import { MongoClient } from "mongodb";
import { v4 as uuidv4 } from "uuid";

const app = express();
app.use(express.json());

app.get("/api/booking/", async (req, res) => {
  const client = new MongoClient("mongodb://127.0.0.1:27017");

  await client.connect();

  const db = client.db("mongo-db-data");

  const booking = await db.collection("bookings").find({}).toArray();

  if (booking) {
    res.json(booking);
  } else {
    res.sendStatus(404);
  }
});

app.get("/api/bookings/:id", async (req, res) => {
  const { id } = req.params;

  const client = new MongoClient("mongodb://127.0.0.1:27017");

  await client.connect();

  const db = client.db("mongo-db-data");

  const booking = await db.collection("bookings").findOne({ id });

  if (booking) {
    res.json(booking);
  } else {
    res.sendStatus(404);
  }
});

app.post("/api/bookings/:id/comments", async (req, res) => {
  const { id } = req.params;
  const { postedBy, text } = req.body;

  const client = new MongoClient("mongodb://127.0.0.1:27017");

  await client.connect();

  const db = client.db("mongo-db-data");

  await db.collection("bookings").updateOne(
    { id },
    {
      $push: { comments: { postedBy, text } },
    }
  );

  const booking = await db.collection("bookings").findOne({ id });

  if (booking) {
    res.send(booking.comments);
  } else {
    res.send("That booking doesn't exist!");
  }
});

app.post("/api/bookings/:id/", async (req, res) => {
  const { id } = req.params;
  const { postedBy, text } = req.body;

  const client = new MongoClient("mongodb://127.0.0.1:27017");

  await client.connect();

  const db = client.db("mongo-db-data");

  await db.collection("bookings").insertOne();

  const booking = await db.collection("bookings").findOne({ id });

  if (booking) {
    res.send(booking.comments);
  } else {
    res.send("That booking doesn't exist!");
  }
});

app.listen(8000, () => {
  console.log("Server is listening on port 8000");
});
