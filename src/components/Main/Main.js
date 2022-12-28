import React, { Component } from 'react';
import Navbar from '../Navbar/Navbar';
import Projects from '../Projects/Projects';
import Experience from "../Experience/Experience";
import CV from "../CV/CV";
import Contact from '../Contact/Contact';
import Footer from "../Footer/Footer";
import './Main.scss';
class Main extends Component {
    state = {  }
    render() { 
        return (<div className="expand"><div className="main">
            <Navbar></Navbar>
            <div className="title">
                <h1>Hey, I'm</h1>
            </div>
            <div className="name">
                <h1 >Shivam</h1>
                <div className="yu"></div>
                </div>
                <div className="bb">
                   
                    <div className="text">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.</div>
                </div>
                <Projects/>
                <div className="boundary"></div>
                
               
        </div>
        <div className="exp-con">
        <Experience/>
        <CV/>
        <Contact/>
        <Footer/>
        </div></div>);
    }
}
 
export default Main;