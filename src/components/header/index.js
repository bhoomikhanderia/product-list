import React from "react";
import logo from "../../assets/imgs/logo.png";

const Header = () => {
  return (
    <header className="App-header">
      <div className="container">
        <div className="inner-content">
          <div className="brand">
            <img
              src={logo}
              className="App-logo"
              alt="logo"
              aria-label="Great daily deals at Catch.com.au"
            />
          </div>
        </div>
      </div>
    </header>
  );
};
export default Header;
