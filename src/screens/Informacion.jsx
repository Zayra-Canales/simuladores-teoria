import React from 'react'
import { enfermedades } from '../Enfermedades'

const Informacion = () => {

    const styleTitle = { fontWeight: 'bold' }

    return (
        <div className='card' >
            <div className="card-header">
                Información General
            </div>
            <div className="card-body">
                {
                    enfermedades.map((item, index) => {
                        return (
                            <div key={index} className='mt-2'>
                                <p className='card-title' style={styleTitle} > { item.nombre } </p>
                                <p className='text-muted' >{ item.descripcion }</p>
                            </div>
                        )
                    })
                }



            </div>
        </div>
    )
}

export default Informacion