import axios from 'axios';

const apiURL = process.env.NEXT_PUBLIC_API_URL;

export const sendProfileChangeRequest = async (
  token: string,
  userId: string | undefined,
  data: {
      nombre: string,
      telefono: string,
      direccion: string,
      documento: number,
      email: string,
      codigoPostal: string
  }
) => {
  try {
    // console.log("Datos a enviar:", { data.id, ...data });
    const response = await axios.put(
      `${apiURL}/users/${userId}`,
      {
        data,
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

