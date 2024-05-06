import "../EngagementMetrics/EngagementMetrics.scss";
import eye from "../../assets/Icons/views.svg";
import heart from "../../assets/Icons/likes.svg";

function EngagementMetrics(props) {
  const formatDate = props.formatDate;
  const selectedVideo = props.selectedVideo; 
  return (
    <>
      <h1 className="engagementMetrics__header">{props.selectedVideo.title}</h1>
      <hr className="engagmentMetrics__underline"></hr>
      <div className="engagementMetrics">
        <div className="engagementMetrics__container">
          <div className="engagementMetrics__subcontainer">
            <p className="engagementMetrics__channel">
              {selectedVideo.channel}
            </p>
          </div>
          <div className="engagementMetrics__subcontainer">
            {formatDate(selectedVideo.timestamp)}
          </div>
        </div>
        <div className="engagementMetrics__container">
          <div className="engagementMetrics__subcontainer">
            <img
              className="engagementMetrics__image"
              src={eye}
              alt="mohan"
            ></img>
            {selectedVideo.views}
          </div>
          <div className="engagementMetrics__subcontainer">
            <img
              className="engagementMetrics__image"
              src={heart}
              alt="mohan"
            ></img>
            {selectedVideo.likes}
          </div>
        </div>
      </div>
      <hr className="engagementMetrics__divider"></hr>
      <div className="engagementMetrics__description">
        {selectedVideo.description}
      </div>
    </>
  );
}
export default EngagementMetrics;
