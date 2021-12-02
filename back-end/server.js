const express = require('express');
const bodyParser = require("body-parser");

const app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
  extended: false
}));

const mongoose = require('mongoose');
// connect to the database
mongoose.connect('mongodb://localhost:27017/horoscope', {
  useNewUrlParser: true
});
// Create a scheme for items in the museum: a title and a path to an image.
const horoscopeSchema = new mongoose.Schema({
  date: String,
  sign: String,
  color: String,
  lucky_number: String,
  lucky_time: String,
  description: String,
});
// Create a model for items in the museum.
const Horoscope = mongoose.model('Horoscope', horoscopeSchema);

// Create a new item in the museum: takes a title and a path to an image.
app.post('/api/items', async (req, res) => {
  console.log(req);
  const item = new Horoscope({
    date: req.body.date,
    color: req.body.color,
    lucky_number: req.body.lucky_number,
    lucky_time: req.body.lucky_time,
    description: req.body.description,
    sign: req.body.sign,
  });
  try {
    await item.save();
    res.send(item);
  } catch (error) {
    console.log(error);
    res.sendStatus(500);
  }
});

// Get a list of all of the items in the museum.
app.get('/api/items', async (req, res) => {
  try {
    let items = await Horoscope.find();
    res.send(items);
  } catch (error) {
    console.log(error);
    res.sendStatus(500);
  }
});

app.delete('/api/items/:id', async (req, res) => {
  try {
    await Horoscope.deleteOne({
      _id: req.params.id
    });
    res.sendStatus(200);
  } catch (error) {
    console.log(error);
    res.sendStatus(500);
  }
});

app.put('/api/items/:id', async (req, res) => {
  try {
    let item = await Item.findOne({
      _id: req.params.id
    });
    item.date = req.body.date;
    item.sign = req.body.sign;
    item.color = req.body.color;
    item.lucky_number = req.body.lucky_number;
    item.lucky_time = req.body.lucky_time;
    item.description = req.body.description;
    item.save();
    res.sendStatus(200);
  } catch (error) {
    console.log(error);
    res.sendStatus(500);
  }
});

app.listen(3000, () => console.log('Server listening on port 3000!'));
