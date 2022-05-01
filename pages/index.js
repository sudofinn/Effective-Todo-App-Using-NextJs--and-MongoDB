//import {MongoClient} from "mongodb"
import HomePageUi from "../components/ui/HomePageUi"
//need list of todos ( possibly in homepagegui)


function TestPage() {
  return (
    <HomePageUi />
  )

}



// database stuff

/*

export async function getStaticProps() {
   //execute code here ( own api endpoint)

   
   const client = await MongoClient.connect("mongodb+srv://f:Log2monf@cluster0.vvihd.mongodb.net/MeetupWebsite?retryWrites=true&w=majority")
   const db = client.db() // hold of database

   const todoCollection = db.collection("todos") // meetups is the collection name


   //get an array of documents ( every meetup)
   const todos = await meetupsCollection.find().toArray() 
   
   client.close()


   return {
     props: {
       todo: todos.main
     },


     revalidate: 1
   }


}

*/
export default TestPage