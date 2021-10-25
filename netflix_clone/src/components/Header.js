import React from "react";
import './Header.css'

export default ({black})=>{
    return(
        <header className={black ? 'black' : ''}>
            <div className="header--logo">
                <a href="/">
                    <img src="https://upload.wikimedia.org/wikipedia/commons/0/08/Netflix_2015_logo.svg" alt="netflix"></img>
                </a>
            </div>
            <div className="header--user">
                <a href="/">
                    <img src="https://i.gifer.com/origin/b0/b05bfec1ff5b48cc0529d6a035b8d194.gif"></img>
                </a>
            </div>
        </header>
    );

}