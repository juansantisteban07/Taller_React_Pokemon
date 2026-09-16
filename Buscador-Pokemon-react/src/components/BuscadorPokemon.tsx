import { useState } from 'react';
import { usePokemon, type PokemonTerjeta } from '../context/PokemonContext';

export const BuscadorPokemon : React.FC = () => {

    const { entrenadorActivo, guardarPokemonMochila } = usePokemon();
    const [busqueda, setBusqueda] = useState('');
    const [pokemonActual, setPokemonActual] = useState<PokemonTerjeta | null>(null);
    const [mensajeError, setMensajeError] = useState<string | null>(null);
    const [cargando, setCargando] = useState(false);


    const buscarPokemon = async (e: React.FormEvent) => {
        e.preventDefault();

        const query = busqueda.trim().toLowerCase();

        if (!query) return;

            setCargando(true);
            setMensajeError(null);

            try{
                const res = await fetch(`https://pokeapi.co/api/v2/pokemon/${query}`);
                if(!res.ok) throw new Error('axulio, soccoro, no hay pokemon');

                const datos = await res.json();
                setPokemonActual({
                    id: datos.id,
                    nombre: datos.name.toUpperCase(),
                    image: datos.sprites.front_default,
                    type: datos.types[0].type.name,
                    baseExperience: datos.base_experience,
                    esFavorito: false
                });
            } catch (error: any) {
                setPokemonActual(null);
                setMensajeError(error.message);
            } finally {
                setCargando(false);
            }

    };

    return (
        <>
        <div>
            {entrenadorActivo ? (
                <p>Mochila Activa de: <strong>{entrenadorActivo.nombreCompleto}</strong></p>
            ) : (
                <p> No hay entrenador activo. ve al formulario de registro para activarlo, socio.</p>
            )}
        </div><form onSubmit={buscarPokemon}>
                <div>
                    <label>Buscar Pokemon</label>
                    <input type="text" value={busqueda} onChange={(e) => setBusqueda(e.target.value)} placeholder='ej: Pikachu, charmander' />
                </div>
                <button type='submit' disabled={cargando}>
                    {cargando ? 'Escaneando...' : 'Buscar'}
                </button>
            </form>
            {pokemonActual &&(
            <div>
                <h4>{pokemonActual?.nombre}</h4>
                <img src="{pokemonActual.image}" />}
            </div>
            )
            }
        </>

    );
};