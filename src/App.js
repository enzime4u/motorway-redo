import React, { useEffect } from "react";
import "./App.css";

import Gallery from "./components/Gallery/Gallery";
import FormComponent from "./components/FormComponent/FormComponent";

function App() {
  const [images, setImages] = React.useState([]);
  console.log(images);
  useEffect(() => {
    fetch("images?limit=10")
      .then((res) => res.json())
      .then((data) => {
        setImages(data);
      })
      .catch((err) => {
        console.log("Error:", err);
      });
  }, []);

  return (
    <div className="wrapper-container">
      <Gallery images={images} />
      <FormComponent style={{ border: "2px solid red" }} />
    </div>
  );
}

export default App;
