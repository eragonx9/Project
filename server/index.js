const express = require('express');
const app = express();
const port = process.env.PORT || 5000;
const cors = require('cors');

app.use(cors());
app.use(express.json());

// MongoDB
const { MongoClient, ServerApiVersion, ObjectId } = require('mongodb');
const uri = "mongodb+srv://21ucs195:eragonx9@cluster0.zb8lmek.mongodb.net/?retryWrites=true&w=majority";

// Create a MongoClient with a MongoClientOptions object to set the Stable API version
const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  },
});

// Connect the client to the server (optional starting in v4.7)
async function connectToMongo() {
  await client.connect();
  console.log("Connected to MongoDB!");

  // Ensure that the Noticeboard collection is created after the connection is established
  const Noticeboard = client.db("Noticeboard").collection("notices");

  //  Feedback collection is created after the connection is established
  const Feedback = client.db("Feedback").collection("feedback");

  const VenueBookings = client.db("VenueBookings").collection("bookings");

// Define the route after the connection is established
app.post("/add-booking", async (req, res) => {
  try {
    const { time } = req.body;

    // Check for valid booking time
    if (isNaN(time) || time < 1 || time > 10) {
      return res.status(400).json({ error: 'Invalid booking time' });
    }

    // Check if the time is already booked
    const existingBooking = await VenueBookings.findOne({ time });
    if (existingBooking) {
      return res.status(400).json({ error: 'Hall is already booked' });
    }

    // Add the new booking to the collection
    const newBooking = { time };
    const result = await VenueBookings.insertOne(newBooking);
    res.json(result);
  } catch (error) {
    console.error('Error handling POST request to /add-booking:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

app.get("/all-bookings", async (req, res) => {
  try {
    const allBookings = await VenueBookings.find().toArray();
    res.json(allBookings);
  } catch (error) {
    console.error('Error fetching all bookings:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

app.delete("/cancel-booking/:id", async (req, res) => {
  try {
    const id = req.params.id;

    // Use the findOneAndDelete method to find and delete the booking
    const result = await VenueBookings.findOneAndDelete({ _id: new ObjectId(id) });

    if (result.value) {
      // Successfully canceled the booking
      res.status(204).end();
    } else {
      // Booking with the given ID not found
      res.status(404).json({ error: 'Booking not found' });
    }
  } catch (error) {
    console.error('Error handling DELETE request to /cancel-booking:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});



























  // Define the route after the connection is established
  app.post("/addnotice", async (req, res) => {
    try {
      const data = req.body;
      const result = await Noticeboard.insertOne(data);
      res.json(result);
    } catch (error) {
      console.error('Error handling POST request to /addnotice:', error);
      res.status(500).json({ error: 'Internal Server Error' });
    }
  });

  app.get("/all-notices", async (req, res) => {
    const notice = Noticeboard.find();
    const result = await notice.toArray();
    res.send(result);
  });

  app.patch("/edit-notice/:id", async (req, res) => {
    const id = req.params.id;
    const editnotice = req.body;
    const filter = { _id: new ObjectId(id) };
    const options = { upsert: true };

    const updateDoc = {
      $set: {
        ...editnotice,
      },
    };
    const result = await Noticeboard.updateOne(filter, updateDoc, options);
    res.send(result);
  });

  app.delete("/delete-notice/:id", async (req, res) => {
    const id = req.params.id;
    const filter = { _id: new ObjectId(id) };
    const result = Noticeboard.deleteOne(filter);
    res.send(result);
  });

  app.post("/addfeedback", async (req, res) => {
    try {
      const { name, feedback } = req.body;
      const result = await Feedback.insertOne({ name, feedback });
      res.json(result);
    } catch (error) {
      console.error('Error handling POST request to /addfeedback:', error);
      res.status(500).json({ error: 'Internal Server Error' });
    }
  });

  app.get("/last-three-feedbacks", async (req, res) => {
    try {
      const lastThreeFeedbacks = await Feedback.find()
        .sort({ _id: -1 })
        .limit(3)
        .toArray();
      res.json(lastThreeFeedbacks);
    } catch (error) {
      console.error('Error fetching last three feedbacks:', error);
      res.status(500).json({ error: 'Internal Server Error' });
    }
  });
}

connectToMongo().catch(console.dir);

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
