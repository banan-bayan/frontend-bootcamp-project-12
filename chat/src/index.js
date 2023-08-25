import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.js';
import 'bootstrap/dist/css/bootstrap.min.css';
// import { Provider } from 'react-redux';
// import store from './components/store/store';
// import { AuthProvider } from './components/providers/AuthProvider.jsx';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    {/* <Provider store={store}> */}
      {/* <AuthProvider> */}
        <App />
      {/* </AuthProvider> */}
    {/* </Provider> */}
  </React.StrictMode>,
);
