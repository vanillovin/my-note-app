import React from 'react';
import {
  BrowserRouter as Router,
  Routes as ReactRoutes,
  Route,
} from 'react-router-dom';

import Diaries from '../pages/Diaries';

const Routes = () => {
  return (
    <Router>
      <ReactRoutes>
        <Route path="diary" element={<Diaries />}>
          {/* <Route path=":diaryId" element={<Diary />} /> */}
          {/* <Route path="new" element={} /> */}
        </Route>
      </ReactRoutes>
    </Router>
  );
};

export default Routes;
