import './App.css'; 
import { BrowserRouter, Routes, Route, NavLink, Navigate } from 'react-router-dom';
import { PokemonProvider } from './context/PokemonContext';
import { RegistroUsuario } from './components/RegistroUsuario';
import { BuscadorPokemon } from './components/BuscadorPokemon';
import { InventarioPokemon } from './components/InventarioPokemon';




function App(){
  return( 
    <PokemonProvider>
      <BrowserRouter>
      <header>
        <h1>Registro de entrenadores mi Pokemon en React</h1>


      <nav>
        <NavLink to="/registro" className={({ isActive }: { isActive: boolean }) => (isActive ? 'active-tab' : '')}>Registro</NavLink>
        <NavLink to="/buscador" className={({ isActive }: { isActive: boolean }) => (isActive ? 'active-tab' : '')}>buscador</NavLink>
        <NavLink to="/inventario" className={({ isActive }: { isActive: boolean }) => (isActive ? 'active-tab' : '')}>inventario</NavLink>
      </nav>
      </header>
      <main className='fondo-url'>
        <Routes>
          <Route path="/" element={<Navigate to="/registro" replace />} />
          <Route path="/registro" element={<RegistroUsuario />} />
          <Route path="/buscador" element={<BuscadorPokemon/>} />
          <Route path="/inventario" element={<InventarioPokemon/>} />
        </Routes>
      </main>
      </BrowserRouter>
    </PokemonProvider>
  )
}

export default App;


