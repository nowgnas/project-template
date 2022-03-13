import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import RootPage from "./components/views/RootPage/RootPage";

function App() {
  console.log("main page render");
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<RootPage />} />
      </Routes>
    </Router>
  );
}

export default App;
