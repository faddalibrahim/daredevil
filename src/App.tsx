//libraries
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

// styles
import AppStyles from "./App.module.css";

// component
import PageNotFound from "@pages/errors/not_found/PageNotFound";
import Homepage from "@pages/homepage/Homepage";
import Journey from "@pages/journeys/Journey";
import {
  CHALLENGE,
  CREATE,
  DASHBOARD,
  HOMEPAGE,
  PAGE_NOT_FOUND,
} from "@utils/routes";
import CustomChallenge from "@pages/challenge/CustomChllenge";
import Protected from "@pages/protected/Protected";

function App() {
  return (
    <div className={AppStyles.app}>
      <Router>
        <Routes>
          <Route path={HOMEPAGE} element={<Homepage />} />
          <Route path={DASHBOARD} element={<Protected />}>
            <Route path={CREATE} element={<Journey />} />
            <Route path={CHALLENGE} element={<CustomChallenge />} />
          </Route>
          <Route path={PAGE_NOT_FOUND} element={<PageNotFound />} />
        </Routes>
      </Router>
    </div>
  );
}
export default App;
