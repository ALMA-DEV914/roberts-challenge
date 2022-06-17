import React from "react";
import Nav from "../components/Nav";
import Footer from "../components/Footer";
import hero from '../assets/giphy.gif';

const Homepage = () => {
    return (
        <>
<div className="container bg-primary p-4 my-3 text-white home">
      <h1>Welcome to the Random Users Generator</h1>
      <p>This app aim to generate a random users from an API.</p>
     <div className="bg-light"><Nav /></div>
</div>
   <div className="col-lg-8 col-sm-12 d-flex flex-row mx-auto text-center  home-hero ">
   <div className="my-4">
    <iframe src={hero} width="480" height="280" frameBorder="0" className="giphy-embed" title="gif" allowFullScreen></iframe><br></br>
    <h3 className="text-white">“Connecting with others gives us a sense of inclusion, connection, interaction, safety, and community. Your vibe attracts your tribe, so if you want to attract positive and healthy relationships, be one! Staying connected and getting reconnected feeds the flow of goodness which empowers our humanity.”
   <span className="text-warning"> - Susan C. Young</span></h3>
   </div>
</div><br></br>
<Footer/>
      </>
    )
}
export default Homepage;
