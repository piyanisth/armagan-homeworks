const mongoose = require('mongoose')

async function main() {
  await mongoose.connect('mongodb://127.0.0.1:27017/ödev5', { useUnifiedTopology: true, useNewUrlParser: true})
  .then(() =>  console.log('CONNECTED'))
  .catch((error) => console.log("MONGODB BAĞLANTI HATASI", error.message));
}

main()