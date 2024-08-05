// src/services/equiposService.ts

import axios from "axios";
import Equipos from "@/types/Equipos.types";

export const fetchEquipos = async (token: string): Promise<Equipos[]> => {
  try {
    const response = await axios.get(
      "http://localhost:3000/equipos?page=1&limit=5",
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );
    return response.data;
  } catch (error) {
    console.error("Error al obtener los datos:", error);
    throw error;
  }
};


export const AddEquipo = async (token: string, data: Equipos) => {
  try {
    const response = await axios.post("http://localhost:3000/equipos", data, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    return response.data;
  } catch (error) {
    console.error("Error al crear el equipo:", error);
    throw error;
  }
};

export const EditarEquipo = async (id: string, data: Equipos, token: string) => {
  try {
    const response = await axios.put(`http://localhost:3000/equipos/${id}`, data, {
      headers: {
        Authorization: `Bearer ${token}`, // Incluir el token en los encabezados
      },
    });
    return response.data;
  } catch (error) {
    console.error("Error al editar el equipo:", error);
    throw error; // Re-lanzar el error para que pueda ser manejado por el componente
  }
};