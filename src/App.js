import React, { useState } from "react";
import { Page1 } from "./components/page1"
const CountContext = React.createContext();
function App(prop) {
  const [num, setNum] = useState(10);
  return <CountContext.Provider value={num}>
    <Page1 />
  </CountContext.Provider>;
}
export default App;
