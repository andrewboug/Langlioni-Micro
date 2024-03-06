import React from "react";

const What = () => {
  return (
    <div>
      <div className="section">
        <h1>What?!</h1>
      </div>
      <div className="video-container">
        <iframe
          src="https://drive.google.com/file/d/1gG_nlvx_s4SUdFLuE1CyuiUMe6_WHO7h/preview"
          width="640"
          height="480"
          allow="autoplay"
          allowFullScreen
        ></iframe>
      </div>
      <div className="body">
        <p>The tops of pizzas bake in chambers of hot air.</p>
        <p>
          The bottoms of pizzas are baked by heat conduction from contact with
          the refractory oven floors they are placed upon.
        </p>

        <p>
          During the baking cycle, these two independent processes occur at the
          same time, in the same time interval.
        </p>
        <p>
          The Langlioni Micro is the first and only high temperature flatbread
          oven to use two independent burners and two independent control
          systems to regulate the temperature of the oven baking chamber and the
          oven floor independently.
        </p>
        <p>
          Now, for the first time, if the top of the pizza is perfect, but the
          bottom of the pizza is underdone, the temperature of the oven floor
          can be increased, while the baking chamber temperatures can remain the
          same.
        </p>
        <p>
          Baking temperatures for the chamber and oven floor air are
          independently adjustable to produce perfect results on both sides of
          the pizza.{" "}
        </p>
        <p>
          Once the perfect chamber and floor temperatures are tuned in for your
          perfect pizza, the oven will automatically return to these
          temperatures between baking cycles and display these process
          temperatures on the front of the oven, so that a complete oven refresh
          to target temperatures can be verified before the initiation of the
          next baking cycle.
        </p>
      </div>
    </div>
  );
};

export default What;
