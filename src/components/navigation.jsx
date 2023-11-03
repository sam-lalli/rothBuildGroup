import React from "react";

export const Navigation = (props) => {

  
  return (
    <nav id="menu" className={`navbar navbar-default navbar-fixed-top`}>
      <div className="container">
        <div className="navbar-header">
          <button
            type="button"
            className="navbar-toggle collapsed"
            data-toggle="collapse"
            data-target="#bs-example-navbar-collapse-1"
          >
            {" "}
            <span className="sr-only">Toggle navigation</span>{" "}
            <span className="icon-bar"></span>{" "}
            <span className="icon-bar"></span>{" "}
            <span className="icon-bar"></span>{" "}
          </button>
          <a className="col-xs-7 col-md-3"  href="/">
            {" "}
            <img src="img/currentLogo.png" className="img-responsive" alt="" />{" "}
          </a>
        </div>

        <div
          className="collapse navbar-collapse"
          id="bs-example-navbar-collapse-1"
        >
          <ul className="nav navbar-nav navbar-right">
            <li>
              <a href="/about" className="page-scroll">
                About
              </a>
            </li>
            <li>
              <a href="/services" className="page-scroll">
                Services
              </a>
            </li>
            <li>
              <a href="/inquiry" className="page-scroll">
                Inquire
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};
