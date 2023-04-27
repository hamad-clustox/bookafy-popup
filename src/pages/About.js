import React from "react";
import {Helmet} from "react-helmet";

const About = () => {
  return (
    <div>
      <Helmet>
          <script
              id="bookafy_script"
              type="text/javascript"
              src="https://app.blocksw.dev/bookafy-popup-code.js"
          ></script>
      </Helmet>
      <h2>About</h2>
      <button
        id="app-scheduling"
        className="custom_button btn-simple active templates_color"
        data-domain-name={`https://lawmarketeplace.blocksw.dev/awais-mazher?locale=en&description=${2342}`}
      >
        Book Now
      </button>
    </div>
  );
};

export default About;
