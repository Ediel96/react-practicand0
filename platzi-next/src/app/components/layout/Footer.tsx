import '../../styles/globals.css';

import React from 'react'
import { Home, User, Menu, PiggyBank, Medal } from 'lucide-react';

const Footer = () => {
  return (
    <div className="fixed bottom-0 left-0 w-full bg-white border-t border-gray-300 flex justify-around py-3 shadow-lg">
      <button className="flex flex-col items-center text-gray-600 hover:text-blue-500">
        <Home className="w-6 h-6" />
        <span className="text-xs">Inicio</span>
      </button>
      <button className="flex flex-col items-center text-gray-600 hover:text-blue-500">
        <PiggyBank className="w-6 h-6" />
        <span className="text-xs">Gastos y ingresos</span>
      </button>
      <button className="flex flex-col items-center text-gray-600 hover:text-blue-500">
        <Medal className="w-6 h-6" />
        <span className="text-xs">Objetivos</span>
      </button>
      <button className="flex flex-col items-center text-gray-600 hover:text-blue-500">
        <User className="w-6 h-6" />
        <span className="text-xs">Perfil</span>
      </button>
      <button className="flex flex-col items-center text-gray-600 hover:text-blue-500">
        <Menu className="w-6 h-6" />
        <span className="text-xs">Menú</span>
      </button>
    </div>
  )
}

export default Footer