import React from "react";
import "./App.css";
import FullName from "./Component/Profile/FullName";
import ProfilePhotos from "./Component/Profile/ProfilePhotos";
import Adress from "./Component/Profile/Adress";
function App() {
  return (
    <div className="App">
      <ProfilePhotos />
      <FullName />
      <Adress />
    </div>
  );
}

export default App;
