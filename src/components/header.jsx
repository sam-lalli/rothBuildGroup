import React from "react";

export const Header = (props) => {
  return (
    <header id="header">
      <div className="intro">
        <div className="overlay">
          <div className="container">
            <div className="row">
              <div className="col-md-8 col-md-offset-2 intro-text overflow-hidden">
                <h1 className="drop-in">
                  {props.data ? props.data.title : "Loading"}
                  <span></span>
                </h1>
                <p className="drop-in-2">{props.data ? props.data.paragraph : "Loading"}</p>
                <a
                  href="/inquiry"
                  className="btn btn-custom btn-lg page-scroll drop-in-3"
                >
                  Get a Quote
                </a>{" "}
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};
