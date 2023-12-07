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

  // ... (Your existing imports and setup code)

const VenueBookings = client.db("VenueBookings").collection("venuebookings");

// Define the route after the connection is established
app.post("/submit-venue-booking", async (req, res) => {
  try {
    const { venueNumber } = req.body;

    // Validate the venue number
    if (isNaN(venueNumber) || venueNumber < 1 || venueNumber > 12) {
      return res.status(400).json({ error: 'Please enter a valid venue number between 1 and 12.' });
    }

    // Add the new venue booking to the collection
    const result = await VenueBookings.insertOne({ venueNumber });
    res.json(result);
  } catch (error) {
    console.error('Error handling POST request to /submit-venue-booking:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

app.get("/all-venue-bookings", async (req, res) => {
  try {
    const allVenueBookings = await VenueBookings.find().toArray();
    res.json(allVenueBookings);
  } catch (error) {
    console.error('Error fetching all venue bookings:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

app.delete("/cancel-venue-booking/:id", async (req, res) => {
  try {
    const id = req.params.id;
    const filter = { _id: new ObjectId(id) };

    // Delete the venue booking
    const result = await VenueBookings.deleteOne(filter);
    res.json(result);
  } catch (error) {
    console.error('Error handling DELETE request to /cancel-venue-booking/:id', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

const { ObjectId } = require('bson');

// Add a new route to handle accepting a booking
app.put("/accept-venue-booking/:id", async (req, res) => {
  try {
    const id = req.params.id;

    // Check if id is a valid ObjectId
    if (!ObjectId.isValid(id)) {
      return res.status(400).json({ error: 'Invalid ObjectId' });
    }

    const filter = { _id: new ObjectId(id) };
    const update = { $set: { status: "accepted" } };

    // Update the status of the booking to "accepted"
    const result = await VenueBookings.updateOne(filter, update);
    res.json(result);
  } catch (error) {
    console.error('Error handling PUT request to /accept-venue-booking/:id', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});


// Add a new route to handle rejecting a booking
app.put("/reject-venue-booking/:id", async (req, res) => {
  try {
    const id = req.params.id;
    const filter = { _id: new ObjectId(id) };
    const update = { $set: { status: "rejected" } };

    // Update the status of the booking to "rejected"
    const result = await VenueBookings.updateOne(filter, update);
    res.json(result);
  } catch (error) {
    console.error('Error handling PUT request to /reject-venue-booking/:id', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});














  







const ClubRecruitment = client.db("ClubRecruitment").collection("clubrecruitment");

// Define the route after the connection is established
app.post("/submit-club-recruitment", async (req, res) => {
  try {
    const formData = req.body;

    // Validate the form data (you can add more validation if needed)
    if (!formData.domain || !formData.club || !formData.name || !formData.rollNumber || !formData.contact) {
      return res.status(400).json({ error: 'All fields are required' });
    }

    // Add the new club recruitment data to the collection
    const result = await ClubRecruitment.insertOne(formData);
    res.json(result);
  } catch (error) {
    console.error('Error handling POST request to /submit-club-recruitment:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

app.get("/all-club-recruitments", async (req, res) => {
  try {
    const allClubRecruitments = await ClubRecruitment.find().toArray();
    res.json(allClubRecruitments);
  } catch (error) {
    console.error('Error fetching all club recruitments:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

// Add this route definition after connecting to MongoDB
// Modify the route definition after connecting to MongoDB
app.get("/get-recruitment-data", async (req, res) => {
  try {
    const { club } = req.query;

    // Check if the 'club' query parameter is provided
    if (!club) {
      return res.status(400).json({ error: 'Club parameter is required' });
    }

    // Retrieve recruitment data for the specific club
    const clubRecruitmentData = await ClubRecruitment.find({ club }).toArray();
    res.json(clubRecruitmentData);
  } catch (error) {
    console.error('Error fetching club recruitment data:', error);
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







  const Requisitions = client.db("Requisitions").collection("requisitions");

  app.post("/submit-requisition", async (req, res) => {
    try {
      const { club, eventName, eventDate, amount } = req.body;

      if (!club || !eventName || !eventDate || isNaN(amount)) {
        return res.status(400).json({ error: 'Invalid requisition data' });
      }

      const result = await Requisitions.insertOne({ club, eventName, eventDate, amount });
      res.json(result);
    } catch (error) {
      console.error('Error handling POST request to /submit-requisition:', error);
      res.status(500).json({ error: 'Internal Server Error' });
    }
  });

  app.get("/all-requisitions", async (req, res) => {
    try {
      const allRequisitions = await Requisitions.find().toArray();
      res.json(allRequisitions);
    } catch (error) {
      console.error('Error fetching all requisitions:', error);
      res.status(500).json({ error: 'Internal Server Error' });
    }
  });

  app.delete('/delete-requisition/:id', async (req, res) => {
  
      const id = req.params.id;
      const filter = { _id: new ObjectId(id) };
      const result = Requisitions.deleteOne(filter);
      res.send(result);
    
  });









}

connectToMongo().catch(console.dir);

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
