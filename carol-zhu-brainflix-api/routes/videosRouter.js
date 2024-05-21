const express = require("express");
const router = express.Router();
const fs =require("fs")
const { v4: uuid } = require("uuid"); // make sure to npm install uuid (library for creating random id's)


router.get("/", (req, res) => {
  const videoDetailsJSON = fs.readFileSync("./data/video-details.json");
  const videoDetails = JSON.parse(videoDetailsJSON)
  res.send(videoDetails);
});

router.post("/", (req, res) => {
  console.log(req.body);

  const videoDetailsJSON = fs.readFileSync("./data/video-details.json")
  const videoDetails = JSON.parse(videoDetailsJSON)

  const newVideo = {
    id: uuid(),
    title: req.body.title,
    description:req.body.description,
    timestamp:Date.now(),
    channel:"Brain Station",
    views:"1,000,345",
    likes:"99,999",
    image:("https://source.unsplash.com/random/200x200?sig=incrementingIdentifier"),
    comments: [
      {
        "id": "6ff4314c-acde-4c91-a753-95cb7a366ee900",
        "name": "Brain Station",
        "comment": "Your video on famous paintings is a visual feast! I feel more connected to these paintings and the artists who created them. Your insightful commentary has ignited a newfound appreciation for the world of art.",
        "likes": 0,
        "timestamp": Date.now()
      }
    ],
  }

  videoDetails.push(newVideo);

  const videoDetailsSTRINGIFIED = JSON.stringify(videoDetails);
  fs.writeFileSync("./data/video-details.json", videoDetailsSTRINGIFIED)

  res.status(201).send("video submission success");
});

router.get("/:videoDetailsId", (req, res) => {
  
  const {videoDetailsId}=req.params;

  const videoDetailsJSON = fs.readFileSync("./data/video-details.json")
  const videoDetails = JSON.parse(videoDetailsJSON)

  const selectedVideoDetails = videoDetails.find((video) => {
    return video.id === videoDetailsId;
  })
  if (selectedVideoDetails) {
    res.send(selectedVideoDetails)
  } else {
    res.status(404).send("No videos found with that ID")
  }
});

router.put("/:id", (req, res) => {
  res.send(`Update USER WITH ID ${req.params.id}`);
});


module.exports = router;
