import "./VideoUploadPage.scss";
import { useNavigate } from "react-router-dom";
import axios from "axios"

// image url that we will append to our image sources
//  - this points to point to our servers public/images folder
const imageURL = "http://localhost:7023/images/Upload-video-preview.jpg";

function VideoUploadPage() {
  const navigate = useNavigate();

  const handleFormSubmit = (event) => {
    event.preventDefault();
    alert("You pressed Upload! useYou will now be redirected to the home page");
    navigate("/");

    //creating new video object with form input data
    const newVideo = {
      title: event.target.title.value,
      description: event.target.description.value
    }

    async function postVideo(){
      //POST new Video
      const response = await axios.post("http://localhost:7023/videos/", newVideo);
    }
    postVideo();

  };
  return (
    <>
      <hr className="upload__divider"></hr>
      <div className="upload">
        <h1 className="upload__title">Upload Video</h1>
        <form className="upload__input" onSubmit={handleFormSubmit}>
          <div className="upload__subcontainer">
            <h3 className="upload__subtitle">VIDEO Thumbnail</h3>
            <img
              className="upload__image"
              src={imageURL}
              alt="upload image"
            />
          </div>
          <div className="upload__subcontainer upload__subcontainer--block">
            <h3 className="upload__subtitle">TITLE YOUR VIDEO</h3>
            <input
              name="title"
              type="text"
              id="video__title"
              required
              placeholder="Add a title to your video"
            ></input>
            <br></br>
            <h3 className="upload__subtitle">ADD A VIDEO DESCRIPTION</h3>
            <textarea
              name="description"
              id="video__description"
              placeholder="Add a description to your video"
              required
            ></textarea>
          </div>
          <hr className="upload__underline"></hr>
          <div className="upload__subcontainer upload__subcontainer--button">
            <button className="upload__button upload__button--publish">
              PUBLISH
            </button>
            <button className="upload__button upload__button--cancel">
              CANCEL
            </button>
          </div>
        </form>
        <hr className="upload__line"></hr>
      </div>
    </>
  );
}

export default VideoUploadPage;
