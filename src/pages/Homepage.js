import React from "react";
import Nav from "../components/Nav";
import Footer from "../components/Footer";
import hero from "../assets/giphy.gif";

const Homepage = () => {
   return (
    <>
      <div className="container p-4 my-3 text-white text-center home">
        <h1>Welcome to the Random Users Generator</h1>
        <p>This app aim to generate a random users from an API.</p>
        <div>
          <Nav />
        </div>
      </div>
      <div className="col-lg-8 col-sm-12 d-flex flex-row mx-auto justify-content-center p-1  home-hero ">
        <div className="my-4">
          <iframe
            src={hero}
            width="480"
            height="400"
            frameBorder="0"
            className="giphy-embed"
            title="gif"
            allowFullScreen
          ></iframe>
           </div>
      </div>
     
      <br></br>
      <Footer />
    </>
  );
};
export default Homepage;
