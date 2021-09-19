import React from "react";

function Header() {
  return (
    <div className="header">
      <div className="container">
        <div className="row">
          <div className="col-sm">
            <i className="fas fa-phone-square-alt"></i>
            <span style={{ marginRight: 10, marginLeft: 10 }}>
              {" "}
              01062530292{" "}
            </span>
            <i className="fas fa-envelope-square"> </i>
            <span style={{ marginRight: 10, marginLeft: 10 }}>
              {" "}
              shopy@gmail.com
            </span>
          </div>
          <div className="col-sm">
            <span className="ml">Hello my friends</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Header;
