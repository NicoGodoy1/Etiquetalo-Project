import './App.css'

import {BsTag} from 'react-icons/bs'
import {BiSupport} from 'react-icons/bi'
import {FaWhatsapp} from 'react-icons/fa6'
import {AiOutlineWhatsApp} from 'react-icons/ai'

import background from './assets/home-background.jpg'
import logoS from './assets/logoSVG.png'
import Corazon from './assets/etiqueta_corazon.svg'
import Consultas from './assets/consultas_icono.svg'
import Manos from './assets/handshake_icono.svg'
import HoldingHeart from './assets/hands_holding_heart_icono.svg'
import HandShake from './assets/handshake_icon.png'

import { Navbar } from './components/NavBar/NavBar'
import { HomeCard } from './components/homeCard/homeCard'
import { HomeButton } from './components/HomeButton/HomeButton'




function App() {

  return (
      <div className='w-full'>

        <header className='relative z-30 h-[100px] w-full mt-0'>
            < Navbar />
        </header>

        <section className='relative z-20 mb-[50px] mt-[150px] ps-[220px]'>

          <h1 className=" leading-[100px] h-[250px] w-[600px] text-gray-200 text-8xl font-bold font-['Roboto', 'sans_serif']">Etiquetas<br />a medida</h1>

          <p className=" mb-10 w-473 leading-tight text-white text-lg font-normal font-['Roboto', 'sans_serif']">

            La etiqueta perfecta para cada producto. Explora nuestras <br /> 
            etiquetas impresas a medida y destaca en el mercado.

          </p>

          <HomeButton titulo={'Ver servicios'}/>

        </section>

        <section className=' h-[350px] w-[1200] relative z-20 flex items-center align-items justify-center gap-5 '>

          <HomeCard titulo={'Somos profesionales'} imagen={HandShake}/>

          <HomeCard titulo={'Nos Gusta lo que hacemos'} imagen={Corazon}/>
          
          <HomeCard titulo={'Soluciones de calidad'} imagen={HoldingHeart}/>

          <HomeCard titulo={'Atentos a tus consultas'} imagen={Consultas}/>

        </section>

        <section className='grid place-items-center bg-[#25D366] w-[50px] h-[50px] z-20 fixed bottom-[30px] right-[40px] rounded-full hover:w-[100px] hover:ease-in-out hover:duration-300'>

          <div className='grid place-items-center align-items-center w-[50px] h-[50px] text-white rounded-full'>

            <AiOutlineWhatsApp className='p-2 text-white text-[50px]'/>

          </div>
        </section>

        <div className='absolute top-0 bottom-0 h-full w-full z-10'>

          <img src={background} className="absolute top-0 bottom-0 w-full z-10 h-[850px]" alt="Vite logo" />

        </div>

    </div>
  )
}

export default App
