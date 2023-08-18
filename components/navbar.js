import Image from 'next/image'
import React from 'react';
import { AiOutlineShoppingCart } from 'react-icons/ai';

const Navbar = () => {
  return (
    <div className="flex flex-col md:flex-row md:justify-start justify-center items-center py-2">
      <div className="logo mx-4">
        <Image src="/logo.jpg" width={100} height={30}/>
      </div>
      <div className="nav ">
        <ul className="flex items-center space-x-3 font-bold md:text-xl md:m-3">
          <li>Tshirts</li>
          <li>Hoodies</li>
          <li>Stickers</li>
          <li>Mugs</li>
        </ul>
      </div>
      <div className="cart absolute right-0 top-5 mx-5">
       <AiOutlineShoppingCart className="text-xl md:text-3xl"/>
      </div>
    </div>
  );
  }

export default Navbar;