require('dotenv').config();
const mongoose = require('mongoose');
const express = require("express");
var cors = require('cors');
const PORT = process.env.PORT || 3001;
const app = express();
const sampleData = require('./sampleData');
const Event = require('./models/eventModel')

app.use(cors());

//middleware
app.use(express.json());

app.get('/', (req, res) => {
  res.send("Hello from Backend")
})

app.get('/events', async(req, res) => {
  console.log('hello');
  console.log('data', sampleData);
  try {
    const events = await Event.find({}).sort({createdAt: -1});
    res.status(200).json(events);
  } catch(error) {
    res.send(400).json({error: error.message})
  }

});

app.post('/events', async(req, res) => {
  console.log('POST ROUTE');
  const {eventId, hostName, eventTitle, eventLocation, eventDateTime, capacity} = req.body
  const attendees = 0;
  try{
    const event = await Event.create({eventId, hostName, eventTitle, eventLocation, eventDateTime, attendees, capacity})
    res.status(200).json(event)
  } catch(error) {
    res.status(400).json({error: error.message})
  }
})

app.patch('/events/:eventId', async(req, res) => {

  const {eventId} = req.params;
  const result = await Event.find({eventId:eventId });
  const updateAttendee = result[0].attendees + 1;

  try{
    const event = await Event.findOneAndUpdate({eventId}, {
      attendees: updateAttendee
    });
    res.status(200).json({event});

  } catch(error) {
    res.status(400).json({error: error.message})
  }

})

app.post('/signupHost', (req, res) => {
  console.log('Signup Host');
  res.send('success');
})

//connect to db
mongoose.connect(process.env.MONG_URI)
  .then(() => {
    console.log('connected to db')
    //listen for requests
    app.listen(PORT, () => {
      console.log(`server listening on ${PORT}`);
    })
  })
  .catch((error) => {
    console.log('Error connecting to MongoDB')
  })

