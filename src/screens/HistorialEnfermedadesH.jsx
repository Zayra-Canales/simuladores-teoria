import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

const HistorialEnfermedadesH = () => {

    const [keyLSHereditarias] = useState("Hereditarias")

    const [dataLocal, setDataLocal] = useState([])

    useEffect(() => {
        setDataLocal(localStorage.getItem(keyLSHereditarias) ? JSON.parse(localStorage.getItem(keyLSHereditarias)) : []);
    }, [])


    return (
        <div className='card shadow' >
            <div className="card-header">
                <Link to={'/enfermedades-hereditarias'} className="nav-link justify-contend-end" >Volver</Link>
            </div>
            <div className='card-body' >

                <h5 className='m-5 text-center' >HIstorial</h5>

                <div className="container m-3">
                    {
                        dataLocal.length == 0 ? (<h3 className='text-center' >No hay resultados</h3>) :
                            (
                                <table className="table">
                                    <thead>
                                        <tr>
                                            <th scope="col">#</th>
                                            <th scope="col">Nombre</th>
                                            <th scope="col">Genero</th>
                                            <th scope="col">Edad</th>
                                            <th scope="col">Esperanza</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {
                                            dataLocal.map((item, index) => {
                                                return (
                                                    <tr key={item.nombre} >
                                                        <th scope="row">{++index} </th>
                                                        <th> {item.nombre} </th>
                                                        <td>{item.genero === 'F' ? 'Fememnino' : 'Masculino'} </td>
                                                        <td>{item.edad} </td>
                                                        <td>{item.porcentage}% </td>
                                                    </tr>
                                                )
                                            })
                                        }


                                    </tbody>
                                </table>
                            )
                    }
                </div>
            </div>
            <div className="card-footer">
                <button className='btn btn-sm btn-default' onClick={() => {
                    localStorage.removeItem(keyLSHereditarias);
                    setDataLocal([]);
                }} >Limpiar</button>
            </div>
        </div>
    )
}

export default HistorialEnfermedadesH