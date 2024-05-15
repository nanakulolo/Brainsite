import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.scss";
import HomePage from "./pages/HomePage/HomePage";
import NavBar from "./components/NavBar/NavBar";
import VideoUploadPage from "./pages/VideoUploadPage/VideoUploadPage";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <NavBar />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/videos/:videoId" element={<HomePage />} />
          <Route path="/upload" element={<VideoUploadPage />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;