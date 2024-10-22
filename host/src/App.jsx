import React, { useState, Suspense } from "react";
import "./App.css";
const RemoteButton = React.lazy(() => import("remoteApp/Button"));

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <h2>Host</h2>
      <Suspense fallback={<div>"Loading"</div>}>
        <RemoteButton />
      </Suspense>
    </>
  );
}

export default App;
