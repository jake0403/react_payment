import React from "react";
import './IntroStyle.css';
import img from '../components/Image/Legs.mp4'


const IntroStyle = ({children}) =>{
    return (
        <div className="jb-box">
            <video muted autoPlay loop>
                <source src={img} type="video/mp4"/>
            </video>
            <div className="jb-text">
                <p>{children}</p>
            </div>
        </div>

    );
};

export default IntroStyle;