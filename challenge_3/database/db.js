const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/checkout');
let db = mongoose.connection;

db.once('open', () => {
  console.log('CONNECTED TO MongoDB!');
});
db.on('error', (error) => {
  console.log('FAILED TO CONNECT TO MongoDB: ', error);
});

let checkoutSchema = mongoose.Schema({
  name: String,
  email: String,
  password: String,
  address1: String,
  address2: String,
  city: String,
  state: String,
  zip: String,
  phone: String,
  cc: String,
  exp: String,
  cvv: String,
  billZip: String
});

let Checkout = mongoose.model('Checkout', checkoutSchema);

let save = (formData, callback) => {
  let Form = new Checkout({
    name: formData.name,
    email: formData.email,
    password: formData.password,
    address1: formData.address1,
    address2: formData.address2,
    city: formData.city,
    state: formData.state,
    zip: formData.zip,
    phone: formData.phone,
    cc: formData.cc,
    exp: formData.exp,
    cvv: formData.cvv,
    billZip: formData.billZip
  });
  Form.save()
    .then((data) => {
      console.log('SAVING TO DB...');
      callback(null, data);
    })
    .catch((error) => {
      console.log('FAILED TO SAVE TO DB: ', error);
      callback(error);
    });
};

let update = (formData, updateData, callback) => {
  Form.update({

  })
    .then((data) => {
      console.log('UPDATING DB...')
      callback(null, data);
    })
    .catch((error) => {
      console.log('FAILED TO SAVE TO DB: ', error);
      callback(error);
    })
};

module.exports = {save, update};