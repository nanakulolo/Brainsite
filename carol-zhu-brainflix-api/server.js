const express = require('express')
const app = express()
const videoRouter = require('./routes/videosRouter')
const cors = require("cors");
require("dotenv").config(); // loads .env variables

const {PORT, CLIENT_URL} = process.env;

app.use(cors({
  origin: CLIENT_URL
}));

//middleware
app.use(express.json()); // sets the req.body
app.use(express.static("public")); // make resources from the "public" folder available from the client
app.use(cors()); // avoid CORS errors: allow clients from different domains to access server


app.use('/videos', videoRouter)

app.get('/', (req,res)=>{
  res.json({message: "Lets get some Videos"})
})


app.listen(PORT, () => {
  console.log(`app running at http://localhost:${PORT}`);
});
