import VideoMain from "../../components/VideoMain/VideoMain";
import { useState, useEffect } from "react";
import EngagementMetrics from "../../components/EngagementMetrics/EngagementMetrics";
import Comments from "../../components/Comments/Comments";
import VideoSelection from "../../components/VideoSelection/VideoSelection";
import { useParams } from "react-router-dom";
import axios from "axios";
import "./HomePage.scss";

// Make a GET request to /register endpoint
fetch('https://unit-3-project-api-0a5620414506.herokuapp.com/register')
  .then(response => response.json())
  .then(data => {
    // Store the API key securely
    const apiKey = data.api_key;
    // Use the API key in subsequent requests
    console.log("API Key:", apiKey);
  })
  .catch(error => {
    console.error('Error:', error);
  });
  
const defaultVideoId = "84e96018-4022-434e-80bf-000ce4cd12b8";

function HomePage() {
  const [selectedVideo, setSelectedVideo] = useState({});
  const [videos, setVideos] = useState([]);

  const params = useParams();
  console.log(params);

  useEffect(() => {
    console.log("video upload page mounted");
    const getVideos = async () => {
      try {
        const response = await axios.get(
          `https://unit-3-project-api-0a5620414506.herokuapp.com/videos/?api_key=${apiKey}`
        );
        setVideos(response.data);
      } catch (err) {
        console.error(err);
      }
    };
    getVideos();
  }, []);

  useEffect(() => {
    console.log("params useEfect ran");

    const getSelectedVideo = async (id) => {
      const response = await axios.get(
        `https://unit-3-project-api-0a5620414506.herokuapp.com/videos/${id}?api_key=${apiKey}`
      );
      setSelectedVideo(response.data);
    };

    if (params.videoId) {
      getSelectedVideo(params.videoId);
    } else {
      getSelectedVideo(defaultVideoId);
     
    }
  }, [params]);

  //Function to format the timestamp data
  function formatDate(timestamp) {
    const date = new Date(timestamp);
    date.setDate(date.getDate() + 1); // Adding one day
    return (
      date.getMonth() + 1 + "/" + date.getDate() + "/" + date.getFullYear()
    );
  }
  return (
    <div className="home">
      <VideoMain selectedVideo={selectedVideo} videos={videos} />
      <div className="home__container">
        <div className="home__subcontainer">
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
        <VideoSelection selectedVideo={selectedVideo} videos={videos} />
      </div>
    </div>
  );
}

export default HomePage;