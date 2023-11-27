const express = require('express');
const app = express();
const port = process.env.PORT || 5000;
const cors = require('cors');

app.use(cors());
app.use(express.json());
app.get('/', (req, res) => {
  res.send('Hello World!');
});

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

  app.get("/all-notices",async(req,res)=>{
    const notice= Noticeboard.find();
    const result= await notice.toArray();
    res.send(result);
  });
  app.patch("/edit-notice/:id",async(req,res)=>{
    const id=req.params.id;
    const editnotice= req.body;
    const filter = { _id: new ObjectId(id) };
    const options = { upsert: true };

    const updateDoc = {
      $set: {
        ...editnotice
      }
    }
    const result= await Noticeboard.updateOne(filter,updateDoc,options);
    res.send(result);
  });

  app.delete("/delete-notice/:id",async(req,res)=>{
    const id=req.params.id;
    const filter = { _id: new ObjectId(id) };
    const result= Noticeboard.deleteOne(filter);
    res.send(result);
  })

}
  

connectToMongo().catch(console.dir);

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
