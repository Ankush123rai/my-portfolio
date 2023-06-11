const functions = require('firebase-functions');
const admin = require('firebase-admin');
var serviceAccount = require("./serviceAccountKey.json");
admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
  databaseURL: "https://portfolio-a4c27-default-rtdb.firebaseio.com"
});
const express = require('express');
const cors = require('cors'); // Corrected line

const app = express();
app.use(cors({ origin: true }));

const db= admin.firestore

app.get('/', (req, res) => {
  return res.status(200).send('hiii world there');
});

app.post("/api/create", (req, res)=>{
    (async ()=>{
        try{
            await db.collection('userDetails').doc(`/${Date.now()}/`).create({
              id:Date.now(),
              name:req.body.name,
              mobile:req.body.mobile,
            })
            return res.status(200).send({status: 'sucess', msg: "Data saved"});
        }
        catch(error){
          console.log(error)
          return res.status(500).send({status: 'failed', msg: "error"});
        }                                              
    })();
})

exports.app = functions.https.onRequest(app);
