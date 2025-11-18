import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./Home";
import Details from "./components/Details";

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" Component={Home} />
          <Route path="/details/:id" Component={Details} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
