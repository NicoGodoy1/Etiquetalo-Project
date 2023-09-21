import React from 'react'
import logo from '../../assets/logo-etiquetalo.png'


export const navbar = () => {
  return (
    <div>
        <header>
            <nav>
                <div>
                    <img src={logo} alt="logo de etiquetalo" />
                </div>
                <div>
                    <li>Nuestros Productos</li>
                    <li>Nuestros Servicios</li>
                    <li>¿Por qué elegirnos?</li>
                    <li>Contactanos</li>
                </div>
            </nav>
        </header>
    </div>
  )
}

