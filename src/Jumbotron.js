import React from "react";

function Jumbotron(props) {
  return (
    <div className="jumbotron jumbotron-fluid">
      <div className="container">
        {props.children}
        <p className="lead">
          Try to click on 12 pictures without clicking on any of them more than
          once!
        </p>
      </div>
    </div>
  );
}

export default Jumbotron;
