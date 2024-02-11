
import React from 'react';

const obtenerContacto = () => {
    return (
        <div className='contacto'>
            <h2 className='contactTitle'>Medios de contacto</h2>

            <div className="row text-center itemscontact">
                <div className="col-6 col-md-3 mb-3  ">
                    <a className='itemC' href="https://github.com/MaicolAA" role="button" target="_blank">
                        <i className="bi bi-github"></i>
                        <p>Github</p>
                    </a>
                </div>
                <div className="col-6 col-md-3 mb-3">
                    <a className='itemC' href="mailto:maicolaroyave10@gmail.com" role="button" target="_blank">
                        <i className="bi bi-envelope"></i>
                        <p>Email</p>
                    </a>
                </div>
                <div className="col-6 col-md-3 mb-3">
                    <a className='itemC' href="https://www.linkedin.com/in/maicolaa/" role="button" target="_blank">
                        <i className="bi bi-linkedin"></i>
                        <p>LinkedIn</p>
                    </a>
                </div>
                <div className="col-6 col-md-3 mb-3">
                    <a className='itemC' href="https://wa.me/573001188573?text=I'm%20interested%20in%20your%20services" role="button" target="_blank">
                        <i className="bi bi-whatsapp"></i>
                        <p>WhatsApp</p>
                    </a>
                </div>
            </div>



            <div class="container">
    <div class="row justify-content-center">
        <div class="col-md-8">
            <div class="table-responsive">
                <table id="laTabla" class="table table-striped tableC">
                    <thead>
                        <tr>
                            <th>Medio de Contacto</th>
                            <th>Mi contacto</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>Email</td>
                            <td>maicolaroyave10@gmail.com</td>
                        </tr>
                        <tr>
                            <td>LinkedIn</td>
                            <td><a href="https://www.linkedin.com/in/maicolaa/" target="_blank">https://www.linkedin.com/in/maicolaa/</a></td>
                        </tr>
                        <tr>
                            <td>WhatsApp</td>
                            <td>+57 3001188573</td>
                        </tr>
                        <tr>
                            <td>Teléfono</td>
                            <td>+57 3128797122</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    </div>
</div>
            
    </div>
    );
}

export default obtenerContacto;
