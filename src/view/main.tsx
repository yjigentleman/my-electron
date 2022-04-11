import React from "react";

import Header from "../main/header";
import "../styles/main.css";

const Main:React.FC<any> = () => {
    return (
        <div>
            <Header/>
            <h1 className="content">Hello, I am a Bot !</h1>
            <div className="notifi-bottom">
                <div className="container">
                    <p className="notifi-text">This site uses cookies. By continuing to browser the site, you are agreeing to our usse of cookies.</p>
                    <button className="button-1">OK</button>                          
                    <button className="button-2">Learn more</button>
                </div>
            </div>
        </div>
    )
}

export default Main;