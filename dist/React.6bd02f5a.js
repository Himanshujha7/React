const parent = React.createElement("div", {
    id: "parent"
}, React.createElement("div", {
    id: "child"
}, [
    React.createElement("h1", {}, "Hi im an H1 tag"),
    React.createElement("h2", {}, "im h2 btw")
]));
const heading = React.createElement("h2", {
    id: "heading"
}, "Heloow h2");
const root = ReactDOM.createRoot(document.getElementById("root"));
console.log(parent);
root.render(parent);

//# sourceMappingURL=React.6bd02f5a.js.map
