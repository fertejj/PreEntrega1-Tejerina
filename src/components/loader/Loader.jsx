import React, { useEffect, useState} from 'react'
import './Loader.css'

const Loader = () => {

  const [cargando, setCargando] = useState(true)

  useEffect(() => {
    setTimeout(() => {
      setCargando(false)
    }, 4000)
  },[])

    return (
      <div className='loader-padding'>
        { cargando ? `Cargando...` : `Carga completa` }
      </div>
    )
}

export default Loader