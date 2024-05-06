import "./App.scss";
import NavBar from "./components/NavBar/NavBar";
import VideoMain from "./components/VideoMain/VideoMain";
import EngagementMetrics from "./components/EngagementMetrics/EngagementMetrics";
import Comments from "./components/Comments/Comments";
import VideoSelection from "./components/VideoSelection/VideoSelection";
import VideoData from "./data/video-details.json";
import { useState } from "react";

function App() {
  //const[stateVariable. setterFunction]= useState(initial)
  const [selectedVideo, setSelectedVideo] = useState(VideoData[0]); // selectedVideo is the initial state, setSelectedVideo is the new state after a video has been cicked
  const [videos, setVideos] = useState(VideoData);
  //console.log("selectedVideo: ", selectedVideo)

  //grabbing the comments from the selectedVideo object
  //console.log(selectedVideo.comments)

  function handleVideoClick(id) {
    //console.log("id: ", id)     //testing onclick in the console
    const clickedVideo = videos.find((video) => {     //grabs the video id from the object on click, returns and stores the data in the function
      return video.id === id;
    });
    //console.log("clickedVideo: ", clickedVideo)
    setSelectedVideo(clickedVideo); // Sets the new state and re renders the site with the clicked videos new data. 
  }
  //Function to format the timestamp data from the json file
  function formatDate(timestamp) {
    const date = new Date(timestamp);
    return (
      date.getMonth() + 1 + "/" + date.getDate() + "/" + date.getFullYear()
    );
  }

  return (
    <div className="App">
      <NavBar />
      <VideoMain selectedVideo={selectedVideo} videos={videos} />
      <div className="App__container">
        <div className="App__subcontainer">
          <EngagementMetrics
            selectedVideo={selectedVideo} // passing state variable as prop
            videos={videos}
            formatDate={formatDate} // passing the function as a prop to EngagementMetrics component
          />
          <Comments
            selectedVideo={selectedVideo}
            videos={videos}
            formatDate={formatDate} //passing the function as a prop to Comments component
          />
        </div>
        <VideoSelection
        selectedVideo={selectedVideo}
        videos={videos}
        handleVideoClick={handleVideoClick} //passing the function as a prop to VideoSelection component
      />
      </div>
    </div>
  );
}

export default App;