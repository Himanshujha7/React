import React from "react";
import ReactDOM from "react-dom/client";

const parent= React.createElement("div",{id:"parent"},
    React.createElement("div",{id:"child"},
        [React.createElement("h1",{}, "Hi im an H1 tag"), 
        React.createElement("h2",{},"im h2 btw")])
);


const root = ReactDOM.createRoot(document.getElementById("root"));

console.log(parent); 
root.render(parent);