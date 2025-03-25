import mongoose from "mongoose";


type ConnectionObject = {
  isConnect? : number
}

const connection: ConnectionObject= {}

async function dbConnect () : Promise<void> {
  // ✅ Prevents multiple database connections.
  if(connection.isConnect) {
    console.log("Already Connected to Database");
    return;
  }

  try {
    // ✅ Uses MONGODB_URL from environment variables
    const db = await mongoose.connect(process.env.MONGODB_URL || '')

    /*
    db.connections[0].readyState checks the MongoDB connection state to prevent unnecessary reconnections and ensure the database is properly connected before running the application.
    */

    connection.isConnect = db.connections[0].readyState
    // ✅ Logs success
    console.log("DB Connect Successfully");
    
  } catch (error) {
    // ✅ Logs failure messages.
    console.log("Database Connect Failed", error);
    //✅ Terminates the process on connection failure.
    process.exit(1) 
  }
}

export default dbConnect;



/* 
OVERVIEW: 
✅ Prevents multiple database connections by checking if an active connection already exists.
✅ Uses Mongoose to connect to the database.
✅ Retrieves the connection string from environment variables (MONGODB_URL).
✅ Handles connection errors gracefully.
*/