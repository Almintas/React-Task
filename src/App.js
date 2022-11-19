import './App.css';
import { Route, Routes } from 'react-router-dom';
import { Menu } from './Components/Menu/Menu.jsx';
import React from 'react';
import { PageLayout } from './Pages/PageLayout/PageLayout';

const HomePage = React.lazy(() => import('./Pages/Home/HomePage'));
const LoginPage = React.lazy(() => import('./Pages/Login/LoginPage'));
const RegisterPage = React.lazy(() => import('./Pages/Register/RegisterPage'));
const AddPage = React.lazy(() => import('./Pages/Add/AddPage'));

function App() {

  return (
    <div className="App">
      <Menu />
      <Routes>

        <Route path='/' element={<PageLayout />} />
        <Route index element={
          <React.Suspense fallback={<div>Loading...</div>}>
            <HomePage />
          </React.Suspense>
        } />

        <Route path='/add' element={
          <React.Suspense fallback={<div>Loading...</div>}>
            
            <AddPage />
          </React.Suspense>
        } />

        <Route>
          <Route path='/login' element={
            <React.Suspense fallback={<div>Loading...</div>}>
              <LoginPage />
            </React.Suspense>
          } />

          <Route path='/register' element={
            <React.Suspense fallback={<div>Loading...</div>}>
              <RegisterPage />
            </React.Suspense>
          } />
        </Route>
      </Routes>
    </div>
  );
}

export default App;