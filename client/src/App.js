import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import RootPage from "./components/views/RootPage";
import "./App.css";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={RootPage} />
      </Routes>
    </Router>
  );
}

export default App;
