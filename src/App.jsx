import { BrowserRouter, Route, Routes } from 'react-router-dom';

import Header from './components/Header';
import Footer from './components/Footer';

import Inicio from './pages/Inicio';
import Laptop from './pages/Laptop';
import Movil from './pages/Movil';
import Error404 from './pages/Error404';
import Franelas from './pages/Franelas';
import Perfumes from './pages/Perfumes';
import Equipamento from './pages/Equipamento';
import Groceries from './pages/Groceries';
import Moto from './pages/Moto';


// 🟢 FASE 1: Maqueta base limpia sin dependencias de router. Cero errores.
const App = () => {
  return (
    <BrowserRouter>
      <div className="min-h-screen flex flex-col bg-slate-950 text-slate-100 font-sans selection:bg-emerald-500/30 selection:text-emerald-200">
        {/* 1. Barra de navegación fija */}
        <Header />

        {/* 2. Contenido principal: Pantalla de Bienvenida */}
        <main className="flex-grow">

          <Routes>

            <Route path ='/' element={<Inicio/>}  />
            <Route path='/laptops' element={<Laptop/>}/>
            <Route path='/movil' element={<Movil/>}/>
            <Route path='/franelas' element={<Franelas/>}/>
            <Route path='/perfumes' element={<Perfumes/>}/>
            <Route path='/equipamento' element={<Equipamento/>}/>
            <Route path='/groseries' element={<Groceries/>}/>
            <Route path='/moto' element={<Moto/>}/>
            <Route path='*' element={<Error404/>}/>

          </Routes>


        </main>

        {/* 3. Pie de página comercial */}
        <Footer />
      </div>

    </BrowserRouter>
  );
};

export default App;