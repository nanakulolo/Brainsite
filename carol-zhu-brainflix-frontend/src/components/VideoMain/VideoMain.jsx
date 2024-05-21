import "./VideoMain.scss";

function VideoMain(props) { 
  return (
    <div className="video">
      <video
        poster={props.selectedVideo.image}
        alt="video"
        className="video__image"
        controls
      ></video>
    </div>
  );
}
export default VideoMain;
