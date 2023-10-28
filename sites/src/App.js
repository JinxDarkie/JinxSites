//Central hub that decides which page to load.
import Wiki from './pages/wiki/Wiki.js';
import Landing from './pages/landing/Landing.js';

import {Routes, Route, Link} from 'react-router-dom';

function App() {
  return (
    <>
      <header>
        <h2>Jinxy's Sites</h2>
      </header>          
      <Routes>
        <Route path="/Wiki" element={<Wiki />}></Route>
        <Route path="/JinxSites" element={<Landing />}></Route>
      </Routes>
    </>
  );
}

export default App;
