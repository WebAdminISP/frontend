'use client'
import { useAuth } from '@/context/AuthContext';
import { userdataMock } from '@/helpers/userMock';
import { validateLogin } from '@/helpers/validateLogin';
import { loginSesion, loginUser } from '@/services/user.services';
import { IToken, IUserSession } from '@/types/types';
import Link from 'next/link';
import React, { useState } from 'react'
import Swal from 'sweetalert2';

const LoginForm = () => {   
    const { login } = useAuth();

	const [formData, setFormData] = useState({
		username: '',
		password: '',
	  });

	const [errors, setErrors] = useState({
		username: '',    
		password: '',   
	  });  
	  
	  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		const { name, value } = e.target;
		let updatedValue = value;
		if (name === 'username') updatedValue = value.toLowerCase();
		setFormData({ ...formData, [name]: updatedValue });
	
		const fieldErrors = validateLogin({ ...formData, [name]: value });
		setErrors({ ...errors, [name]: fieldErrors[name] });
	  };
	
	  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault();

			try{

                //const res: IToken = await loginSesion(formData);
                //const { token } = res
               //if (token){
				setFormData({ username: '', password: ''});
				//const user: IUserSession = await loginUser(formData.username);
        const user: IUserSession = userdataMock[0]
				if (user) {
                // login({ token,  user}); 
                 login({ token:"qwewtyhghgh",  user});
                Swal.fire({
                  title: "¡Acceso exitoso!",
                  html: `  <h1 style="color:gray; font-size:25px; font-weight: 500;" > Bienvenido(a):</h1>
				  		   <p style="margin-top:10px">${user.email}</p> 
                           <p style="font-size:20px">${user.name} ${user.lastname} ${user.motherLastName}</p>	
                   `,
                  icon: "success",
                  showCancelButton: false,
                  confirmButtonColor: "#3085d6",
                  confirmButtonText: "Ok"
                })
				}
              }
        //  } 
          catch (err: any) {
              const errorMessage = err.message;
              Swal.fire({
                icon: "error",
                title: "Oops...",
                text: errorMessage,
              });
            }	
          }


     return (
		<div className=" mt-[30%] w-96 h-64 overflow-hidden bg-gray-100 rounded-xl shadow-2xl p-4 ">
		  <div>
			<form onSubmit={handleSubmit} className='px-5'>
			  <input
                className=' w-11/12 h-10 bg-gray-300 justify-center flex p-4 mt-6 outline-none rounded-md text-sm placeholder-gray-700'
				type="text"
				name="username"
				placeholder="Usuario"
				value={formData.username}
				onChange={handleChange}
			  />
				{errors.username  && <p className=" text-red-700 text-sm pl-4 fixed italic whitespace-pre-line"> {errors.username} </p>}
			  <input
                className=' w-11/12 h-10 bg-gray-300 justify-center flex p-4 mt-6 outline-none rounded-md text-sm placeholder-gray-700'
				type="password"
				name="password"
				placeholder="Contraseña"
				value={formData.password}
				onChange={handleChange}
			  />
			    {errors.password  && <p className=" text-red-700 text-sm pl-4 fixed italic whitespace-pre-line"> {errors.password} </p>}

			  <button disabled={Object.values(errors).some(error =>  error !== undefined)} className={Object.values(errors).some(error =>  error !== undefined) ? "w-11/12 h-10 mt-6 bg-gray-400 justify-center block text-gray-100 text-sm rounded-md ease-in cursor-not-allowed" : "w-11/12 h-10 mt-6 bg-blue-700 justify-center block text-gray-100 text-sm rounded-md ease-in cursor-pointer"} type="submit">INICIAR SESIÓN</button>
			</form>
            <div className='mt-1'>
            <Link href="/" className='text-gray-500 text-sm'>¿Olvidaste tu contraseña?</Link>
            </div>
		  </div>
		</div>
	  )
	};

export default LoginForm;