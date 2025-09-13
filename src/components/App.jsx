import { useEffect } from "react";
import Portfoilo from "./Portfoilo";

const App = () => {
  useEffect(() => {
    window.history.scrollRestoration = "manual";
    window.scrollTo(0, 0);
  }, []);

  return <Portfoilo />;
};

export default App;
