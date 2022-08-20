import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
            <div className="container-fluid">
                <Link className="navbar-brand" to="/" >Simulación</Link>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarColor01" aria-controls="navbarColor01" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarColor01">
                    <ul className="navbar-nav me-auto">
                        <li className="nav-item">
                            <Link className="nav-link d-none" to="/">Esperanza de vida
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/enfermedades-hereditarias">Enfermedades Hereditarias</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/manual">Manual de Usuario</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/informacion-general">Información General</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/modelo">Formulación del Modelo</Link>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    )
}

export default Navbar