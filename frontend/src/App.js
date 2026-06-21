import React, { useState, useEffect } from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import Login from './components/Login';
import Signup from './components/Signup';
import TodoList from './components/TodoList';

function App() {
  const [isAuth, setIsAuth] = useState(!!localStorage.getItem('access_token'));

  useEffect(() => {
    setIsAuth(!!localStorage.getItem('access_token'));
  }, []);

  const handleLogout = () => {
    localStorage.removeItem('access_token');
    localStorage.removeItem('refresh_token');
    setIsAuth(false);
  };

  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/login"
          element={isAuth ? <Navigate to="/" /> : <Login onLogin={() => setIsAuth(true)} />}
        />
        <Route
          path="/signup"
          element={isAuth ? <Navigate to="/" /> : <Signup />}
        />
        <Route
          path="/"
          element={isAuth ? <TodoList onLogout={handleLogout} /> : <Navigate to="/login" />}
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
