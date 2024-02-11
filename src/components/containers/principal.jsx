import React from 'react';
import { useState , useEffect} from 'react';
import obtenerConocimientos from '../models/conocimientos';
import obtenerPerfil from '../models/perfil';
import obtenerExperiencias from '../models/experiencias';
import obtenerHdv from '../models/hdv';
import obtenerContacto from '../models/contacto';

const Principal = () => {

    //nojoaaa


    const [botonSeleccionado, setBotonSeleccionado] = useState('perfil');

    const [contenidoMostrado, setContenidoMostrado] = useState(obtenerPerfil);


    const handleClickBoton = (boton) => {
    setBotonSeleccionado(boton.id);


    switch (boton) {
        case 'perfil':
            setContenidoMostrado(obtenerPerfil);
            activarAnimacion();
        break;
        case 'conocimientos':
            setContenidoMostrado(obtenerConocimientos);
            activarAnimacion();
        break;
        case 'experiencias':
            setContenidoMostrado(obtenerExperiencias);
            activarAnimacion();
        break;
        case 'hdv':
            setContenidoMostrado(obtenerHdv);
            activarAnimacion();
        break;
        case 'contacto':
            setContenidoMostrado(obtenerContacto);
            activarAnimacion();
        break;
        default:
            setContenidoMostrado('');
        break;
    }};



    const [animacionActiva, setAnimacionActiva] = useState(false);

    const activarAnimacion = () => {
      setAnimacionActiva(true);
      setTimeout(() => {
        setAnimacionActiva(false);
      }, 3000); // 3000 milisegundos (3 segundos)
    };

    return (
        <div class="container-fluid">
            <div class="row">
            <div class="col">
                <nav class="navbar navbar-expand-lg navbar-light bg-light">
                    <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"></span>
                    </button>
                    <div class="collapse navbar-collapse" id="navbarNav">
                        <ul class="navbar-nav ml-auto nav">
                            <li class="nav-item">
                                <btn class='btn btn-outline-primary' onClick={() => handleClickBoton('perfil')}>
                                <i className="bi bi-file-earmark-person-fill" ></i>
                                <b>Perfil</b></btn>
                            </li>
                            <li class="nav-item">
                                <btn class='btn btn-outline-danger' onClick={() => handleClickBoton('conocimientos')}>
                                <i class="bi bi-file-code-fill" ></i>
                                <b>Conocimientos</b></btn>
                            </li>
                            <li class="nav-item">
                                <btn class='btn btn-outline-success' onClick={() => handleClickBoton('experiencias')}>
                                <i class="bi bi-ui-checks-grid"></i>
                                <b>Experiencias</b></btn>
                            </li>

                            <li class="nav-item">
                                <btn class='btn btn-outline-warning' onClick={() => handleClickBoton('hdv')}>
                                <i class="bi bi-person-circle"></i>
                                <b>HDV</b></btn> 
                            </li>

                            <li>
                                <btn class="dropbtn btn btn-outline-info" onClick = {()=> handleClickBoton('contacto')}>
                                <i class="bi bi-person-lines-fill"></i>
                                <b>Contacto</b></btn>   
                            </li>


                        </ul>
                        
                    </div>
                </nav>
            </div>
            </div>

            <div className="contenidos">
                
            <div className={`contenido-mostrado ${animacionActiva ? 'animacion' : ''}`}>
                {contenidoMostrado}


                <footer class="bg-ligth text-black text-center py-3">
                    <p class="mb-0">&copy; 2023 Maicol Arroyave  - Todos los derechos reservados</p>
                </footer>
            </div>

            </div>

            
        </div>

    );
};



export default Principal;
