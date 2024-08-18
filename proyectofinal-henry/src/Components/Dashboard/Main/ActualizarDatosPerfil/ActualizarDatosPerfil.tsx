"use client"
import React, { useState, useEffect } from 'react';
import { useAuth } from '@/context/AuthContext';
import { sendProfileChangeRequest } from '@/services/profileApi';

const ActualizarDatosPerfil: React.FC = () => {
  const { userData } = useAuth();

  const [formData, setFormData] = useState({
    nombre: '',
    email: '',
    telefono: '',
    direccion: '',
    documento: '',
    codigoPostal: '',
    observaciones: '',
  });

  const [errors, setErrors] = useState<any>({});
  const [submitError, setSubmitError] = useState<string | null>(null);

  useEffect(() => {
    if (userData) {
      setFormData({
        nombre: userData.userData.nombre || '',
        email: userData.userData.email || '',
        telefono: userData.userData.telefono?.toString() || '',
        direccion: userData.userData.direccion || '',
        documento: userData.userData.documento?.toString() || '',
        codigoPostal: userData.userData.codigoPostal?.toString() || '',
        observaciones: userData.userData.observaciones || '',
      });
    }
  }, [userData]);

  const validate = () => {
    const newErrors: any = {};

    if (!formData.nombre) newErrors.nombre = 'El nombre es obligatorio.';
    if (!formData.email) newErrors.email = 'El email es obligatorio.';
    else if (!/\S+@\S+\.\S+/.test(formData.email)) newErrors.email = 'El email no es válido.';
    if (!formData.telefono) newErrors.telefono = 'El teléfono es obligatorio.';
    if (!formData.direccion) newErrors.direccion = 'La dirección es obligatoria.';
    if (!formData.documento) newErrors.documento = 'El documento es obligatorio.';
    if (!formData.codigoPostal) newErrors.codigoPostal = 'El código postal es obligatorio.';

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitError(null);  // Limpiar errores previos
    if (validate()) {
      try {
        if (!userData?.tokenData.token || !userData.userData.id) {
          setSubmitError('Falta el token de autenticación o el ID de usuario.');
          return;
        }
  
        const token = userData.tokenData.token; 
        const userId = userData.userData.id;
  
        console.log("Token de autenticación:", token); // Verifica el token aquí
  
        const response = await sendProfileChangeRequest(token, userId, formData); 
        console.log("Solicitud de cambio de perfil enviada:", response);
      } catch (error) {
        console.error("Error al enviar los datos:", error);
        setSubmitError('Error al enviar los datos. Por favor, inténtalo de nuevo.');
      }
    }
  };

  return (
    <div className="max-w-lg mx-auto mt-24 bg-white shadow-md rounded-lg p-4">
      <h1 className="text-xl font-bold mb-4 text-center">Actualizar Perfil</h1>
      <form onSubmit={handleSubmit}>
        <div className="grid gap-4 mb-6">
          <div>
            <input 
              name="nombre"
              value={formData.nombre}
              onChange={handleChange}
              placeholder="Nombre"
              className="border p-2 rounded w-full"
            />
            {errors.nombre && <p className="text-red-500 text-sm">{errors.nombre}</p>}
          </div>
          <div>
            <input 
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Email"
              className="border p-2 rounded w-full"
            />
            {errors.email && <p className="text-red-500 text-sm">{errors.email}</p>}
          </div>
          <div>
            <input 
              name="telefono"
              value={formData.telefono}
              onChange={handleChange}
              placeholder="Teléfono"
              className="border p-2 rounded w-full"
            />
            {errors.telefono && <p className="text-red-500 text-sm">{errors.telefono}</p>}
          </div>
          <div>
            <input 
              name="direccion"
              value={formData.direccion}
              onChange={handleChange}
              placeholder="Dirección"
              className="border p-2 rounded w-full"
            />
            {errors.direccion && <p className="text-red-500 text-sm">{errors.direccion}</p>}
          </div>
          <div>
            <input 
              name="documento"
              value={formData.documento}
              onChange={handleChange}
              placeholder="Documento"
              className="border p-2 rounded w-full"
            />
            {errors.documento && <p className="text-red-500 text-sm">{errors.documento}</p>}
          </div>
          <div>
            <input 
              name="codigoPostal"
              value={formData.codigoPostal}
              onChange={handleChange}
              placeholder="Código Postal"
              className="border p-2 rounded w-full"
            />
            {errors.codigoPostal && <p className="text-red-500 text-sm">{errors.codigoPostal}</p>}
          </div>
          <div>
            <textarea 
              name="observaciones"
              value={formData.observaciones}
              onChange={handleChange}
              placeholder="Observaciones"
              className="border p-2 rounded w-full"
            />
          </div>
        </div>
        {submitError && <p className="text-red-500 text-center mb-4">{submitError}</p>}
        <button 
          type="submit" 
          className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600 w-full"
        >
          Solicitar cambios de datos
        </button>
      </form>
    </div>
  );
};

export default ActualizarDatosPerfil;
