"use client";
import React, { useState, useEffect } from "react";

// Define el tipo para las provincias
type Provincia =
  | "Buenos Aires"
  | "Catamarca"
  | "Chaco"
  | "Chubut"
  | "CABA"
  | "Córdoba"
  | "Corrientes"
  | "Entre Ríos"
  | "Formosa"
  | "Jujuy"
  | "La Pampa"
  | "La Rioja"
  | "Mendoza"
  | "Misiones"
  | "Neuquén"
  | "Río Negro"
  | "Salta"
  | "San Juan"
  | "San Luis"
  | "Santa Cruz"
  | "Santa Fe"
  | "Santiago del Estero"
  | "Tierra del Fuego"
  | "Tucumán";

// Define el tipo para las localidades
type Localidades = {
  [key in Provincia]: string[];
};

export const FormServicio: React.FC = () => {
  // Lista de provincias de Argentina
  const provincias: Provincia[] = [
    "Buenos Aires",
    "Catamarca",
    "Chaco",
    "Chubut",
    "CABA",
    "Córdoba",
    "Corrientes",
    "Entre Ríos",
    "Formosa",
    "Jujuy",
    "La Pampa",
    "La Rioja",
    "Mendoza",
    "Misiones",
    "Neuquén",
    "Río Negro",
    "Salta",
    "San Juan",
    "San Luis",
    "Santa Cruz",
    "Santa Fe",
    "Santiago del Estero",
    "Tierra del Fuego",
    "Tucumán",
  ];

  // Lista de localidades por provincia
  const localidades: Localidades = {
    "Buenos Aires": [
      "La Plata",
      "Mar del Plata",
      "Bahía Blanca",
      "Lomas de Zamora",
      "Tigre",
    ],
    CABA: ["Buenos Aires"],
    Córdoba: [
      "Córdoba",
      "Villa María",
      "Río Cuarto",
      "San Francisco",
      "Alta Gracia",
    ],
    Catamarca: [
      "San Fernando del Valle de Catamarca",
      "Belén",
      "Fiambalá",
      "Chilecito",
    ],
    Chaco: ["Resistencia", "Charata", "Saenz Peña", "Pcia. Roque Sáenz Peña"],
    Chubut: ["Rawson", "Comodoro Rivadavia", "Trelew", "Puerto Madryn"],
    Corrientes: ["Corrientes", "Goya", "Mercedes", "Paso de los Libres"],
    "Entre Ríos": ["Paraná", "Concordia", "Gualeguaychú", "Colón"],
    Formosa: ["Formosa", "Clorinda", "El Colorado", "Pirané"],
    Jujuy: [
      "San Salvador de Jujuy",
      "Palpalá",
      "Libertador General San Martín",
    ],
    "La Pampa": ["Santa Rosa", "General Pico", "Realicó"],
    "La Rioja": ["La Rioja", "Chamical", "Chilecito"],
    Mendoza: ["Mendoza", "San Rafael", "Malargüe", "Godoy Cruz"],
    Misiones: ["Posadas", "Eldorado", "Oberá"],
    Neuquén: [
      "Neuquén",
      "San Martín de los Andes",
      "Caviahue",
      "Villa La Angostura",
    ],
    "Río Negro": ["Viedma", "San Carlos de Bariloche", "General Roca"],
    Salta: ["Salta", "Orán", "Tartagal"],
    "San Juan": ["San Juan", "Jáchal", "Albardón"],
    "San Luis": ["San Luis", "Villa Mercedes", "El Trapiche"],
    "Santa Cruz": ["Río Gallegos", "El Calafate", "Caleta Olivia"],
    "Santa Fe": ["Santa Fe", "Rosario", "Rafaela", "Venado Tuerto"],
    "Santiago del Estero": [
      "Santiago del Estero",
      "La Banda",
      "Termas de Río Hondo",
    ],
    "Tierra del Fuego": ["Ushuaia", "Río Grande", "Tolhuin"],
    Tucumán: ["San Miguel de Tucumán", "Concepción", "Tafí Viejo"],
  };
  const [selectedProvincia, setSelectedProvincia] = useState<Provincia | "">(
    ""
  );
  const [localidadesDisponibles, setLocalidadesDisponibles] = useState<
    string[]
  >([]);

  useEffect(() => {
    if (selectedProvincia) {
      setLocalidadesDisponibles(localidades[selectedProvincia] || []);
    } else {
      setLocalidadesDisponibles([]);
    }
  }, [selectedProvincia]);

  return (
    <div className="bg-white p-8 rounded-lg shadow-md w-full max-w-lg mx-auto lg:ml-auto lg:w-1/3">
      <h1 className="text-2xl font-bold text-black text-center mb-6">
        Elige el pan que quieres solicitar
      </h1>
      <p className="text-black text-center mb-4">Por favor ingrese sus datos</p>
      <form className="space-y-4 max-h-screen">
        <div>
          <label htmlFor="nombre" className="block text-gray-700">
            Nombre
          </label>
          <input
            type="text"
            id="nombre"
            className="w-full p-2 border border-gray-300 rounded-md"
            required
          />
        </div>
        <div>
          <label htmlFor="correo" className="block text-gray-700">
            Correo electrónico
          </label>
          <input
            type="email"
            id="correo"
            className="w-full p-2 border border-gray-300 rounded-md"
            required
          />
        </div>
        <div>
          <label htmlFor="telefono" className="block text-gray-700">
            Teléfono
          </label>
          <input
            type="tel"
            id="telefono"
            className="w-full p-2 border border-gray-300 rounded-md"
            required
          />
        </div>
        <div>
          <label htmlFor="direccion" className="block text-gray-700">
            Dirección
          </label>
          <input
            type="text"
            id="direccion"
            className="w-full p-2 border border-gray-300 rounded-md"
            required
          />
        </div>
        <div>
          <label htmlFor="provincia" className="block text-gray-700">
            Provincia
          </label>
          <select
            id="provincia"
            className="w-full p-2 border border-gray-300 rounded-md"
            onChange={(e) => setSelectedProvincia(e.target.value as Provincia)}
            required
          >
            <option value="">Seleccione una provincia</option>
            {provincias.map((provincia) => (
              <option key={provincia} value={provincia}>
                {provincia}
              </option>
            ))}
          </select>
        </div>
        <div>
          <label htmlFor="localidad" className="block text-gray-700">
            Localidad
          </label>
          <select
            id="localidad"
            className="w-full p-2 border border-gray-300 rounded-md"
            required
          >
            <option value="">Seleccione una localidad</option>
            {localidadesDisponibles.map((localidad) => (
              <option key={localidad} value={localidad}>
                {localidad}
              </option>
            ))}
          </select>
        </div>
        <div>
          <label htmlFor="mensaje" className="block text-gray-700">
            Mensaje
          </label>
          <textarea
            id="mensaje"
            className="w-full p-2 border border-gray-300 rounded-md h-32"
            required
          ></textarea>
        </div>
        <div className="text-center">
          <button
            type="submit"
            className="shadow-md px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-300"
          >
            Enviar
          </button>
        </div>
      </form>
    </div>
  );
};
