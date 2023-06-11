import './App.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import PageNotFound from './pages/errors/not_found/PageNotFound'
import Home from './pages/home/Home'
import { CREATE, HOME } from './utils/routes';

function App() {

  return (
    <>
      <Router>
        <Routes>
          <Route path={HOME} element={<Home />} />
          {/* <Route path={CREATE} element={<Journey />} /> */}
          <Route path={PageNotFound} element={<PageNotFound />} />
        </Routes>
      </Router>
    </>
  )
}

export default App
