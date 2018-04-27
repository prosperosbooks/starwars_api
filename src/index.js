import React from "react";
import ReactDOM from "react-dom";
import "./containers/App.css";
import Card from "./components/Card";
import registerServiceWorker from "./registerServiceWorker";
import "tachyons";
import { starwarschars } from "./starwarschars";

ReactDOM.render(
    <div>
        <Card
            id={starwarschars[0].id}
            name={starwarschars[0].name}
            height={starwarschars[0].height}
            mass={starwarschars[0].mass}
        />

        <Card
            id={starwarschars[1].id}
            name={starwarschars[1].name}
            height={starwarschars[1].height}
            mass={starwarschars[1].mass}
        />

        <Card
            id={starwarschars[2].id}
            name={starwarschars[2].name}
            height={starwarschars[2].height}
            mass={starwarschars[2].mass}
        />
    </div>,
    document.getElementById("root")
);
registerServiceWorker();
