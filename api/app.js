const MongoClient = require('mongodb').MongoClient;
const assert = require('assert');
const express = require("express");
const bodyParser = require("body-parser");
const cors = require('cors');


//----------------------------
// DB 
//----------------------------

// Connection URL
const url = 'mongodb://localhost:27017';

// Database Name
const dbName = 'haikyuuDB';

// Create a new MongoClient
const client = new MongoClient(url, {
    useUnifiedTopology: true
});




const findDocuments = async (db) => {
    const collection = db.collection("haikyu");
    try {
        const res = await collection.find({});
        return res.toArray();
    } catch (err) {
        console.log(err);
    }

}



const insertDocuments = (db, callback) => {
    // use haikyu
    const collection = db.collection('haikyu');
    // insert data into haikyu collection 
    collection.insertMany([{
            anime: "Haikyu",
            fname: "Hinta",
            lname: "Shoyo",
            position: "Middle Blocker",
            quote: "It's true that I am not very tall. However! I can fly!",
            images: [
                "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcToxNNpEBqf92IpTcZ99j5StVdHv_nXUI5KQXapwTJGWdiKipSX&usqp=CAU",
                "https://i.pinimg.com/originals/ff/9d/fb/ff9dfb5fb3063d76e6cb86e63b96ef42.png",
                "https://i.pinimg.com/originals/07/0c/72/070c7244ae91b6a590c2128d76c88b03.jpg"
            ]
        },
        {
            anime: "Haikyu",
            fname: "Kageyama",
            lname: "Tobio",
            position: "Setter",
            quote: "The first game, second game, the playoffs, the nationals...I'm going to win them all.",
            images: [
                "https://www.gamenguides.com/wp-content/uploads/2020/03/haikyuu-to-the-top-0315.jpg",
                "https://i.ytimg.com/vi/84PUIIK1UEY/maxresdefault.jpg",
                "https://i.pinimg.com/originals/98/f0/a4/98f0a40e234898ca4ade34a9b003ba7d.jpg"

            ]
        },
        {
            anime: "Haikyu",
            fname: "Sawamura",
            lname: "Daichi",
            position: "Captain Wing Spiker",
            quote: "Even if we're not confident that we'll win, even if others tell us we don't stand a chance, we must never tell ourselves that",
            images: [
                "https://pm1.narvii.com/7041/f48273cc85bfdd97cce3ef66fdc519094d0b58d9r1-1073-1073v2_uhq.jpg",
                "https://i.redd.it/fgx0bk07snw21.png",
                "https://wallpapercave.com/wp/wp5968924.jpg"
            ]

        },
    ], (err, result) => {
        assert.equal(err, null);
        assert.equal(3, result.result.n);
        assert.equal(3, result.ops.length);
        console.log("Inserted 3 MF documents into the collection");
        callback(result);
    })
}





//----------------------------
// Server 
//----------------------------
LOCAL_PORT = 4000;
const app = express();

// middleware used to parse body of the request
app.use(bodyParser.json());
// TODO what does extended: true specify??
app.use(bodyParser.urlencoded({
    extended: true
}));
app.use(cors());

app.get("/", (req, res) => {
    // Use connect method to connect to the Server
    client.connect(err => {
        assert.equal(null, err);
        console.log("Connected successfully to server");

        const db = client.db(dbName);
        findDocuments(db)
            .then(items => res.send(items))
            .catch(err => console.log(err))
    });

});


// see stuf by adding a callback fun
app.listen(LOCAL_PORT, () => console.log(`Server started on port ${LOCAL_PORT}`));