import React from "react";
import './BigText.css';
import img from '../components/Image/Globe.mp4'


const BigText = ({children}) =>{
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

export default BigText;