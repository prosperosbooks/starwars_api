import React from "react";
import ReactDOM from "react-dom";
import "./containers/App.css";
import Card from "./components/Card";
import CardList from "./components/CardList";
import App from "./containers/App";
import registerServiceWorker from "./registerServiceWorker";
import "tachyons";
import "./containers/App.css"

// to create a component, first you:
// 1. write "import CardList from "./components/CardList" on top of index.js
// 2. create the actual CardList.js component file
// 3. you want all the Card components rendered below to be rendered by CardList
// 4.

ReactDOM.render(<App />, document.getElementById("root"));
registerServiceWorker();

// move <CardList starwarschars={starwarschars}/> to render in
// separate App.js file. Going forward, ReactDOM.render will just render App.js
