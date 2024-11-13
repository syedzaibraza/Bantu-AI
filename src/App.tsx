import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Layout from "./components/Layout";
import Loading from "./components/Loading";

function App() {
  const Home = React.lazy(() => import("./pages/home"));

  return (
    <>
      <Router>
        <React.Suspense fallback={<Loading />}>
          <Routes>
            <Route element={<Layout />}>
              <Route path="/" element={<Home />} />
            </Route>
          </Routes>
        </React.Suspense>
      </Router>
    </>
  );
}

export default App;
