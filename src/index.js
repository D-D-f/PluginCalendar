import React from "react";
import { render } from "react-dom";
import { App } from "./lib";

const Calendar = () => (
  <div>
    <App />
  </div>
);

render(<Calendar />, document.getElementById("root"));
