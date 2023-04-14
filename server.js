// const routes = require("./routes");
const express = require("express");
// const db = require('./config/connection');
const mongoose = require("mongoose").MongoClient;
// const dotenv = require("dotenv");

const app = express();
// const PORT = process.env.PORT || 3001;
const port = 3001;

const connectionStringURI = `mongodb://127.0.0.1:27017/socialApiDB`;

mongodb.connect(
  connectionStringURI,
  { useNewUrlParser: true, useUnifiedTopology: true },
  (err, client) => {
    db = client.db();
    app.listen(port, () => {
      console.log(`App listening at http://localhost:${port}`);
    });
  }
);

// app.use(session(sess));

// app.use(express.json());
// app.use(express.urlencoded({ extended: true }));
// app.use(routes);
// app.use(express.static(path.join(__dirname, "public")));


// sequelize.sync({ force: false }).then(() => {
//   app.listen(PORT, () => console.log("Now listening"));
// });