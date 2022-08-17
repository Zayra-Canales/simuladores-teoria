import React from 'react'
import { useParams } from 'react-router-dom'
import imagen from '../assets/imagen-1.png'

const ResultadoEsperanza = () => {


    const { dato } = useParams();

    return (
        <div className='card shadow' >
            <div className='card-body' >
                <div className='row' >
                    <div className='col-md-6 p-5' >
                        <img src={imagen} alt="img" className='img-fluid' />
                    </div>
                    <div className='col-md-6 p-5 text-center' >
                        <h4 >Resultado </h4>
                        <p>La esperanza de vida es </p>
                        <h2>{ dato }</h2>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ResultadoEsperanza