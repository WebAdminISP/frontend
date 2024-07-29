"use client";
import { useSidebarContext } from "@/context/SidebarContext";
import React from "react";
import Loading from "@/Components/Dashboard/Loading/Loading";
import Request from "@/Components/Dashboard/Main/Requests/Requests"


const Home = () => {
  const { btnFixed } = useSidebarContext();

  return (
    <>
       
      <Loading />
      <div
        className={`p-3 mt-20 transition-all duration-1000  ${
          btnFixed ? "ml-[270px]" : "ml-24"
        }`}
      >
        <h1 className="text-2xl font-bold text-blue-900 mt-10 dark:text-blue-400/70">
          Bienvenido a Web Admin ISP!
        </h1>
        <h2 className="text-3xl text-gray-400 dark:text-orange-300/80">
          Dashboard Administrativo de Gestión de Usuarios...!
        </h2>
        <br />
        <h2 className="text-1xl text-gray-400 dark:text-orange-300/80">
        Integrantes del equipo
        </h2>
        
        <Request/>

        <ul className="ml-8">
          <li>Jose Andres Borrero Labrador - Front End</li>
          <li>Carlos Manuel Olivera Mispireta - Front End</li>
          <li>Joaquin Noe Ibañez Aro - Front End</li>
          <li>Edmundo Kinast - Back End</li>
          <li>Rafael Velazquez Hernandez - Back End</li>
          <li>Rodrigo Nahuel Fernandez - Back End</li>
          
        </ul>
      </div>
    </>
  );
};
export default Home;
