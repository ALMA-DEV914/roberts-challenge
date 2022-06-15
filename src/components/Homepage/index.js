import React from "react";
import Nav from "../Nav";
import Footer from "../Footer";

function Homepage(){
    return (
        <>
    <div className="container p-3 my-3 bg-primary text-white home">
      <h1>Welcome to the Random Users Generator</h1>
      <p>This app aim to generate a random users from an API.</p>
      <Nav />
</div>
   <div className="col-6 mx-auto home-hero ">
    <iframe src="https://giphy.com/embed/Squ2hNn2abnQPRdDMY" width="480" height="480" frameBorder="0" className="giphy-embed" title="gif" allowFullScreen></iframe><p><a href="https://giphy.com/gifs/aclamguitars-aclam-aclamfoto-feelthinkplay-Squ2hNn2abnQPRdDMY" className="text-white">Think, Build, and Deploy</a></p> 
</div>
<Footer/>
      </>
    )
}
export default Homepage;
