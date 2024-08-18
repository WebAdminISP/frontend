import axios from 'axios';

const apiURL = process.env.NEXT_PUBLIC_API_URL;

export const sendProfileChangeRequest = async (
  token: string,
  userId: string,
  data: {
    nombre: string;
    email: string;
    telefono: string;
    direccion: string;
    documento: string;
    codigoPostal: string;
    observaciones: string;
  }
) => {
  try {
    console.log("Datos a enviar:", { userId, ...data });
    const response = await axios.post(
      `${apiURL}/asistencias`,
      {
        userId,
        tipo: 'cambio_perfil',
        ...data,
      },
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );
    return response.data;
  } catch (error: any) {
    console.error("Error al enviar la solicitud de cambio de perfil:", error.response?.data || error.message);
    throw error;
  }
};

