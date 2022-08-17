import React, { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { data } from '../data';
import imagen from '../assets/imagen-1.png'


const Home = () => {

    const navigate = useNavigate();

    const [ciudades] = useState(data);

    const [keyLS] = useState("Esperanza")

    const [dataLocal, setDataLocal] = useState([])

    const [ciudad, setCiudad] = useState("");
    const [edad, setEdad] = useState(0);
    const [genero, setGenero] = useState("");

    useEffect(() => {

        setDataLocal(localStorage.getItem(keyLS) ? JSON.parse(localStorage.getItem(keyLS)) : []);

        // eslint-disable-next-line
    }, [])



    const calcular = () => {

        let result = ciudades.filter(c => c.ciudad === ciudad)[0];

        let dataLocalSTemp = dataLocal;
        let porcentage = 0;

        if (genero === 'F') {
            porcentage = result.data.Mujer
        }

        if (genero === 'M') {
            porcentage = result.data.Hombre;
        }

        if (genero === 'O') {
            porcentage = result.data.Ambos;
        }

        let dataHistorial = {
            ciudad,
            edad,
            genero,
            porcentage
        }

        dataLocalSTemp.push(dataHistorial);

        localStorage.setItem(keyLS, JSON.stringify(dataLocalSTemp));

        navigate("/resultados-esperanza/" + porcentage)

    }

    return (
        <div className='card shadow' >
            <div className="card-header">
                <Link to={'/historial-enfermedades'} className="nav-link justify-contend-end" >Historial</Link>
            </div>
            <div className='card-body' >
                <div className='row' >
                    <div className='col-md-6 col-sm-12 p-5' >
                        <img src={imagen} className="img-fluid" alt="" />
                    </div>
                    <div className='col-md-6 col-sm-12 p-5' >
                        <div>
                            <legend>Ingrese sus datos</legend>
                            <div className="form-group row mt-5">
                                <label htmlFor="staticEmail" className="col-sm-2 col-form-label">Edad</label>
                                <div className="col-sm-10">
                                    <input type="number" value={edad} onChange={(e) => setEdad(e.target.value)} className="form-control-plaintext" placeholder='Ingrese la edad' />
                                </div>
                            </div>
                            <div className="form-group mt-2">
                                <label htmlFor="exampleSelect1" className="form-label mt-4">Cuidades</label>
                                <select value={ciudad} onChange={(e) => setCiudad(e.target.value)} className="form-select" id="exampleSelect1">
                                    <option>-- Seleccione una ciudad --</option>
                                    {
                                        ciudades.map(ciudad => {
                                            return (<option key={ciudad.ciudad} value={ciudad.ciudad} >{ciudad.ciudad}</option>)
                                        })
                                    }
                                </select>
                            </div>
                            <div className="form-group">
                                <legend className="mt-4">Genero</legend>
                                <div className="form-check">
                                    <input className="form-check-input" value={"F"} onChange={(e) => setGenero(e.target.value)} checked={genero === 'F' ? true : false} type="radio" name="optionsRadios" id="optionsRadios1" defaultValue="option1" />
                                    <label className="form-check-label" htmlFor="optionsRadios1">
                                        Femenino
                                    </label>
                                </div>
                                <div className="form-check">
                                    <input className="form-check-input" value={"M"} onChange={(e) => setGenero(e.target.value)} checked={genero === 'M' ? true : false} type="radio" name="optionsRadios" id="optionsRadios2" defaultValue="option2" />
                                    <label className="form-check-label" htmlFor="optionsRadios2">
                                        Masculino
                                    </label>
                                </div>
                                <div className="form-check disabled">
                                    <input className="form-check-input" value={"O"} onChange={(e) => setGenero(e.target.value)} checked={genero === 'O' ? true : false} type="radio" name="optionsRadios" id="optionsRadios3" defaultValue="option3" />
                                    <label className="form-check-label" htmlFor="optionsRadios3">
                                        Ambos
                                    </label>
                                </div>
                            </div>
                            <div className="form-group mt-5">
                                <button className='btn btn-primary btn-sm' onClick={calcular} >Calcular</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Home