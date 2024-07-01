import React, { useEffect, useState } from "react";
import axios from "axios";
import "./App.css";

function App() {
  const [images, setImages] = useState([]);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    async function fetchImages() {
      try {
        const response = await axios.get("http://localhost:5000/images");
        setImages(
          response.data.map(
            (image) => `http://localhost:5000/images/${image._id}`
          )
        );
      } catch (error) {
        console.error("Error fetching images", error);
      }
    }

    fetchImages();
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [images]);

  const handleImageUpload = async (event) => {
    const file = event.target.files[0];
    if (file) {
      const formData = new FormData();
      formData.append("image", file);

      try {
        await axios.post("http://localhost:5000/upload", formData, {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        });
        const response = await axios.get("http://localhost:5000/images");
        setImages(
          response.data.map(
            (image) => `http://localhost:5000/images/${image._id}`
          )
        );
      } catch (error) {
        console.error("Error uploading image", error);
      }
    }
  };

  return (
    <div
      className="background"
      style={{
        backgroundImage: `url(${images[currentImageIndex]})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        transition: "background-image 1s ease-in-out",
      }}
    >
      <h1>hello</h1>
      <input type="file" accept="image/*" onChange={handleImageUpload} />
      <button>upload</button>
    </div>
  );
}

export default App;
