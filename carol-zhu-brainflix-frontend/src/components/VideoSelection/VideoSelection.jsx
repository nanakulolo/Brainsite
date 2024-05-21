import "./VideoSelection.scss";
import { Link } from "react-router-dom";
function VideoSelection(props) {

  return (
    <div className="selection">
      <h3 className="selection__title">NEXT VIDEOS</h3>
      {props.videos
        .filter((video) => video.id !== props.selectedVideo.id) //filters out the selected video on click
        .map((video) => {
          // maps through the array of objects like a for loop.
          return (
            <Link key={video.id} to={`/videos/${video.id}`} className="link">
              <div key={video.id} className="selection__container">
                <img
                  src={video.image}
                  alt="video"
                  className="selection__image"
                ></img>
                <div className="selection__subcontainer">
                  <h3 className="selection__header">{video.title}</h3>
                  <h4 className="selection__author">{video.channel}</h4>
                </div>
              </div>
            </Link>
          );
        })}
    </div>
  );
}

export default VideoSelection;
