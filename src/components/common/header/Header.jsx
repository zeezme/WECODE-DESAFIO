import React, { useState } from "react";
import "./header.css";
import SideMenu from "../../sideMenu/SideMenu";
import SearchBar from "../../searchBar/SearchBar";

export default function Header() {

  //States
  
  const [menuState, setMenuState] = useState(false);  
  const [searchBarState, setSearchBarState] = useState(false);

  //Buttons

  const handleClick = () => {
    return (setMenuState(!menuState),setSearchBarState(false));
  };

  const handleClickSearchBar = () => {
    return (setSearchBarState(!searchBarState),setMenuState(false))
  };

  const handleClickCloseButton = () => {
    return setMenuState(!menuState);
  };

  //ClassName changers

  const handleClassName = () => {
    return menuState ? "sideMenu-container" : "sideMenu-container-active";
  };

  const handleClassNameCloseButton = () => {
    return menuState ? "sideMenu-close-button" : "sideMenu-close-button-active";
  };

  const handleClassNameSearchBarButton = () => {
    return searchBarState ? "searchBar-button" : "searchBar-button-active";
  };
  
  return (
    <>
      <div className="header-container">
        <button
          onClick={() => {handleClickCloseButton()}} className={handleClassNameCloseButton()}>
          ✖
        </button>

        <SideMenu classNameProps={handleClassName()} />

        <button onClick={() => { handleClick() }} className="header-container-left"/>

        <a href="https://www.wecode.digital/" target='_blank' rel="noreferrer" className="header-container-midle"> </a>
        <div className="header-container-right">
          <button id="header-container-right-icon-search" onClick={() => { handleClickSearchBar() }} />
          <button id="header-container-right-icon-cart"/>
        </div>
      </div>
      <SearchBar classNameProps={handleClassNameSearchBarButton()}/>
    </>
  );
}
