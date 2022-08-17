import React from 'react'
import { Link, useParams } from 'react-router-dom'

const Resultado = () => {

    const { dato } =  useParams();

    return (
        <div className='card shadow' >
              <div className="card-header">
                <Link to={'/'} className="nav-link justify-contend-end" >Volver</Link>
            </div>
            <div className='card-body' >
                <div className='row' >
                <div className='col-md-6 p-5' >
                        <p>Imagen</p>
                    </div>
                    <div className='col-md-6 p-5 text-center' >
                        <h4 >Resultado </h4>
                        <p>La probabilidad de que padesca una enfermedad hereditarias es  </p>

                        <h2 className='text-center' > { dato } </h2>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Resultado