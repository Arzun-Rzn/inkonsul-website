import { useState } from "react";

import Loader from "./components/Loader";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";

function App() {

  const [loading, setLoading] = useState(true);

  return (
    <>
      {loading && <Loader onFinish={() => setLoading(false)} />}

      {!loading && (
        <>
          <Navbar />
          <Home />
        </>
      )}
    </>
  );
}

export default App;
