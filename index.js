//libraries imports 
require("dotenv").config();
const { createServer } = require("http");
const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");


const app = express();
const server = createServer(app); //creates an http server 

const corsOptions = {
    origin:'*', 
    credentials:true,            //access-control-allow-credentials:true
    optionSuccessStatus:200,
}

// CORS config
app.use(cors(corsOptions));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));


//ROUTES ENDPOINTS 
app.use("/driver", require("./app/routes/driver.routes"));
app.use("/battery", require("./app/routes/battery.routes"));
app.use("/moto", require("./app/routes/moto.routes"));

//High-level error handling for server
app.use((err, _req, res, next) => {
    if (err.status) {
      return res.status(err.status).json({
        message: err.message,
        data: err.data,
      });
    } else {
      return next(err);
    }
});

//CONNECT TO DATABASE
mongoose.connect(process.env.MONGODB_URI, {
    dbName: process.env.MONGODB_DB,
    useNewUrlParser: true,
    useUnifiedTopology: true
  }).then(
    () => { console.log("Connected to MongoDB") },
    err => { console.log(err) }
  );

//SERVER LISTEN 
server.listen(process.env["PORT"] || `8000`, ()=> {
    console.log("Server Running...");
})