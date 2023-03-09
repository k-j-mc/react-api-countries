import React from "react";

import Icons from "../components/Icons";

const ErrorPage = (props) => {

    return (
        <>
            <div style={{ textAlign: "center", paddingTop: "50px" }}>
                <Icons.SentimentNeutral style={{ fontSize: "100px", color: "#05c5fa" }} />
                <h4>Uh oh... Nothing to be found here...</h4> 
            </div>

        </>
        
    );
};

export default ErrorPage;