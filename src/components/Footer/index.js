import React from "react";
import {FaLinkedin, FaSlack,  FaGithub} from 'react-icons/fa'

const Footer = () => {
    return(
        <div className="container-fluid bg-dark opacity-50 text-white p-3  text-center">
            <FaLinkedin  className="icon"/>
            <FaSlack className="icon" />
            <FaGithub  className="icon"/>
            <p>Created by Alma Braun@2022</p>
        </div>
    )
}

export default Footer;