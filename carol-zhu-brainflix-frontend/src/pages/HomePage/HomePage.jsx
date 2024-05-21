import VideoMain from "../../components/VideoMain/VideoMain";
import { useState, useEffect } from "react";
import EngagementMetrics from "../../components/EngagementMetrics/EngagementMetrics";
import Comments from "../../components/Comments/Comments";
import VideoSelection from "../../components/VideoSelection/VideoSelection";
import { useParams } from "react-router-dom";
import axios from "axios";
import "./HomePage.scss";


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
        const response = await axios.get("http://localhost:7023/videos/");
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
        'http://localhost:7023/videos/${id}'
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