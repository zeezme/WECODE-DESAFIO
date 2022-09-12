import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./sideMenu.css";

export default function SideMenuItem({ content, color }) {
    const [subState, setSubState] = useState(false);

    const handleClick = () => {
        setSubState(!subState);
    };

    const handleClassName = () => {
        return subState ? "sideSubMenu-container-active" : "sideSubMenu-container";
    };

    const decideSideMenuClass = () => {
        return subState ? 'sideMenu-item-active' : 'sideMenu-item';
    }
 
    return (
        <>
            <div onClick={() => { handleClick(); }} className={decideSideMenuClass()}>
                <p className="sideMenuText">{content.image.alt}</p>
            </div>

            <div className={handleClassName()}>
                {content.subcategories.map((content, index) => (
                    <Link className="sideSubMenu-items" key={index} to={content.route}> <p className="sideSubMenu-items-text">{content.item}</p> </Link>
                ))}
            </div>
        </>

    );
}
