import "./Banner.scss";

import Icon from "./Icon";
import logo from "@/img/cow.svg";

const Banner = () => {
  return (
    <div className="banner">
      <div className="banner__left">
        <h1 className="banner__hello-primary">
          Hello, <b>Van Ons</b>
        </h1>
        <p className="banner__hello-secondary">
          You have <span className="text-important">two</span> todo's,{" "}
          <span className="text-important">one</span> of them is overdue
        </p>
      </div>
      <div className="banner__right">
        <div className="notifcation__wrapper">
          <Icon icon="icon-bell" className="notification__icon" />
          <div className="notification__dot"></div>
        </div>
        <img className="banner__profilePicture" src={logo} alt="Cow logo" />
      </div>
    </div>
  );
};

export default Banner;
