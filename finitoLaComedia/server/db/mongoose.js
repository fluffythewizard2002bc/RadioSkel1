const mongoose = require("mongoose");
require("dotenv").config();
//const uri = `mongodb+srv://NAME:${process.env.MONGO_PW}@NAME.jupy6.mongodb.net/gatherTOWN?retryWrites=true&w=majority`;
//mongoose.connect(uri, {});

//mongoose.connect(process.env.MONGOOSE_URL);


const MONGOOSE_URL = process.env.MONGOOSE_URL;
mongoose.connect(
    MONGOOSE_URL, 
    () => {
      console.log("mongoDB connected");
    },
    (e) => console.error(e)
  );