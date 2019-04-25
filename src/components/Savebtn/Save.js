import React from "react";
import "./style.css";

// The ...props means, spread all of the passed props onto this element
// That way we don't have to define them all individually
function SaveBtn(props) {
  return (
<<<<<<< HEAD
    <button>
      <span className="save-btn" {...props} role="button" tabIndex="0">
        Save
=======
    <span className="btn btn-success" {...props} role="button" tabIndex="0">
      Save
>>>>>>> 85e118da9c9af14c79b3b75dcb69f72a3e998c34
    </span>
    </button>

  );
}

export default SaveBtn;
