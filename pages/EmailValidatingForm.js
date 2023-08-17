import React from "react";

// import EmailValidatingForm from "../src/emailValidatingForm";
import App from "../src/App";

function emailvalidating(){
    // return <EmailValidatingForm />;
    return <App pageName="EmailValidatingForm" /> //name of the file in src has to be the same as name in pages for the url to work.
}

export default emailvalidating;