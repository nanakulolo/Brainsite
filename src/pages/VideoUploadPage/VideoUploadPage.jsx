import "./VideoUploadPage.scss";
import uploadImage from "../../assets/images/Upload-video-preview.jpg";
import { useNavigate } from "react-router-dom";

function VideoUploadPage() {
  const navigate = useNavigate(); 

  const handleFormSubmit = (event) => {
    event.preventDefault();
    alert(
      "You pressed Upload! useYou will now be redirected to the home page"
    );
    navigate("/");
  };
  return (
    <>
      <hr className="upload__divider"></hr>
      <div className="upload">
        <h1 className="upload__title">Upload Video</h1>
        <form className="upload__input" onSubmit={handleFormSubmit}>
          <div className="upload__subcontainer">
            <h3 className="upload__subtitle">VIDEO Thumbnail</h3>
            <img className="upload__image" src={uploadImage} alt="upload image" />
          </div>
          <div className="upload__subcontainer upload__subcontainer--block">
            <h3 className="upload__subtitle">TITLE YOUR VIDEO</h3>
            <input
              type="text"
              id="video__title"
              required
              placeholder="Add a title to your video"
            ></input>
            <br></br>
            <h3 className="upload__subtitle">ADD A VIDEO DESCRIPTION</h3>
            <textarea
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