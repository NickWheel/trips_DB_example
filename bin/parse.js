const trips = require('../trips.json');
const TripModel = require('../models/trip');
const mongoose = require('mongoose');

mongoose.connect('mongodb+srv://admin:1111@cluster0-7cnbh.mongodb.net/test?retryWrites=true&w=majority', {
  useNewUrlParser: true,
  useUnifiedTopology: true
});
const db = mongoose.connection;
db.once('open', (err)=>{
  if(err) throw err;
  console.log('Connected to db!');
});


trips.forEach((elem)=>{
    const trip = TripModel(elem);
    trip.save((err)=>{
        if (err) throw err;
    });
});

TripModel.find({fromName: 'Kyiv, Ukraine'})
.then(data=> console.log(data))
.catch((err)=>{if(err) {throw err}});