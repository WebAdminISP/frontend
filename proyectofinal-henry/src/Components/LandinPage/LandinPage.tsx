import React from 'react'
import { Navbar } from './Navbar'
import { Promo1 } from './Promo1/page'
import { PlanesInternet } from './PlanesDeInternet/page'
import { Banner } from './banner/Banner'
import { Seccion } from './SolicitudServicio/Seccion'

const LandingPage = () => {
  return (
    <>
    <Navbar />
    <Promo1 />
    <PlanesInternet />
    <Banner />
    <Seccion />

    <script src="https://cdnjs.cloudflare.com/ajax/libs/flowbite/2.3.0/flowbite.min.js"></script>
    <link
    href="https://cdnjs.cloudflare.com/ajax/libs/flowbite/2.3.0/flowbite.min.css"
    rel="stylesheet"
    />
    <script src="../path/to/flowbite/dist/flowbite.min.js"></script>
    
  </>
  )
}

export default LandingPage;