import React, { useState, useCallback } from "react";
import "./index.css";
import { createBEM } from "./utils";
const bem = createBEM("translate");
const Translate = (props) => {
  const [state, setState] = useState(props?.msg);
  const onClick = useCallback(() => {
    setState("\u{1F433}");
    props.onClick();
  }, [props.onClick]);
  return /* @__PURE__ */ React.createElement("div", {
    className: bem()
  }, "Hello No Babel ", state, "!", /* @__PURE__ */ React.createElement("button", {
    onClick
  }, "\u70B9\u51FB"));
};
export default Translate;
