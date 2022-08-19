import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Navbar from './components/Navbar'
import Enfermedades from './screens/Enfermedades'
import Home from './screens/Home'
import Resultado from './screens/Resultado'
import ResultadoEsperanza from './screens/ResultadoEsperanza'
import '../src/assets/bootstrap.min.css'
import HistorialEnfermedades from './screens/HistorialEnfermedades'
import HistorialEnfermedadesH from './screens/HistorialEnfermedadesH'

const App = () => {
  return (
    <BrowserRouter>
      <Navbar />
      <div className='container m-5 p-5' >
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/historial-enfermedades' element={<HistorialEnfermedades />} />
          <Route path='/historial-enfermedades-hereditarias' element={<HistorialEnfermedadesH />} />
          <Route path='/resultados' element={<Resultado />} />
          <Route path='/enfermedades-hereditarias' element={<Enfermedades />} />
          <Route path='/resultados-esperanza/:dato' element={<ResultadoEsperanza />} />
          <Route path='/resultados-enfermedades/:dato/:enfermedad' element={<Resultado />} />

        </Routes>
      </div>
    </BrowserRouter>
  )
}

export default App