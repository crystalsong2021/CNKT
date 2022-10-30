const express = require("express");
var cors = require('cors');
const PORT = process.env.PORT || 3001;
const app = express();
const sampleData = require('./sampleData');

app.use(cors());
app.get('/events', (req, res)=> {
  console.log('hello');
  console.log('data', sampleData);
  res.send(sampleData)
})

app.listen(PORT, () => {
  console.log(`server listening on ${PORT}`);
})