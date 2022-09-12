import sideMenuItems from "../../config/departments.json";

import SideMenuItem from "./SideMenuItem";

import "./sideMenu.css";
export default function SideMenu(props) {
  const decideColor = (index) => {
    if (index === 0) {
      return { backgroundColor: "#343434", color: "white" };
    }
    if (index === 1) {
      return { backgroundColor: "#464646", color: "white" };
    }
    if (index === 2) {
      return { backgroundColor: "#5A5A5A", color: "white" };
    }
    if (index === 3) {
      return { backgroundColor: "#7C7C7C", color: "white" };
    }
    if (index === 4) {
      return { backgroundColor: "#AEAEAE" };
    }
    if (index === 5) {
      return { backgroundColor: "#D2D2D2" };
    }
  };

  return (
    <div className={props.classNameProps}>

      <div className="user-info">

        <div className="sideMenu-avatar">
          <div className="sideMenu-avatar-internal" />
        </div>

        <div>
          <div className="sideMenu-user-greeting">Olá</div>
          <div className="sideMenu-user-name">Usuário</div>
        </div>
      </div>

      <div className="sideMenu-items-container">
        {sideMenuItems.map((content, index) => (
          <div
            key={index}
            style={decideColor(index)}
            className="sideMenu-items-container-internal"
          >
            <SideMenuItem content={content} />
          </div>
        ))}
      </div>
    </div>
  );
}
