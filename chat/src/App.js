import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import PageLogin from './components/pageLogin/PageLogin.jsx';
import PageMain from './components/pageMain/PageMain.jsx';
import PageNotFound from './components/pageNotFound/PageNotFound.jsx';
import PageSignUp from './components/pageSignUp/PageSignUp.jsx';
import routes from './roures/routes.js';
import { PrivateRoute } from './components/providers/AuthProvider.jsx';

function App() {
  return (
    <div className="app">
      <BrowserRouter>
        <Routes>
          <Route path={routes.pageNotFound()} element={<PageNotFound />} />
          <Route path={routes.pageMain()} element={<PrivateRoute><PageMain /></PrivateRoute>} />
          <Route path={routes.pageLogin()} element={<PageLogin />} />
          <Route path={routes.pageSignUp()} element={<PageSignUp />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
