import React from "react";

const RadioCheck = ({title}) => {
  return (
    <div>
      <div className="form-check">
        <input
          className="form-check-input"
          type="checkbox"
          defaultValue=""
          id="flexCheckDefault"
        />
        <label className="form-check-label" htmlFor="flexCheckDefault">
          {title}
        </label>
      </div>
    </div>
  );
};

export default RadioCheck;
