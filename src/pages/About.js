import React, { useEffect } from "react";
import { Helmet } from "react-helmet";

const About = () => {
    useEffect(() => {

        const checkElement = document.getElementById("bookafy-fancy-box");
        if (checkElement) {
            checkElement.parentNode.removeChild(checkElement);
        }



        const script = document.createElement("script");
        script.id = "bookafy_script";
        script.type = "text/javascript";
        script.src = "https://app.bookafy.com/bookafy-popup-code.js";
        document.body.appendChild(script);
        return () => {
            document.body.removeChild(script);
        }
    }, []);

    return (
        <div>
            <Helmet>
                <link
                    href="https://app.blocksw.dev/assets/mybookafyPopup.css.scss"
                    rel="stylesheet"
                    type="text/css"
                />
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
