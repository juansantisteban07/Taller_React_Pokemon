import { useState } from 'react';
import { Navigate, useNavigate } from 'react-router-dom';
import type { Usuario } from '../context/PokemonContext';

export const InventarioPokemon = () => {
    const [nombre, setNombre] = useState('');
    const [apellido, setApellido] = useState('');
    const [tipoDoc, setTipoDoc] = useState('CC');
    const [pais, setPais] = useState('');
    const [ciudad, setCiudad] = useState('');
    const [dni, setDni] = useState('');
    const [fechaNacimiento, setFechaNacimiento] = useState('');
    const [telefono, setTelefono] = useState('');
    const [correo, setCorreo] = useState('');
    const [datosPersonales, setDatosPersonales] = useState(false);

    const eventoSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        if (!datosPersonales) {
            alert('Debe aceptar el tratamiento de datos personales');
            return;
        }

        const nuevo: Usuario = {
            id: Date.now(),
            nombreCompleto: `${nombre} ${apellido}`.trim(),
            documento: { tipo: tipoDoc, numero: dni },
            fechaNacimiento,
            correo,
            telefono,
            residencia: `${ciudad}, ${pais}`,
            datosPersonales,
            fechaRegistro: new Date().toISOString(),
        };


    };

    return (
        <div>
            
        </div>
    );
};