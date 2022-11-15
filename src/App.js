import './App.css';
import { Route, Routes } from 'react-router-dom';
import { HomePage } from './Pages/Home/HomePage.jsx';
import { Menu } from './Components/Menu/Menu.jsx';
import { AddPage } from './Pages/Add/AddPage.jsx';
import { LoginPage } from './Pages/Login/LoginPage.jsx';
import { RegisterPage } from './Pages/Register/RegisterPage.jsx';

function App() {
  return (
    <div className="App">
      <Menu />
      <Routes>
        <Route>
          <Route path='/' element={<HomePage />} />
          <Route path='/Login' element={<LoginPage />} />
          <Route path='/register' element={<RegisterPage />} />
          <Route path='/add' element={<AddPage />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;