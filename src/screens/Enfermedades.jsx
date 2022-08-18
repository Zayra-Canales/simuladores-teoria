import React, { useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom';
import imagen from '../assets/imagen-1.png'
import toast, { Toaster } from 'react-hot-toast';
import Alert from '../components/Alert';

const Enfermedades = () => {

    const navigate = useNavigate();
    const [keyLSHereditarias] = useState("Hereditarias")
    const [dataLocal, setDataLocal] = useState([])
    const [mostrar, setMostrar] = useState(false)

    const [edad, setEdad] = useState(0);
    const [genero, setGenero] = useState("");
    const [nombre, setNombre] = useState("");
    const [enfemedad, setEnfemedad] = useState("");
    const [enfemedades] = useState([
        'Fibrosis Quística ',
        'Hipercolesterolemia Familiar',
        'Enfermedad de Huntington',
        'Distrofia Muscular',
        'Cáncer',
        'Diabetes',
        'Hipertensión',
        'Daltonismo',
        'Acondroplasia',
        'Síndrome de Marfan',
        'Anemia Falciforme',
        'Miopía'
    ]);

    const calcular = () => {

        console.log("Edad => ", edad);
        console.log("Genero => ", genero);
        console.log("Nombre => ", nombre);
        console.log("Enfemedad => ", enfemedad);


        if (!validar()) {
            
            setMostrar(true);

            setTimeout(() => {
                setMostrar(false)
            }, 2000);


            return;
        }

        let porcentage = 80;

        let dataTemp = dataLocal;

        dataTemp.push({
            nombre,
            edad,
            genero,
            porcentage
        });



        localStorage.setItem(keyLSHereditarias, JSON.stringify(dataTemp));

        navigate("/resultados-esperanza/" + porcentage);

    }

    useEffect(() => {


        <Toaster
            position="top-right"
            reverseOrder={false}
        />

        setDataLocal(localStorage.getItem(keyLSHereditarias) ? JSON.parse(localStorage.getItem(keyLSHereditarias)) : []);

    }, [])

    const validar = () => {

        if (nombre.trim().length == 0) {
            return false;
        }

        if (edad == 0) {
            return false;
        }

        if (genero.trim().length == 0) {
            return false;
        }

        if (genero.trim().length == 0) {
            return false;
        }

        return true;
    }


    return (
        <div className='card shadow' >
            <div className="card-header">
                <Link to={'/historial-enfermedades-hereditarias'} className="nav-link justify-contend-end" >Historial</Link>
            </div>
            <div className='card-body' >
                <div className='row' >
                    <div className='col-md-6 p-5' >
                        <div>

                            {
                                mostrar && <Alert mensaje={'Formulario invalido'} />
                            }

                            <legend>Ingrese sus datos</legend>
                            <div className="form-group row">
                                <label htmlFor="email" className="col-sm-4 col-form-label">Nombre</label>
                                <div className="col-sm-8">
                                    <input type="text" className="form-control-plaintext" value={nombre} onChange={e => setNombre(e.target.value)} id="email" placeholder='Ingrese su nombre' />
                                </div>
                            </div>
                            <div className="form-group row">
                                <label htmlFor="edad" className="col-sm-4 col-form-label">Edad</label>
                                <div className="col-sm-8">
                                    <input type="number" value={edad} onChange={e => setEdad(e.target.value)} className="form-control-plaintext" id="edad" placeholder='ingrese su edad' />
                                </div>
                            </div>
                            <div class="form-group">
                                <label htmlFor="exampleTextarea" class="form-label mt-4">Enfermedades</label>
                                <select onChange={e => setEnfemedad(e.target.value)} className='form-control' name="enfermedades" id="">
                                    <option value="">--Seleccionar enfermedad--</option>
                                    {
                                        enfemedades.map(e => {
                                            return <option value={e} key={e} > {e} </option>
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
                    <div className='col-md-6 p-5' >
                        <img src={imagen} alt="img" className='img-fluid' />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Enfermedades