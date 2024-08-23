'use client';
import React from 'react'
import ButtonAvatar from './ButtonAvatar/ButtonAvatar';
import ButtonDarkMode from './ButtonDarkMode/ButtonDarkMode';
import ButtonNotification from './ButtonNotification/ButtonNotification';
import { useAuth } from '@/context/AuthContext';
<<<<<<< HEAD
import ButtonOnline from './ButtonOnline/ButtonOnline';
import { useConnect } from '@/context/SocketContext';

const Navbar = () => {
  const { userData } = useAuth();
  const { online } = useConnect();
=======

const Navbar = () => {
  const { userData } = useAuth();
>>>>>>> develop
  return (
    <nav className="fixed w-full h-16 bg-gradient-to-r from-[#0b2542] via-blue-950/90 to-blue-950/70 z-10 dark:border-b dark:border-gray-600 dark:bg-gradient-to-r dark:from-gray-900 dark:via-gray-800/90 dark:to-gray-600/70">
      <div className="mx-auto h-16 flex justify-between items-center">
        <div className="flex space-x-4 items-center justify-center text-center ml-auto mr-4">
            {userData?.tokenData.user.roles.includes('admin') && <ButtonOnline />}
            {userData?.tokenData.user.roles.includes('admin') && <div className={`${online ? 'transition-opacity duration-300 ease-out ' : 'transition-opacity duration-300 ease-out opacity-0 pointer-events-none'}  `}> <ButtonNotification /> </div>}
            <ButtonDarkMode />
<<<<<<< HEAD
=======
            {userData?.tokenData.user.roles.includes('admin') && <ButtonNotification />}
>>>>>>> develop
            <ButtonAvatar />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;