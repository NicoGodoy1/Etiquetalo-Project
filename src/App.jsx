import './App.css'
import background from './assets/home-background.jpg'
import { navbar } from './components/navbar/navbar'
import {BsTag} from 'react-icons/bs'
import {BiSupport} from 'react-icons/bi'
import {FaWhatsapp} from 'react-icons/fa6'
import {AiOutlineWhatsApp} from 'react-icons/ai'
import logoS from './assets/logoSVG.png'




function App() {

  return (
      <div className='w-full'>
        <header className='relative z-20'>
            <nav className='flex items-center justify-between py-6 px-10'>
                <div className='logo'>
                    {/* <img  className='w-48 h-24 ' src={logo} alt="logo de etiquetalo " /> */}
                    <img  className='w-48 h-24 ' src={logoS} alt="logo de etiquetalo " />


                </div>
                <ul className='flex justify-center px-6 gap-4'>
                    <li className="px-3 text-white text-lg font-bold font-['Roboto', 'sans_serif']">Nuestros Productos</li>
                    <li className="px-3 text-white text-lg font-bold font-['Roboto', 'sans_serif']">Nuestros Servicios</li>
                    <li className="px-3 text-white text-lg font-bold font-['Roboto', 'sans_serif']">¿Por qué elegirnos?</li>
                    <div className="w-40 h-10 rounded-full border-2 border-blue-400 flex align-items justify-center hover:bg-[#3D799E]"><a className="text-white text-lg font-bold font-['Roboto', 'sans_serif'] flex align-items justify-center pt-1" href="#">Contactanos</a></div>
                </ul>
            </nav>
        </header>

        <section className='relative z-20 mb-[50px] mt-[100px] ps-[220px]'>
          <h1 className=" leading-[100px] h-[250px] w-[600px] text-gray-200 text-8xl font-bold font-['Roboto', 'sans_serif']">Etiquetas<br />a medida</h1>
          <p className=" mb-10 w-473 leading-tight text-white text-lg font-normal font-['Roboto', 'sans_serif']">La etiqueta perfecta para cada producto. Explora nuestras <br /> etiquetas impresas a medida y destaca en el mercado.</p>
          <div className="w-40 h-10 rounded-full border-2 border-blue-400 flex align-items justify-center hover:bg-[#3D799E] "><a className="text-white text-lg font-bold font-['Roboto', 'sans_serif'] flex align-items justify-center pt-1" href="#">Ver servicios</a></div>
        </section>

        <section className=' h-[350px] w-[1200] relative z-20 flex items-center align-items justify-center gap-5 '>
          <div>
            <div className="w-52 h-44 bg-[#3D799E] rounded-2xl grid  place-items-center">
              <div  className="w-48 h-40 rounded-2xl border-2 border-white flex flex-col justify-content-center align-middle ">
                  <svg className='mx-14 my-2 w-20 h-20 font-bold ' xmlns="http://www.w3.org/2000/svg" width="84" height="56" viewBox="0 0 84 56" fill="none">
                      <path fill-rule="evenodd" clip-rule="evenodd" d="M58.5047 38.4806C59.7119 39.6824 60.6377 41.2199 62.0669 40.4728C62.6191 40.1859 63.2092 39.7744 63.718 39.2872C64.5626 38.4806 65.5804 37.138 64.7683 36.0661C61.9586 33.3646 56.5611 28.8225 56.5449 28.8117L58.2502 26.879C58.2556 26.8844 59.4142 27.9022 60.9192 29.3206C62.8789 31.1721 65.6237 32.9748 66.95 34.8263C67.6971 35.8658 67.5401 37.701 67.1449 38.7783C66.8309 39.6445 66.2192 40.462 65.4937 41.1549C64.8116 41.81 64.005 42.373 63.2471 42.7628C62.4837 43.158 61.715 43.3854 61.0599 43.3908C61.0383 43.4936 61.0112 43.6019 60.9841 43.7048C60.7676 44.4356 60.302 45.0744 59.7173 45.5996C59.1922 46.0706 58.5588 46.4603 57.9254 46.7419C57.2324 47.045 56.507 47.2183 55.8574 47.2291C55.8357 47.4402 55.7924 47.6459 55.7328 47.8517C55.5163 48.5825 55.0507 49.2213 54.466 49.7465C53.9409 50.2174 53.3075 50.6072 52.6741 50.8887C51.743 51.3002 50.7468 51.468 49.9673 51.3327C49.9402 51.6088 49.8861 51.874 49.8103 52.1231V52.1285C49.5775 52.8918 49.1336 53.536 48.5651 54.0124C47.9967 54.4888 47.3037 54.7974 46.5675 54.9003C45.6742 55.0248 44.7268 54.8461 43.8823 54.294C43.6495 54.1424 43.3951 53.9475 43.0973 53.7093L42.9295 53.5793L40.4121 51.6358L41.9821 49.6003L44.4994 51.5438L44.6673 51.6737C44.9001 51.8524 45.0949 52.0094 45.2953 52.1339C45.5876 52.3288 45.9124 52.3883 46.2156 52.3504C46.47 52.3125 46.7082 52.2043 46.9085 52.0364C47.1034 51.874 47.2604 51.6467 47.3416 51.3814C47.4445 51.0295 47.4283 50.591 47.2388 50.0821C45.0895 47.0829 40.5962 43.4449 40.5853 43.4341L42.2095 41.4364C42.2203 41.4419 44.0393 42.9198 45.9882 44.8254C46.5079 45.3343 47.0818 45.8973 47.6827 46.4333C47.791 46.5307 47.9047 46.6282 48.0129 46.7256C48.0346 46.7473 48.0617 46.7689 48.0833 46.7906C48.2241 46.9151 48.3648 47.045 48.5056 47.1749C48.982 47.6026 49.453 48.0357 49.9456 48.4147C50.5303 48.8315 50.5195 48.9182 51.1853 48.7178C51.3261 48.6745 51.4777 48.5987 51.6401 48.5284C52.0407 48.3551 52.4305 48.1115 52.7445 47.83C52.9989 47.5972 53.1938 47.3536 53.2642 47.1154C53.3183 46.9259 53.2804 46.6985 53.0964 46.4441C50.9363 43.4395 44.9975 38.2207 44.9813 38.2045L46.6866 36.2718C46.6974 36.2826 49.9998 39.1843 52.6904 42.0211C53.4212 42.7411 54.5094 43.7264 55.2943 44.3382C55.5813 44.5439 55.7816 44.8092 56.2147 44.6576C56.3987 44.5926 56.6315 44.5006 56.8914 44.3869C57.292 44.2137 57.6818 43.97 57.9958 43.6885C58.2502 43.4612 58.4451 43.2121 58.5155 42.9739C58.5696 42.7844 58.5317 42.5571 58.3477 42.2972C56.1876 39.2926 50.2488 34.0738 50.2325 34.0576L51.9379 32.1249C51.9433 32.1249 55.7383 35.4651 58.5047 38.4806Z" fill="white"/>
                      <path fill-rule="evenodd" clip-rule="evenodd" d="M82.8028 29.3584L74.8339 1.22891L74.4874 0L73.2585 0.335649L63.0591 3.13453L61.8031 3.481L62.155 4.72615L62.6368 6.42605C57.7428 6.86997 52.9734 5.82513 48.5233 4.85608C39.6665 2.92339 31.9899 1.25056 26.0619 10.6975C24.4595 13.2581 22.7108 16.3006 22.3048 18.6285C21.7472 21.7955 22.9869 23.8256 28 22.9053C31.0804 22.3423 32.9806 20.794 34.7509 19.3485C36.754 17.7136 38.5567 16.2465 42.054 17.2859C43.8892 18.0438 44.057 18.1142 45.4917 19.3215C50.2611 23.3222 61.5974 33.2022 61.7327 33.3158L64.0823 35.3839L64.7373 35.9577L65.5115 35.5625L70.2214 33.1697L70.5083 34.182L71.7426 33.8301L81.915 30.9501L83.1547 30.5982L82.8028 29.3584ZM65.1217 32.8665L63.4272 31.3778H63.4218C63.3893 31.3507 51.7769 21.2271 47.1374 17.34C45.3996 15.8838 45.2047 15.8026 42.9959 14.8876L42.9418 14.866L42.8227 14.8227C38.0045 13.3664 35.6929 15.2558 33.1268 17.3509C31.6001 18.596 29.9706 19.9278 27.5399 20.3717C25.2661 20.7886 24.6598 20.1389 24.8493 19.067C25.1849 17.156 26.7765 14.4058 28.2436 12.0617V12.0563C33.1972 4.14689 40.0617 5.64107 47.9765 7.36803C52.7568 8.40746 57.889 9.52809 63.3514 8.93259L69.5014 30.6415L65.1217 32.8665ZM72.2786 30.9988L64.9918 5.26775L72.7063 3.15099L79.9769 28.8173L72.2786 30.9988Z" fill="white"/>
                      <path fill-rule="evenodd" clip-rule="evenodd" d="M20.9943 4.72074L20.48 6.52891C22.7862 6.57763 27.1551 6.53974 30.7931 5.71686L31.3561 8.22881C27.0793 9.19786 21.9254 9.15455 19.76 9.08417L14.0106 29.3801C16.1923 30.0676 20.3013 31.8542 20.6316 35.6329L18.0601 35.8549C17.8598 33.5649 14.9634 32.3576 13.3069 31.8487L12.9983 32.9369L12.6464 34.1766L11.4121 33.8247L1.23973 30.9447L0 30.5928L0.351889 29.3584L8.32084 1.22891L8.66732 0L9.89623 0.335649L20.0956 3.13453L21.3516 3.481L20.9943 4.72074ZM10.8761 30.9988L18.1629 5.26752L10.4484 3.15077L3.17784 28.8171L10.8761 30.9988Z" fill="white"/>
                      <path fill-rule="evenodd" clip-rule="evenodd" d="M40.3377 47.9111C40.0887 47.7271 39.7855 47.6675 39.4932 47.7108C39.2008 47.7541 38.9302 47.9057 38.7461 48.1493L36.7539 50.8508H36.7593C36.5752 51.0998 36.5102 51.4084 36.5536 51.6953C36.5969 51.9822 36.7484 52.2529 36.9921 52.437L37.03 52.4695C37.2682 52.6319 37.5605 52.686 37.8366 52.6427C38.1289 52.5994 38.3996 52.4478 38.5837 52.2042L40.5813 49.4974C40.7654 49.2483 40.825 48.9452 40.7816 48.6528C40.7329 48.3659 40.5813 48.0952 40.3377 47.9111ZM25.8238 32.0328C26.7767 32.7366 27.3613 33.7652 27.5237 34.8533C27.5941 35.3189 27.5887 35.7953 27.5021 36.2609C27.9298 36.0443 28.3899 35.8982 28.8609 35.8278C29.9924 35.66 31.1834 35.9144 32.1741 36.6453V36.6507C33.1702 37.3815 33.7711 38.448 33.939 39.5795C34.0093 40.0288 34.0039 40.489 33.9336 40.9437C34.0689 40.9112 34.1988 40.8842 34.3342 40.8625C35.3574 40.7109 36.4401 40.9437 37.3334 41.6042L37.3983 41.6583C38.2591 42.3188 38.7842 43.2662 38.9358 44.2569C38.9845 44.5655 38.9954 44.8795 38.9683 45.1935C39.017 45.1826 39.0603 45.1772 39.109 45.1718C40.0402 45.0311 41.0363 45.2476 41.8592 45.8539C42.6875 46.4657 43.1856 47.3481 43.3263 48.2847C43.4671 49.2158 43.2505 50.212 42.6388 51.0348L40.6411 53.7417C40.0294 54.57 39.1469 55.068 38.2104 55.2088C37.2792 55.3496 36.2885 55.133 35.4602 54.5267V54.5321C34.6373 53.9258 34.1339 53.0379 33.9931 52.0959C33.9769 51.9877 33.966 51.8794 33.9606 51.7711C33.7332 51.8469 33.5005 51.9065 33.2677 51.9389C32.2499 52.0905 31.1672 51.8577 30.2685 51.1918C29.3698 50.526 28.823 49.5623 28.6714 48.5445C28.639 48.3388 28.6227 48.1331 28.6281 47.922C28.2871 48.0627 27.9352 48.1656 27.5725 48.2197C26.441 48.3876 25.25 48.1331 24.2593 47.4023C23.2686 46.6714 22.6623 45.5995 22.4944 44.468C22.4078 43.9104 22.4295 43.3366 22.5648 42.779C22.2075 42.9414 21.8285 43.0497 21.4442 43.1092C20.356 43.2716 19.2083 43.0226 18.2555 42.3242C17.3027 41.6204 16.718 40.5918 16.5556 39.5037C16.3932 38.4155 16.6422 37.2678 17.3406 36.315H17.346L19.8255 32.9531C20.5293 31.9949 21.5579 31.4156 22.6406 31.2532C23.7179 31.08 24.8656 31.329 25.8238 32.0328ZM24.9739 35.2323C24.9089 34.7938 24.6761 34.3823 24.3026 34.1062V34.1008C23.9236 33.8247 23.4635 33.7273 23.0196 33.7922C22.5756 33.8572 22.1642 34.09 21.8881 34.4635L19.4086 37.82H19.414C19.1325 38.199 19.0351 38.6646 19.1 39.1031C19.165 39.5416 19.3978 39.953 19.7713 40.2291C20.1503 40.5106 20.6159 40.6081 21.0544 40.5431C21.4929 40.4781 21.9043 40.2454 22.1804 39.8718H22.1858L24.6653 36.5153H24.6599C24.936 36.1364 25.0389 35.6708 24.9739 35.2323ZM31.3889 39.9584C31.3185 39.4766 31.0641 39.0219 30.6526 38.7187V38.7241C30.2358 38.4155 29.7269 38.3073 29.2451 38.3776C28.7578 38.4534 28.3085 38.7025 27.9999 39.1139L25.3797 42.6653C25.0765 43.0821 24.9683 43.591 25.0386 44.0728C25.109 44.5547 25.3635 45.004 25.7749 45.3126C26.1918 45.6212 26.7006 45.7294 27.1825 45.659C27.6697 45.5887 28.119 45.3342 28.4276 44.9228L31.0478 41.3714C31.3564 40.9546 31.4647 40.4457 31.3889 39.9584ZM36.3857 44.6359C36.3316 44.2569 36.1367 43.905 35.8173 43.6722V43.6776C35.4925 43.4394 35.0973 43.3528 34.7237 43.4124C34.3502 43.4665 33.9983 43.6614 33.7655 43.9862L33.7222 44.0404L31.4918 47.0666V47.072C31.2536 47.3914 31.1723 47.7866 31.2319 48.1602C31.2914 48.5391 31.4863 48.891 31.8057 49.1238C32.1252 49.362 32.5204 49.4432 32.8993 49.3837C33.2783 49.3241 33.6302 49.1292 33.8629 48.8098L36.1369 45.7294C36.3587 45.41 36.4453 45.0148 36.3857 44.6359Z" fill="white"/>
                  </svg>
                
                <div className="w-[150] text-center text-white text-xl font-medium font-['Roboto', 'sans_serif']">Somos<br />profesionales</div>
              </div>
            </div>
          </div>

          <div>
            <div className="w-52 h-44 bg-[#3D799E] rounded-2xl grid place-items-center">
              <div  className="w-48 h-40 rounded-2xl border-2 border-white flex flex-col">
                <BsTag className=' text-white mx-14 my-2 w-20 h-20' />
                <div className="w-[150] h-9 text-center text-white text-xl font-medium font-['Roboto', 'sans_serif']">Nos gusta lo<br /> que hacemos</div>
              </div>
            </div>
          </div>


          <div>
            <div className="w-52 h-44 bg-[#3D799E] rounded-2xl grid  place-items-center">
              <div  className="w-48 h-40 rounded-2xl border-2 border-white flex flex-col">
                <svg className='mx-14 my-2 w-20 h-20' xmlns="http://www.w3.org/2000/svg" width="62" height="62" viewBox="0 0 62 62" fill="none">
                  <path d="M61.9355 26.6912L61.8865 24.6523C61.8537 21.3456 61.7147 18.6359 61.4529 16.1205C61.3299 14.8152 61.1451 13.6489 60.8935 12.5076L60.9293 12.7013C60.7808 11.7812 60.4318 10.9627 59.928 10.2631L59.9395 10.28C59.75 10.0444 59.4968 9.86731 59.2061 9.7738L59.1952 9.77078C58.5591 9.5066 57.8204 9.35314 57.0458 9.35314C55.9342 9.35314 54.8964 9.66922 54.0174 10.2163L54.0417 10.2022C52.5803 11.3359 51.5995 13.0289 51.4219 14.9547L51.4199 14.9813L50.3542 25.4679C49.7422 25.1435 49.0162 24.9529 48.2457 24.9529C46.4432 24.9529 44.8843 25.9957 44.1393 27.511L44.1274 27.5378L40.8717 33.178L34.6876 39.082C34.5804 39.183 34.4886 39.2988 34.4153 39.4266L34.4115 39.4338L32.6702 42.4486L31.7694 41.9287C31.7351 41.9095 31.6965 41.9097 31.6614 41.8933C31.4681 41.7985 31.2406 41.7428 31.0001 41.7428C30.76 41.7428 30.5329 41.7982 30.3308 41.8969L30.3398 41.893C30.3038 41.9096 30.2645 41.909 30.2293 41.9287L29.3284 42.4487L27.5872 39.4336C27.51 39.2986 27.4184 39.1828 27.3119 39.0825L27.3111 39.0818L21.1269 33.1781L17.8712 27.5377C17.2356 26.3552 16.1698 25.4731 14.888 25.0928L14.8526 25.0838C14.5171 24.9915 14.1319 24.9383 13.7343 24.9383C12.9681 24.9383 12.2481 25.1354 11.622 25.4817L11.6445 25.4704L10.581 15.0059C10.4067 13.0442 9.42402 11.3416 7.97255 10.2137L7.95723 10.2021C7.10225 9.66942 6.0643 9.35367 4.9526 9.35367C4.17824 9.35367 3.43962 9.5068 2.76558 9.78466L2.8038 9.77072C2.50238 9.86783 2.24932 10.0449 2.0617 10.277L2.05941 10.28C1.55617 10.9848 1.20031 11.829 1.05542 12.7436L1.05104 12.777C0.840321 13.7081 0.661799 14.8497 0.554346 16.012L0.546035 16.1226C0.286433 18.6297 0.149466 21.3394 0.112558 24.6502C0.10405 25.3373 0.0838948 26.0244 0.0634773 26.7116C0.0230351 27.3701 0 28.1398 0 28.9149C0 30.3822 0.082455 31.8303 0.243046 33.2547L0.227013 33.08C0.976306 38.2749 3.54288 42.7648 7.24969 45.972L7.27606 45.9942C9.47015 47.7327 11.4035 49.6292 13.1212 51.7103L13.1734 51.7753L11.9223 52.4974C11.4497 52.7747 11.1373 53.2804 11.1373 53.8589C11.1373 54.1482 11.2155 54.4194 11.3518 54.6523L11.3478 54.6448L14.7098 60.469C14.9179 60.8257 15.2529 61.0889 15.6518 61.1985L15.6628 61.2012C15.7827 61.2347 15.9204 61.2542 16.0626 61.2542H16.0703H16.07H16.0739C16.3616 61.2542 16.631 61.1767 16.8628 61.0415L16.8552 61.0454L30.9965 52.8796L45.1457 61.0455C45.3716 61.1754 45.6421 61.2526 45.9305 61.2541H45.931C46.5095 61.2528 47.0147 60.9408 47.2889 60.4762L47.2929 60.4688L50.6549 54.6446C50.7855 54.4188 50.8626 54.1478 50.8626 53.8588C50.8626 53.715 50.8436 53.5758 50.8078 53.4433L50.8104 53.4544C50.6989 53.0431 50.4356 52.7064 50.0856 52.5014L50.0783 52.4973L48.8264 51.7747C50.6121 49.6145 52.5617 47.7048 54.6934 46.0146L54.7737 45.9531C58.4811 42.7273 61.0294 38.2538 61.7624 33.1926L61.7757 33.0802C61.9185 31.8341 62 30.39 62 28.9268C62 28.1404 61.9764 27.3595 61.93 26.5847L61.9352 26.6914L61.9355 26.6912ZM9.27233 43.5727C6.14663 40.8246 3.99259 37.0372 3.35193 32.755L3.33969 32.6565C3.21254 31.5325 3.13996 30.2296 3.13996 28.9097C3.13996 28.1702 3.16274 27.4361 3.20763 26.708L3.20272 26.8078C3.22523 26.1002 3.24565 25.3926 3.25377 24.685C3.28858 21.4723 3.42129 18.8546 3.67101 16.4436C3.77598 15.2828 3.93932 14.2402 4.16417 13.2207L4.13315 13.3884C4.18839 13.145 4.25383 12.8485 4.33563 12.6072C4.54451 12.5417 4.78475 12.5038 5.03388 12.5038C5.46539 12.5038 5.8704 12.6173 6.22084 12.816L6.20886 12.8097C6.90829 13.4307 7.37108 14.3048 7.45341 15.2869L7.45432 15.3005L8.94925 30.0001C8.97392 30.2335 9.0461 30.4457 9.15571 30.6333L9.15178 30.6258L15.89 42.2967C16.1637 42.7809 16.6753 43.1025 17.2618 43.1025C18.1292 43.1025 18.8324 42.3993 18.8324 41.5319C18.8324 41.2344 18.7497 40.9562 18.606 40.7191L18.6099 40.7261L12.7141 30.5153C12.0515 29.3661 12.4442 28.593 13.0331 28.2537C13.6119 27.9081 14.4852 27.9551 15.1518 29.1085L18.52 34.9429C18.5983 35.0773 18.6899 35.1929 18.7955 35.2941L18.7961 35.2947L24.9802 41.2005L26.6088 44.0191L15.9047 50.1985C13.9397 47.712 11.7615 45.5359 9.35524 43.6357L9.27246 43.5727L9.27233 43.5727ZM45.3546 57.5362L31.7921 49.7078C31.7688 49.6947 31.7427 49.6958 31.719 49.684C31.5803 49.6103 31.4188 49.5558 31.2482 49.5291L31.2395 49.528L31.1264 49.5196C31.0885 49.5164 31.0443 49.5144 30.9997 49.5144C30.8773 49.5144 30.7581 49.5287 30.6438 49.5555L30.6543 49.5534C30.6041 49.5649 30.559 49.5838 30.5101 49.6002C30.4027 49.6244 30.3092 49.6557 30.22 49.6951L30.23 49.6912L16.6449 57.5356L14.8535 54.4354L30.9999 45.1144L47.1463 54.4355L45.3546 57.5362ZM58.6595 32.6586C58.0126 37.0176 55.8776 40.7887 52.7969 43.5155L52.7779 43.532C50.2693 45.507 48.0741 47.6961 46.156 50.115L46.0932 50.1968L35.3908 44.0189L37.0191 41.2005L43.2033 35.2945C43.3106 35.1931 43.4029 35.0773 43.4775 34.95L43.4814 34.9427L46.8516 29.1083C47.0815 28.6448 47.4748 28.2914 47.9545 28.1187L47.9683 28.1144C48.0661 28.0891 48.1783 28.0745 48.2942 28.0745C48.5414 28.0745 48.7732 28.141 48.9726 28.2571L48.9661 28.2535C49.2676 28.4258 49.4909 28.7057 49.5856 29.0397L49.5878 29.049C49.6094 29.1587 49.6218 29.2849 49.6218 29.4139C49.6218 29.8248 49.496 30.2063 49.2807 30.522L49.2852 30.5152L43.3874 40.7258C43.2554 40.9511 43.1774 41.2219 43.1774 41.5109C43.1774 42.0901 43.4905 42.5962 43.9566 42.8691L43.964 42.8731C44.1876 42.9996 44.455 43.0741 44.7399 43.0741C45.3197 43.0741 45.8272 42.7655 46.1073 42.3035L46.1113 42.2963L52.8516 30.6254C52.9576 30.4455 53.0291 30.233 53.0514 30.0061L53.0519 29.9997L54.5446 15.284C54.6325 14.2941 55.0952 13.4266 55.7881 12.813L55.792 12.8096C56.1323 12.6198 56.5387 12.5082 56.971 12.5082C57.2169 12.5082 57.4544 12.5443 57.6784 12.6116L57.6611 12.607C57.7351 12.829 57.8114 13.1172 57.8725 13.4111L57.882 13.4661C58.0678 14.2952 58.2254 15.3129 58.3204 16.3487L58.3277 16.4477C58.5813 18.8608 58.7122 21.4784 58.7449 24.687C58.7533 25.3864 58.7736 26.0879 58.7981 26.7873C58.8372 27.4129 58.8595 28.1442 58.8595 28.8807C58.8595 30.2114 58.7867 31.5252 58.6451 32.8183L58.6593 32.6585L58.6595 32.6586ZM29.5426 27.5235C29.8307 27.843 30.2461 28.0429 30.7082 28.0429C31.1703 28.0429 31.5858 27.843 31.8727 27.5249L31.8738 27.5236L42.3116 15.957C44.3169 14.2588 45.5813 11.7394 45.5813 8.92477C45.5813 6.45322 44.6064 4.20939 43.0202 2.55689L43.0233 2.56003C41.4006 0.976634 39.1797 0 36.7307 0C34.4079 0 32.2902 0.878604 30.6921 2.3217L30.7 2.31469C29.1952 1.08494 27.2526 0.339702 25.1357 0.339702C25.0487 0.339702 24.9619 0.34101 24.8753 0.343628L24.8881 0.343301C22.5176 0.439825 20.3991 1.44466 18.8567 3.01674L18.8554 3.01818C17.1984 4.62762 16.1701 6.87668 16.1701 9.3659C16.1701 11.9644 17.2906 14.3012 19.0749 15.9196L19.0822 15.9261L29.5426 27.5235ZM21.0762 5.23903C22.1106 4.17052 23.5491 3.49858 25.1446 3.47018L25.1498 3.47005C26.9159 3.52763 28.4892 4.30657 29.5932 5.52016L29.5978 5.52527C29.8818 5.80954 30.2745 5.98532 30.7082 5.98532C31.1419 5.98532 31.5345 5.80954 31.8187 5.52527C32.934 4.0598 34.6793 3.12334 36.6433 3.12334C38.2558 3.12334 39.721 3.75452 40.8049 4.78331L40.8023 4.78082C41.8295 5.86189 42.4612 7.3273 42.4612 8.94021C42.4612 10.9044 41.5243 12.6498 40.0728 13.7536L40.0579 13.7645L40.0047 13.8238L30.7081 24.1267L21.3584 13.7645C20.1039 12.6206 19.3193 10.9796 19.3175 9.15551V9.15512C19.3885 7.61387 20.048 6.23929 21.0749 5.24021L21.0762 5.2389L21.0762 5.23903Z" fill="#FFFDFD"/>
                </svg>
                <div className="w-[150] h-9 text-center text-white text-xl font-medium font-['Roboto', 'sans_serif']">Soluciones de<br />calidad</div>
              </div>
            </div>
          </div>

          <div>
            <div className="w-52 h-44 bg-[#3D799E] rounded-2xl grid place-items-center">
              <div  className="w-48 h-40 rounded-2xl border-2 border-white flex flex-col">
                <BiSupport className='mx-14 my-2 w-20 h-20 text-white '/>
                <div className="w-[150] h-9 text-center text-white text-xl font-medium font-['Roboto', 'sans_serif'] ">Atentos a <br />tus consultas</div>
              </div>
            </div>
          </div>
        </section>

        {/* <section className=' z-20 fixed bottom-[60px] right-[40px]'>
          <FaWhatsapp className=' bg-[#25D366] w-[50px] h-[50px] text-white text-3xl rounded-full hover:w-[95px] hover:ease-in hover:duration-300 '/>
        </section> */}

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
