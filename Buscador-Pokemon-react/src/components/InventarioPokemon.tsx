import React from 'react';
import { usePokemon } from '../context/PokemonContext';


export const InventarioPokemon : React.FC = () => {

    const { entrenadorActivo, eliminarPokemon, actualizarFavorito, mochilaActual } = usePokemon();

    if(!entrenadorActivo) {
        return (
            <div className='entrenador-txt'>
                <h3> NO HAY ENTRENADORES </h3>
                <p>Por favor asigne <strong>entrenador activo</strong> o registre un entrenador.</p>
            </div>
        );
    }

    return (
        <div className="banner-sesion">
            <header>
                <h2>Mochila de {entrenadorActivo.nombreCompleto}</h2>
            </header>

            <div className="grid-mochila">
                {mochilaActual.length > 0 ? (
                    mochilaActual.map((poke, index) => (
                        <div key={poke.id} className={`tarjeta-item ${poke.esFavorito ? 'tajeta-favorita' : ''}`}>
                            <span>#{index + 1} de {mochilaActual.length}</span>

                            <img src={poke.image} alt={poke.nombre}></img>
                            <h4>{poke.nombre}</h4>
                            <p> {poke.type}</p>

                            <div className='panel-botones'>
                                <button
                                    className={`btn-fav ${poke.esFavorito ? 'fav-activo' : ''}`}
                                    onClick={() => actualizarFavorito(poke.id)}>
                                        {poke.esFavorito ? '🌟favorito': '📌marcar'}
                                </button>

                                <button type='button' className='btn-eliminar' onClick={() => eliminarPokemon(poke.id)}>Eliminar</button>
                                
                            </div>
                        </div>
                    ))
                ) : (
                    <div>
                        <p> Tu mochila esta vacia actualmente.</p>
                        <p> Vaya y capture pokemon, papi</p>
                    </div>
                )
                }
            </div>
        </div>
    );
};