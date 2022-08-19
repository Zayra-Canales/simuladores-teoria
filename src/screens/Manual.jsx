import React from 'react'

const Manual = () => {
    return (
        <div className='card shadow' >
            <div className="card-header">
                Manual de Usuario
            </div>
            <div className='card-body' >
                <div className='row' >
                    <div className="col-md-12 p-5">
                        <ul class="list-group list-group-flush">
                            <li className="list-group-item">1. Debe de ingresar un nombre y un apellido</li>
                            <li className="list-group-item">2. Ingrese su edad</li>
                            <li className="list-group-item">3. Seleccione su genero</li>
                            <li className="list-group-item">4. Ingrese la enfermedad hereditaria de su madre </li>
                            <li className="list-group-item">5. Ingrese la enfermedad hereditaria de su padre</li>
                            <li className="list-group-item">6. Haga click en el boton 'Calcular'</li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Manual