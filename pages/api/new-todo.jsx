//api-new-meetup
import {MongoClient} from "mongodb" //connection

async function handler(req, res) {
   if(req.method === "POST") {
       //endpoint for creating new meetup
       const data = req.body


       const client = await MongoClient.connect("")
       const db = client.db() // hold of database

       const meetupsCollection = db.collection("todos") // meetups is the collection name

       //inserting one new document insight of this collection
       const result = await meetupsCollection.insertOne(data) 

       console.log(result)

       client.close() //close database

        //https status code of response  (201 = inserted successfully)
        //message is optinal, just some response
       res.status(201).json({message: "Todo inserted"})


       
   }

}

export default handler