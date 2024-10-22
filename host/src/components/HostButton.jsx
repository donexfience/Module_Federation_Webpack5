import { useState } from "react";
import Button from "remoteApp/button";

export const HostButton = () => {
  const [state, setState] = useState(0);
  return (
    <div>
      <h1>Host application </h1>
      <h4>remote button below click here</h4>
      <Button />
    </div>
  );
};

export default HostButton;
