import React from "react";

export const Demo = (props) => {
  return (
    <div id="demo" style={{ marginBottom: "20px" }}>
      <div className="container">
        <div className="row">
          <div className="col-xs-12 col-md-6">
            <iframe
              title="Demo Video"
              width="100%"
              height="315"
              src="videos/vid.mp4"
              frameBorder="0"
              allowFullScreen

            ></iframe>
          </div>
          <div className="col-xs-12 col-md-6">
            <div className="about-text">
              <h2>Demo</h2>
              <h3>Why Choose Us?</h3>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
