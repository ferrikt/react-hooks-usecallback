import React from "react";

function Counter({ text, value }) {
  console.log(`rendering ${text}`);
  return (
    <div>
      {text} value is {value}
    </div>
  );
}

export default React.memo(Counter);
