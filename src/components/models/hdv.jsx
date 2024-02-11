import React from 'react';

const obtenerHdv = () => {

    

    return (
        <div className='hdv'>
            
            <div class="pdf-container">
                <div className='container-fluid x'>
                    <h1 className='tittle'>Maicol Arroyave - HDV</h1>
                    <a href='https://drive.google.com/file/d/1aM3_4Wq5OsipJ1a1YX54bXSwuRY0jg3s/view?usp=sharing'
                        className='btn btn-warning'
                        target='_blank'>
                        <i class="bi bi-arrow-down-circle"></i>
                        <h5>Descargar HV</h5>
                    </a>


                </div>
                <div className='imagen'>
                    <img className='hdvimg' src={process.env.PUBLIC_URL + '/CV Maicol AA Septiembre 2023.jpg'
                    } alt="Mi Imagen"
                    width="5000"   
                    height="1000">

                </img>


                </div>
                


                
            </div>
        </div>
    );
}

export default obtenerHdv;