import { React, useState, useMemo } from 'react';
import { useLocation, Navigate } from 'react-router-dom';
import { Button } from 'react-bootstrap';
import useAuth from '../hooks/UseAuth.jsx';
import AuthContext from '../contexts/context.jsx';
import routes from '../roures/routes.js';

export const AuthProvider = ({ children }) => {
  const [loggedIn, setLoggedIn] = useState(false);

  const logIn = () => setLoggedIn(true);
  const logOut = () => {
    localStorage.removeItem('userId');
    setLoggedIn(false);
  };
  const getUserName = () => JSON.parse(localStorage.getItem('userId')).username;
  const checkToken = () => {
    const token = JSON.parse(localStorage.getItem('userId')) ?? null;
    if (token) {
      return true;
    }
    return false;
  };
  const setToken = (token) => localStorage.setItem('userId', JSON.stringify(token));
  const memo = useMemo(() => ({
    loggedIn, logIn, logOut, getUserName, setToken, checkToken,
  }), []);

  return (
    <AuthContext.Provider value={memo}>
      {children}
    </AuthContext.Provider>
  );
};

export const AuthButton = () => {
  const auth = useAuth();
  return (
    <Button onClick={auth.logOut}>
      Выйти
    </Button>
  );
};

export const PrivateRoute = ({ children }) => {
  const auth = useAuth();
  const location = useLocation();

  return (
    auth.loggedIn
      ? children
      : <Navigate to={routes.loginPage()} state={{ from: location }} />
  );
};

export const getAuthHeader = () => {
  const userId = JSON.parse(localStorage.getItem('userId'));

  if (userId && userId.token) {
    return { Authorization: `Bearer ${userId.token}` };
  }
  return {};
};
