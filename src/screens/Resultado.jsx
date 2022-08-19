import React from 'react'
import { Link, useParams } from 'react-router-dom'

const Resultado = () => {

    const { dato, enfermedad } =  useParams();

    return (
        <div className='card shadow' >
              <div className="card-header">
                <Link to={'/'} className="nav-link justify-contend-end" >Volver</Link>
            </div>
            <div className='card-body' >
                <div className='row' >
                <div className='col-md-6 p-5' >
                        <img src="https://kaelin.pe/wp-content/uploads/2022/01/VMT-Prevencio%CC%81n-de-enfermedades-en-invierno.png" alt="img" className='img-fluid' />
                    </div>
                    <div className='col-md-6 p-5 text-center' >
                        <h4 >Resultado </h4>
                        <p>La probabilidad de que padezca la enfermedad de <span style={ { fontWeight: 'Bold' } } >{ enfermedad } </span> es :  </p>

                        <h2 className='text-center' > { dato } % </h2>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Resultado