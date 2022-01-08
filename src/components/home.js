import React from "react";
import Navbar from "./Navbar";
import '../styles/home.css';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronDown } from "@fortawesome/free-solid-svg-icons";
const Home = () =>{
    return(
    <div className="home">
        <Navbar/>
        <a href='#profile' className="icon"><FontAwesomeIcon icon={faChevronDown}/></a>
    </div>);
}

export default Home;