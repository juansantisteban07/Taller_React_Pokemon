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
        <NavLink to="/registro" className={({isActivate}) => (isActivate? 'active-tab': '')}>Registro</NavLink>
        <NavLink to="/buscador" className={({isActivate}) => (isActivate? 'active-tab': '')}>buscador</NavLink>
        <NavLink to="/inventario" className={({isActivate}) => (isActivate? 'active-tab': '')}>inventario</NavLink>
      </nav>
      </header>
      <main>
        <Route path="/registro" element={<navigate to="/registro" replace/>} />
        <Route path="/buscador" element={<BuscadorPokemon/>} />
        <Route path="/inventario" element={<InventarioPokemon/>} />
      </main>
      </BrowserRouter>
    </PokemonProvider>
  )
}

export default App;