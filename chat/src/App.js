import React from "react";
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import PageLogin from './components/PageLogin.jsx';
import PageSlash from './components/PageSlash.jsx';
import PageNotFound from './components/PageNotFound404.jsx';

function App() {
  return (
    <div className="app">
      <BrowserRouter>
      <Routes>
        <Route path="*" element={<PageNotFound />} />
        <Route path="/" element={<PageSlash />} />
        <Route path="/login" element={<PageLogin />} />
      </Routes>
    </BrowserRouter>
    </div>
  );
}

export default App;
