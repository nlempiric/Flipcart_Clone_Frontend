import React from "react";

function MenuItem({ name, children }) {
  return (
    <>
      <div>
        {name}
        {children && <div>{children}</div>}
      </div>
    </>
  );
}

export default MenuItem;
