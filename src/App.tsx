//libraries
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

// styles
import AppStyles from "./App.module.css";

// component
import PageNotFound from "@pages/errors/not_found/PageNotFound";
import Homepage from "@pages/homepage/Homepage";
import Protected from "@pages/protected/Protected";
import Journey from "@pages/journeys/Journey";

//constants
import { CREATE, DASHBOARD, HOMEPAGE, PAGE_NOT_FOUND } from "@utils/routes";

function App() {
  return (
    <div className={AppStyles.app}>
      <Router>
        <Routes>
          <Route path={HOMEPAGE} element={<Homepage />} />
          <Route path={DASHBOARD} element={<Protected />}>
            <Route path={CREATE} element={<Journey />} />
            {/* <Route path={HOME} element={<Home />} /> */}
          </Route>
          <Route path={PAGE_NOT_FOUND} element={<PageNotFound />} />
        </Routes>
      </Router>
    </div>
  );
}
export default App;
