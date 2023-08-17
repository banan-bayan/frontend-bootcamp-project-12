import React from "react";
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import PageLogin from './components/pageLogin/PageLogin.jsx';
import PageMain from './components/pageMain/PageMain.jsx';
import PageNotFound from './components/pageNotFound/PageNotFound.jsx';
import PageSignUp from './components/pageSignUp/PageSignUp.jsx';

function App() {
  return (
    <div className="app">
      <BrowserRouter>
        <Routes>
          <Route path="*" element={<PageNotFound />} />
          <Route path="/" element={<PageMain />} />
          <Route path="/login" element={<PageLogin />} />
          <Route path="/signup" element={<PageSignUp />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
