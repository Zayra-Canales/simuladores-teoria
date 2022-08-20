import React from 'react'
import { descripcionModelo, descripcionOfrece, nombreModelo } from '../Modelo'

const FormulacionModelo = () => {
    return (
        <div className='card' >

            <div className="card-header">
                {nombreModelo}
            </div>

            <div className="card-body">
                <div className="mt-2">
                    {descripcionModelo}
                </div>
                <div className="mt-2">
                    <label htmlFor="" className='card-title' style={{fontWeight: 'bold'}} > Ofrece </label>
                    <ul className="list-group">
                        {
                            descripcionOfrece.map((item, index) => {
                                return (
                                    <li key={index} className="list-group-item">{ item }</li>
                                )
                            })
                        }

                    </ul>

                </div>

            </div>

        </div>
    )
}

export default FormulacionModelo