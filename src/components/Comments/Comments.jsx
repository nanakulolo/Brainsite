import "./Comments.scss";
import mohan from "../../assets/images/Mohan-muruge.jpg";
import avatar from "../../assets/images/avatar.jpg";

function Comments(props) { 
  const formatDate = props.formatDate;

  if (!props.selectedVideo || !props.selectedVideo.comments) {
    // Handle the case where selectedVideo or selectedVideo.comments is undefined
    return <p>loading comments...</p> ; // render a loading message,
  }
  return (
    <div className="comments">
      <h3 className="comments__intro">3 Comments</h3>
      <div className="comments__container">
        <img className="comments__image" src={mohan} alt="mohan"></img>
        <div className="comments__subcontainer">
          <h3 className="comments__header">JOIN THE CONVERSATION</h3>
          <form className="comments__form">
            <textarea
              comment="comment"
              id="comment"
              placeholder="Add a new comment"
              required
            ></textarea>
            <button className="comments__button">COMMENT</button>
          </form>
          <hr className="comments__divider"></hr>
          {props.selectedVideo.comments.map((comment) => {
            return (
              <div className="commenter" key={comment.id}>
                <img
                  className="commenter__image"
                  src={avatar}
                  alt="avatar"
                ></img>
                <div className="commenter__container">
                  <div className="commenter__subcontainer">
                    <h3 className="commenter__name">{comment.name}</h3>
                    <p className="commenter__date">
                      {formatDate(comment.timestamp)}
                    </p>
                  </div>
                  <p className="commenter__text">{comment.comment}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default Comments;