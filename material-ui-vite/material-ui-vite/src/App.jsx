import * as React from 'react';
import { Route, Routes } from 'react-router-dom';
import HomePage from './pages/HomePage';
import LoginPAge from './pages/LoginPAge';
import RegisterPage from './pages/RegisterPage';
import NosotrosPage from './pages/NosotrosPage';
import ContacPAge from './pages/ContacPAge';
import Inicio from '../src/pages/Arcanumlogeado/Inicio'
import Perfil from '../src/pages/Arcanumlogeado/Perfil'

export default function App() {
  return (
    <>

    <Routes>
      <Route path='/' element={<HomePage></HomePage>} />
      <Route path='/Login' element={<LoginPAge/>} />
      <Route path='/Register' element={<RegisterPage/>} />
      <Route path='/AboutUs' element={<NosotrosPage/>} />
      <Route path='/Contact' element={<ContacPAge/>} />
      <Route path='/inicio' element={<Inicio/>} />
      <Route path='/Perfil' element={<Perfil/>} />

    </Routes>

    </>
  );
}
