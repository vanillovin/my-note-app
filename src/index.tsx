import React from 'react';
import ReactDOM from 'react-dom';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import './index.css';
import App from './App';
import Diaries from './pages/Diaries';
import Header from './components/layout/Header';
import Calendar from './pages/Calendar';

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="diary" element={<Diaries />}>
          {/* <Route path=":diaryId" element={<Diary />} /> */}
          {/* <Route path="new" element={} /> */}
        </Route>
        <Route path="calendar" element={<Calendar />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
