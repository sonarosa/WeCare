import React from "react";
import ColorChanger from "./ColorChanger";

function WithColorChanger(Component) {
  return function WithColorChangerComponent(props) {
    return (
      <div>
        <ColorChanger />
        <Component {...props} />
      </div>
    );
  };
}

export default WithColorChanger;
