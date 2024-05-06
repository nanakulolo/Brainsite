import "./VideoSelection.scss";
function VideoSelection(props) {
  console.log("selectedVideo", props.selectedVideo); //testing my prop data in the console//
  console.log("videos: ", props.videos);

  return (
    <div className="selection">
      <h3 className="selection__title">NEXT VIDEOS</h3>
      {props.videos
        .filter((video) => video.id !== props.selectedVideo.id) //filters out the selected video on click
        .map((video) => {                                       // maps through the array of objects like a for loop. 
          return (
            <div
              key={video.id}
              className="selection__container"
              onClick={() => {
                props.handleVideoClick(video.id);   // on click takes the video id from the handle click function 
              }}
            >
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
          );
        })}
    </div>
  );
}

export default VideoSelection;