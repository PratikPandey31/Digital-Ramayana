const mongoose = require('mongoose');
const balKand = require('../models/balKand.js');
const balKandSlokas = require('./Balkand/BalkandSarg6.js');

async function connectAndInsertData() {
  try {mongodb:'pratik90394:av6PrmkRH5fncnTN@ac-tw8mlu7-shard-00-00.prpj7yk.mongodb.net:27017,ac-tw8mlu7-shard-00-01.prpj7yk.mongodb.net:27017,ac-tw8mlu7-shard-00-02.prpj7yk.mongodb.net:27017/?replicaSet=atlas-lsu08c-shard-0&ssl=true&authSource=admin&retryWrites=true&w=majority&appName=Cluster0'}

  //

  // mongodb://pratik90394:av6PrmkRH5fncnTN@ac-tw8mlu7-shard-00-00.prpj7yk.mongodb.net:27017,ac-tw8mlu7-shard-00-01.prpj7yk.mongodb.net:27017,ac-tw8mlu7-shard-00-02.prpj7yk.mongodb.net:27017/?replicaSet=atlas-lsu08c-shard-0&ssl=true&authSource=admin&retryWrites=true&w=majority&appName=Cluster0

  //
    // Connect to MongoDB Atlas
    await mongoose.connect('', {
      useNewUrlParser: true,
      useUnifiedTopology: true
    });

    console.log('Connected to MongoDB');

    // Fetch documents from the balKand collection
    const docs = await balKand.find();
    console.log(docs);

    // Insert new documents into the balKand collection
    const insertResult = await balKand.insertMany(balKandSlokas);
    console.log(insertResult);
  } catch (err) {
    console.error('Error:', err);
  } finally {
    // Close the connection to MongoDB when done
    mongoose.connection.close();
  }
}

// Call the function to connect and perform operations
connectAndInsertData();
