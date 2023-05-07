import Head from 'next/head';
import Image from 'next/legacy/image';
import resume from './resume';
import styles from '../styles/Home.module.css';
import {BsFillMoonStarsFill} from 'react-icons/bs';
import Link from 'next/link';
import {AiFillLinkedin,AiFillYoutube} from 'react-icons/ai'
import { FaEnvelope } from 'react-icons/fa';
import deved from '../public/12652347.png';
import design from '../public/developedbyeddocs/design.png'
import code from '../public/developedbyeddocs/code.png'
import consulting from '../public/developedbyeddocs/consulting.png'
import web1 from '../public/developedbyeddocs/web1.png'
import web2 from '../public/developedbyeddocs/web2.png'
import web3 from '../public/developedbyeddocs/web3.png'
import web4 from '../public/developedbyeddocs/web4.png'
import web5 from '../public/developedbyeddocs/web5.png'
import web6 from '../public/developedbyeddocs/web6.png'
import {useState} from 'react'

export default function Home() {
  const [darkMode, setDarkMode] = useState(false);
  return (
    <div className={darkMode ? "dark" : ""}>
      <Head>
        <title>M.Regis Portfolio</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className='bg-white px-10 md:px-20 lg:px-40 dark:bg-gray-900'>
      <section className='min-h-screen'>
      <nav className='py-10 mb-12 flex justify-between'>
      <h1 className='text-xl uppercase dark:text-white'>developedbyRegis</h1>
      <ul className='flex items-center' >
      <li><BsFillMoonStarsFill className='cursor-pointer' onClick={()=> setDarkMode(!darkMode)}  /></li>
      <li>
      <Link href="/resume"  className='bg-gradient-to-r from-cyan-500 to-teal-500 text-white px-4 py-2 rounded-md ml-8'>Resume</Link>
     </li>
      </ul>
      </nav>
      <div className='text-center p-10  '>
      <h2 className='text-5xl py-2 text-teal-600 font-medium md:text-6xl'>Mugisha Regis</h2>
      <h3 className='text-2xl py-2 md:text-3xl dark:text-teal-600'>Developer and Designer</h3>
      <p className='text-md py-5 leading-8 text-gray-800 md:text-xl max-w-lg mx-auto dark:text-white'>
      Freelancer providing services for programming and 
      design content needs. Join me down below and let's
      get cracking!
      </p>
      </div>
      <div className='text-5xl flex justify-center gap-116 py-3 text-gray-600'>
      <FaEnvelope href=''/>
      <AiFillLinkedin href='https://www.linkedin.com/in/mugisha-regis-95024b256/'/>
      <AiFillYoutube />
      </div>
      <div className='relative mx-auto bg-gradient-to-b from-teal-500 rounded-full w-80 h-80 mt-20 overflow-hidden md:h-96 md:w-96 '>
      <Image alt= "imagepho" src={deved}/>
      </div>
      </section>
     
      <section>
      <div>
      <h3 className='text-3xl py-1 dark:text-teal-600'>Services I offer</h3>
      <p className='text-md py-2 leading-8 text-gray-80 dark:text-white'>
      Since the beginning of my journey as a freelancer designer and developer,
      I've done remote work for
      <span className='text-teal-500'> agencies</span> consulted for <span className='text-teal-500'>startups</span> and collaborated with 
      talanted people to create digital products for both bussiness and consumer use.
      </p>
      <p className='text-md py-2 leading-8 text-gray-800 dark:text-white'>
      I  offer from a wide range of services, including
      programming and teaching.
      </p>
      </div>
      <div className='lg:flex gap-10'>
      <div className='text-center shadow-lg p-10 rounded-xl my-10 dark:bg-white'>
      <Image alt= "imagepho" src={design} width={100} height={100}/>
      <h3 className='text-lg font-medium pt-8 pb-2'>Beautiful Designs</h3>
      <p className='py-2'>
      Creating elegant designs suited for your needs following core design theory.
      </p>
      <h4 className='py-2 text-teal-600'>Design tools I use</h4>
      <p className='text-gray-800 py-1'>Photoshop</p>
      <p className='text-gray-800 py-1'>Illustrator</p>
      <p className='text-gray-800 py-1'>Figma</p>
      
      </div>
      <div className='text-center shadow-lg p-10 rounded-xl my-10 dark:bg-white'>
      <Image alt= "imagepho" src={code} width={100} height={100}/>
      <h3 className='text-lg font-medium pt-8 pb-2'>Beautiful Designs</h3>
      <p className='py-2'>
      Creating elegant designs suited for your needs following core design theory.
      </p>
      <h4 className='py-2 text-teal-600'>Design tools I use</h4>
      <p className='text-gray-800 py-1'>Photoshop</p>
      <p className='text-gray-800 py-1'>Illustrator</p>
      <p className='text-gray-800 py-1'>Figma</p>
      
      </div>
      <div className='text-center shadow-lg p-10 rounded-xl my-10 dark:bg-white'>
      <Image alt= "imagepho" src={consulting} width={100} height={100}/>
      <h3 className='text-lg font-medium pt-8 pb-2'>Beautiful Designs</h3>
      <p className='py-2'>
      Creating elegant designs suited for your needs following core design theory.
      </p>
      <h4 className='py-2 text-teal-600'>Design tools I use</h4>
      <p className='text-gray-800 py-1'>Photoshop</p>
      <p className='text-gray-800 py-1'>Illustrator</p>
      <p className='text-gray-800 py-1'>Figma</p>
      
      </div>
      </div>
     
      </section>
      <section>
      <div>
      <h3 className='text-3xl py-1 dark:text-teal-600'>Portfolio</h3>
      <p className='text-md py-2 leading-8 text-gray-80 dark:text-white'>
      Since the beginning of my journey as a freelancer designer and developer,
      I've done remote work for
      <span className='text-teal-500'> agencies</span> consulted for <span className='text-teal-500'>startups</span> and collaborated with 
      talanted people to create digital products for both bussiness and consumer use.
      </p>
      <p className='text-md py-2 leading-8 text-gray-800 dark:text-white'>
      I  offer from a wide range of services, including
      programming and teaching.
      </p>
      </div>
      <div className='flex flex-col gap-10 py-10 lg:flex-row  lg:flex-wrap'>
        <div className='basis-1/3 flex-1'>
          <Image alt= "imagepho" src={web1} className='rounded-lg object-cover' width={'100%'} height={'100%'} layout='responsive'/>
        </div>
        <div className='basis-1/3 flex-1'>
          <Image alt= "imagepho" src={web2}  className='rounded-lg object-cover' width={'100%'} height={'100%'} layout='responsive'/>
        </div>
        <div className='basis-1/3 flex-1'>
          <Image alt= "imagepho" src={web3}  className='rounded-lg object-cover' width={'100%'} height={'100%'} layout='responsive'/>
        </div>
        <div className='basis-1/3 flex-1'>
          <Image alt= "imagepho" src={web4}  className='rounded-lg object-cover' width={'100%'} height={'100%'} layout='responsive'/>
        </div>
        <div className='basis-1/3 flex-1'>
          <Image alt= "imagepho" src={web5}  className='rounded-lg object-cover' width={'100%'} height={'100%'} layout='responsive'/>
        </div>
        <div className='basis-1/3 flex-1'>
          <Image alt= "imagepho" src={web6}  className='rounded-lg object-cover' width={'100%'} height={'100%'} layout='responsive'/>
        </div>
      </div>
      </section>
      </main>
    </div>
  )
}
