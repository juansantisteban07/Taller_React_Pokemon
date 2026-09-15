import React, { useState } from "react";
import { useNavigate } from "react-router-dom"
import { usePokemon, type PokemonTerjeta } from "../context/PokemonContext";

export const BuscadorPokemon: React.FC = ( ) => {

    const {entrenadores, entrenadorActivo, RegistrarEntrenador, seleccionarEntrenador} = usePokemon();
    const navigate = useNavigate();

    const [ nombre, setNombre  ] = useState('');
    const [ apellido, setApellido] = useState('');
    const [ tipoDoc, setTipoDoc] = useState('CC');
    const [ dni, setDni ] = useState('');
    const [ PaísDeDomicilio, setPaisDeDomicilio] = useState('');
    const [ CiudadDeDomicilio, setCiudad_de_domicilio] = useState('');
    const [ telefono, setTelefono] = useState('');
    const [ fechaNacimiento, setFechaNacimiento] = useState('');
    const [ correo, setCorreo] = useState('');
    const [ datosPersonales, setDatosPersonales] = useState('');

    const eventoSubmit = (e: React.FormEvent) => {
        e.preventDefault();

        if(!datosPersonales) {
            alert('Aceptar politica de privacidad')
            return;
        }

        const nuevo: Usuario = {
            id: Date.now(),
            nombreCompleto: `${nombre} ${apellido}`,
            documento: {tipo: tipoDoc, numero: dni},
            PaísDeDomicilio,
            CiudadDeDomicilio,
            fechaNacimiento,
            telefono,
            correo,
            datosPersonales,
            fehcaRegistro: new Date().toLocaleDateString()
        };

        RegistrarEntrenador(nuevo);
        navigate('/pokemon');
    };

    return(
        <div>
            <header>
                <h2> Registro de Entrenadores</h2>
            </header>
        <div>
        <form onSubmit={eventoSubmit}>
            <form id="FormularioRegistro" action="#">
            
            
            <div className="form-group">
                <label htmlFor="nombres">Nombres:</label>
                <input type="text" id="nombres" value={nombre} onChange={(e) => setNombre(e.target.value)} name="nombres" placeholder="Ingresa tus nombres" required/>
            </div>

           
            <div className="form-group">
                <label htmlFor="apellidos">Apellidos:</label>
                <input type="text" id="apellidos" value={apellido} onChange={(e) => setApellido(e.target.value)} name="apellidos" placeholder="Ingresa tus apellidos" required/>
            </div>

            
            <div className="form-group">
                <label htmlFor="tipo-id">Tipo de documento:</label>
                <select id="tipo-id" value={tipoDoc} onChange={(e) => setTipoDoc(e.target.value)} name="tipo-id" required>
                    <option value="" disabled selected>Seleccione una opción</option>
                    <option value="Cédula de ciudadanía">Cédula de ciudadanía</option>
                    <option value="Tarjeta de identidad">Tarjeta de identidad</option>   
                    <option value="Pasaporte">Pasaporte</option>
                    <option value="Cédula de extranjería">Cédula de extranjería</option>
                    </select>
            </div>

            
            <div className="form-group">
                <label htmlFor="numero-doc">Número de documento:</label>
                <input type="text" id="numero-doc" value={dni} onChange={(e) => setDni(e.target.value)} name="numero-doc" placeholder="Ingresa tu número de documento" required/>
            </div>

            
            <div className="form-group">
                <label htmlFor="pais">País de domicilio:</label>
                <select id="pais" value={PaísDeDomicilio} onChange={(e) => setPaís_de_domicilio(e.target.value)} name="pais" required>
                    <option value="" disabled selected>Seleccione un país</option>
                    <option value="Colombia">Colombia</option>
                    <option value="Estados Unidos">Estados Unidos</option>
                    <option value="España">España</option>
                </select>
            </div>

            
            <div className="form-group">
                <label htmlFor="ciudad">Ciudad de domicilio:</label>
                <select id="ciudad" value={CiudadDeDomicilio} onChange={(e) => setCiudad_de_domicilio(e.target.value)} name="ciudad" required>
                    <option value="" disabled selected>Seleccione una ciudad</option>
                    <option value="Bogotá, D.C.">Bogotá, D.C.</option>
                    <option value="Medellín">Medellín</option>
                    <option value="Cali">Cali</option>
                    <option value="Barranquilla">Barranquilla</option>
                    <option value="Cartagena">Cartagena</option>
                </select>
            </div>

           
            <div className="form-group">
                <label htmlFor="telefono">Número de teléfono:</label>
                <input type="tel" id="telefono" value={telefono} onChange={(e) => setTelefono(e.target.value)} name="telefono" pattern="[0-9]{10}" placeholder="Ej: 3191234567" required/>
            </div>

            
            <div className="form-group">
                <label htmlFor="correo">Correo electrónico:</label>
                <input type="email" id="correo" value={correo} onChange={(e) => setCorreo(e.target.value)} name="correo" placeholder="ejemplo@correo.com" required/>
            </div>

          
            <div className="terms-group">
                <input type="checkbox" id="terminos" checked={datosPersonales} onChange={(e) => setDatosPersonales(e.target.checked)} name="terminos" required/>
                <label htmlFor="terminos" className="terms-label">
                    Acepto los términos y condiciones
                    <a href="https://www.funcionpublica.gov.co/eva/gestornormativo/norma.php?i=49981" target="_blank" rel="noopener noreferrer">Tratamiento de datos</a>
                </label>
            </div>

            
            <button type="submit" className="btn-submit">Enviar formulario</button>
        </form>

        </form>
        </div>

        </div>
    )

}