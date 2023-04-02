import { BrowserRouter as Router } from "react-router-dom";
import { AppRouter } from "./router/AppRouter";

import Navbar from "./components/Navbar/Navbar";

import "./scss/App.scss";

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
        <AppRouter />
      </Router>
    </div>
  );
}

export default App;
