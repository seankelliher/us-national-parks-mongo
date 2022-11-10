// ========================
// Packages
// ========================
const express = require("express");
const cors = require("cors");
const morgan = require("morgan"); // Logs requests.
const mongo = require("mongodb");
const MongoClient  = mongo.MongoClient;
const app = express();

// ========================
// Link to Database
// ========================
const uri = process.env.MONGO_URI; // In Heroku, key for MongoDB stored here.
const client = new MongoClient(uri);

MongoClient.connect(uri) // Promises approach.
    .then(client => {
        console.log("Connected to your database with promises");
        const db = client.db("us-national-parks");
        //const coll = db.collection("parks");

        // ========================
        // Middlewares
        // ========================
        //app.use(express.static(__dirname + "/dist/")); // For Heroku deployment.
        app.use(express.json()); // bodyParser now included in Node, but this...
        app.use(express.urlencoded({ extended: true })); // and this needed.
        app.use(cors());
        app.use(morgan("dev"));

        // ========================
        // Routes
        // ========================
        app.get("/park", (req, res) => {
            db.collection("parks").find().toArray()
                .then((results) => res.send(results))
                .catch((error) => console.log(error));
        });

        // ========================
        // Listen
        // ========================
        app.listen((process.env.PORT || 8081), () => {
            console.log(`Server listening on port ${process.env.PORT}`);
        });
    })
    .catch(error => console.log(error))
    .finally(() => client.close());
