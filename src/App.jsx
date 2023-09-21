import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import background from './assets/home-background.jpg'
import { navbar } from './components/navbar/navbar'
import logo from './assets/logo-etiquetalo.png'
import {BsTag} from 'react-icons/bs'



function App() {

  return (
      <div className='w-full'>
        {/* <h1 className='text-3xl text-slate-500 z-20 relative'>Etiquetalo</h1> */}
        <header className='relative z-20'>
            <nav className='flex items-center justify-between py-6 px-10'>
                <div className='mix-blend-color-dodge'>
                    <img  className='w-48 h-24' src={logo} alt="logo de etiquetalo " />
                </div>
                <ul className='flex justify-center px-6'>
                    <li className="px-3 text-white text-lg font-bold font-['Roboto']">Nuestros Productos</li>
                    <li className="px-3 text-white text-lg font-bold font-['Roboto']">Nuestros Servicios</li>
                    <li className="px-3 text-white text-lg font-bold font-['Roboto']">¿Por qué elegirnos?</li>
                    <div className="w-40 h-10 rounded-full border-2 border-blue-400 flex align-items justify-center"><a className="text-white text-lg font-bold font-['Roboto'] flex align-items justify-center pt-1" href="#">Contactanos</a></div>
                </ul>
            </nav>
        </header>

        <section className='relative z-20 h-272 w-535 mx-28 mt-28'>
          <h1 className=" leading-normal  text-gray-200 text-8xl font-extrabold font-['Roboto']">Etiquetas a medida</h1>
          <p className=" pb-5 w-473 leading-tight text-white text-lg font-normal font-['Roboto']">La etiqueta perfecta para cada producto. Explora nuestras <br /> etiquetas impresas a medida y destaca en el mercado.</p>
          <div className="w-40 h-10 rounded-full border-2 border-blue-400 flex align-items justify-center hover:bg-[#3D799E] "><a className="text-white text-lg font-bold font-['Roboto'] flex align-items justify-center pt-1" href="#">Ver servicios</a></div>
        </section>

        <section className='relative z-20 py-48 px-48 flex items-center gap-5 '>
          <div>
            <div className="w-52 h-44 bg-[#3D799E] rounded-2xl grid place-items-center">
              <div  className="w-48 h-40 rounded-2xl border-2 border-white flex flex-col justify-items-center align-center">
                <BsTag className='w-20 h-20 text-white text-8xl'/>
                <div className="w-52 h-9 text-center text-white text-xl font-medium font-['Roboto']">Somos <br /> profesionales</div>
              </div>
            </div>
          </div>

          <div>
            <div className="w-52 h-44 bg-[#3D799E] rounded-2xl grid  place-items-center">
              <div  className="w-48 h-40 rounded-2xl border-2 border-white flex flex-col">
                <BsTag className='w-20 h-14 text-white text-8xl'/>
                <div className="w-52 h-9 text-center text-white text-xl font-medium font-['Roboto']">Somos profesionales</div>
              </div>
            </div>
          </div>

          <div>
            <div className="w-52 h-44 bg-[#3D799E] rounded-2xl grid  place-items-center">
              <div  className="w-48 h-40 rounded-2xl border-2 border-white flex flex-col">
                <BsTag className='w-20 h-14 text-white text-8xl'/>
                <div className="w-52 h-9 text-center text-white text-xl font-medium font-['Roboto']">Somos profesionales</div>
              </div>
            </div>
          </div>

          <div>
            <div className="w-52 h-44 bg-[#3D799E] rounded-2xl grid  place-items-center">
              <div  className="w-48 h-40 rounded-2xl border-2 border-white flex flex-col">
                <BsTag className='w-20 h-14 text-white text-8xl'/>
                <div className="w-52 h-9 text-center text-white text-xl font-medium font-['Roboto'] ">Somos profesionales</div>
              </div>
            </div>
          </div>

        </section>


        <div className='absolute top-0 bottom-0 h-full w-full z-10'>
          <img src={background} className="object-center" alt="Vite logo" />
        </div>
    </div>
  )
}

export default App
