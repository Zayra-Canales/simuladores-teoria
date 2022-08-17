import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

const HistorialEnfermedades = () => {

    const [keyLS] = useState("Esperanza")

    const [dataLocal, setDataLocal] = useState([])

    useEffect(() => {
        setDataLocal(localStorage.getItem(keyLS) ? JSON.parse(localStorage.getItem(keyLS)) : []);
    }, [])



    return (
        <div className='card shadow' >
            <div className="card-header">
                <Link to={'/'} className="nav-link justify-contend-end" >Volver</Link>
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
                                            <th scope="col">Ciudad</th>
                                            <th scope="col">Genero</th>
                                            <th scope="col">Edad</th>
                                            <th scope="col">Esperanza</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {
                                            dataLocal.map((item, index) => {
                                                return (
                                                    <tr key={item.ciudad} >
                                                        <th scope="row">{++index} </th>
                                                        <th> {item.ciudad} </th>
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
                    localStorage.removeItem(keyLS);
                    setDataLocal([]);
                }} >Limpiar</button>
            </div>
        </div>
    )
}

export default HistorialEnfermedades