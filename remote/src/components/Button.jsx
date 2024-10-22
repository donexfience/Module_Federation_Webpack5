import { useState } from "react";

export const Button = () => {
  const [state, setState] = useState(0);
  return (
    <div>
      <h3>Remote application-1</h3>
      <button className="shared-btn" onClick={() => setState((s) => s + 1)}>
        click me:{state}
      </button>
    </div>
  );
};

export default Button;
