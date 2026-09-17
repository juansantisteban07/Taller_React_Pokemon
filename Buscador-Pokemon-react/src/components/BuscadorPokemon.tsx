import React, { useState } from "react";
import { usePokemon, type PokemonTerjeta } from "../context/PokemonContext";

export const BuscadorPokemon: React.FC = ( ) => {

    const { entrenadorActivo, guardarPokemonMochila} = usePokemon();


    
    const [busqueda, setBusqueda] = useState('');
    const [pokemonActual, setPokemonActual] = useState<PokemonTerjeta | null>(null);
    const [mensajeError, setMensajeError] = useState<string | null>(null);
    const [cargando, setCargando] = useState(false);

    const buscarPokemon = async (e: React.FormEvent) => {
        e.preventDefault();

        const query = busqueda.trim().toLocaleLowerCase();

        if(!query) return;


        setCargando(true);
        setMensajeError(null);

        try {
            const res = await fetch(`https://pokeapi.co/api/v2/pokemon/${query}`);
            if(!res.ok) throw new Error('Callate sapo')

            const datos = await res.json();
            setPokemonActual({
                 id: datos.id,
                nombre: datos.name,
                image: datos.sprites.front_default,
                type:datos.types[0].type.name,
                baseExperience: datos.base_experience,
                esFavorito : false
            });
        } catch (error: any) {
                setPokemonActual(null);
                setMensajeError(error.message);
        } finally {
            setCargando(false);
        }
    
    };

    const clickGuardar = () => {
        if(pokemonActual){
            guardarPokemonMochila(pokemonActual);
            alert(`El pokemon ${pokemonActual.nombre} es guardado en la mochilla de ${entrenadorActivo?.nombreCompleto}`)
        }
    }


    return(
        <><div>
            {entrenadorActivo ? (<p>Mochilla Activa: <strong>{entrenadorActivo.nombreCompleto}</strong></p>
            ) : (<p>No hay entrenador Activo mi rey, valla a RegistroUsuario y creelo </p>)}
        </div><form onSubmit={buscarPokemon}>
                <div>
                    <label htmlFor="">Buscar Pokemon</label>
                    <input type="text" value={busqueda} onChange={(e) => setBusqueda(e.target.value)} placeholder="Ej: maricon" />
                </div>

                <button type="submit" disabled={cargando}>
                    {cargando ? 'Escaneando...' : 'Buscar'}
                </button>
            </form>
                {pokemonActual &&(
            <div>
                <h4>{pokemonActual.nombre}</h4>
                <img src={pokemonActual.image} />
                <p>
                    Elemento: {' '}
                    <span style={{
                        backgroundColor:
                        pokemonActual.type === 'fire' ? '#ff0000' :
                        pokemonActual.type === 'water' ? '#0000ff' :
                        pokemonActual.type === 'grass' ? '#00ff00' : 
                        pokemonActual.type === 'electric' ? '#ffff00' : 
                        pokemonActual.type === 'psychic' ? '#ff00ff' :
                        pokemonActual.type === 'ice' ? '#00ffff' :
                        pokemonActual.type === 'dragon' ? '#800080' :
                        pokemonActual.type === 'dark' ? '#000000' :
                        pokemonActual.type === 'fairy' ? '#ffc0cb' :
                        pokemonActual.type === 'normal' ? '#808080' :
                        pokemonActual.type === 'fighting' ? '#a52a2a' :
                        pokemonActual.type === 'flying' ? '#87ceeb' :
                        pokemonActual.type === 'poison' ? '#800080' : 
                        pokemonActual.type === 'ground' ? '#ddb870' : 
                        pokemonActual.type === 'bug' ? '#a8b820' :    
                        pokemonActual.type === 'rock' ? '#b8a038' :   
                        pokemonActual.type === 'steel' ? '#b8b8d0' :  
                        pokemonActual.type === 'ghost' ? '#705898' :  
                        '#cdcace',
                        color: 'white',
                        padding: '3px 8px',
                        borderRadius: '10px'
                    }}>
                        {pokemonActual.type.toUpperCase()}
|
                    </span>
                </p>
                <p>Experiencia Base: <strong>{pokemonActual.baseExperience}</strong></p>

                <button type= "button" className="btn-capturar" onClick={clickGuardar} disabled={!entrenadorActivo}>
                    Guardar en la mochila
                </button>
            </div>)}
        

        
            </>
            
        
    )

}