//libraries
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

// styles
import AppStyles from "./App.module.css";

// component
import PageNotFound from "./pages/errors/not_found/PageNotFound";
import Home from "./pages/home/Home";
import { HOME, PAGE_NOT_FOUND } from "./utils/routes";

function App() {
  return (
    <div className={AppStyles.app}>
       <Router>
        <Routes>
          <Route path={HOME} element={<Home />} />
          <Route path={PAGE_NOT_FOUND} element={<PageNotFound />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
