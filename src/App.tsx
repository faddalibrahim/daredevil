//libraries
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

// styles
import AppStyles from "./App.module.css";

// component
import PageNotFound from "@pages/errors/not_found/PageNotFound";
import Homepage from "@pages/homepage/Homepage";
import Protected from "@pages/protected/Protected";
import Home from "@pages/protected/home/Home";
import CreateFreakJourney from "@pages/protected/create_freak_journey/CreateFreakJourney";
import Freakpool from "@pages/protected/freakpool/Freakpool";
import Profile from "@pages/protected/profile/Profile";
import Journeys from "@pages/protected/journeys/Journeys";
import Settings from "@pages/protected/settings/Settings";
import CustomChallenge from "@pages/protected/custom_challenge/tomChallenge";


//constants
import {
  CREATE_FREAK_JOURNEY,
  DASHBOARD,
  HOMEPAGE,
  HOME,
  PAGE_NOT_FOUND,
  SETTINGS,
  PROFILE,
  FREAKPOOL,
  JOURNEYS,
  CHALLENGE,
} from "@utils/routes";

import { AuthProvider } from "@contexts/AuthContext";

function App() {
  return (
    <AuthProvider>
      <div className={AppStyles.app}>
        <Router>
          <Routes>
            <Route path={HOMEPAGE} element={<Homepage />} />
            <Route path={DASHBOARD} element={<Protected />}>
              <Route path={HOME} element={<Home />} />
              <Route path={JOURNEYS} element={<Journeys />} />
              <Route path={CHALLENGE} element={<CustomChallenge />} />
              <Route path={FREAKPOOL} element={<Freakpool />} />
              <Route path={PROFILE} element={<Profile />} />
              <Route path={SETTINGS} element={<Settings />} />
              <Route
                path={CREATE_FREAK_JOURNEY}
                element={<CreateFreakJourney />}
              />
            </Route>
            <Route path={PAGE_NOT_FOUND} element={<PageNotFound />} />
          </Routes>
        </Router>
      </div>
    </AuthProvider>
  );
}
export default App;
