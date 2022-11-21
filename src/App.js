import './App.css';
import { Route, Routes } from 'react-router-dom';
import { Menu } from './Components/Menu/Menu.jsx';
import React, { useState } from 'react';
import { PageLayout } from './Pages/PageLayout/PageLayout';
import { RouteSuspense } from './Components/RouteSuspense/RouteSuspense';

const HomePage = React.lazy(() => import('./Pages/Home/HomePage'));
const LoginPage = React.lazy(() => import('./Pages/Login/LoginPage'));
const RegisterPage = React.lazy(() => import('./Pages/Register/RegisterPage'));
const AddPage = React.lazy(() => import('./Pages/Add/AddPage'));

function App() {
  const [user, setUser] = useState(null);
  const handleLogin = (userLoginEmail) => setUser({ userLoginEmail });


  return (
    <div className="App">
      <Menu />
      <Routes>

        <Route path='/' element={<PageLayout user={user} />}>
          <Route index element={
            <RouteSuspense>
              <HomePage />
            </RouteSuspense>
          } />

          <Route path='/add' element={
            <RouteSuspense>
              <AddPage />
            </RouteSuspense>
          } />
        </Route>

        <Route>
          <Route path='/login' element={
            <RouteSuspense>
              <LoginPage onLogin={handleLogin} />
            </RouteSuspense>
          } />

          <Route path='/register' element={
            <RouteSuspense>
              <RegisterPage />
            </RouteSuspense>
          } />
        </Route>
        
      </Routes>
    </div>
  );
}

export default App;