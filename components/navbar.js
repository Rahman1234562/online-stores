import Image from 'next/image'
import Link from 'next/link';
import React from 'react';
import { AiOutlineShoppingCart } from 'react-icons/ai';

const Navbar = () => {
  return (
    <div className="flex flex-col md:flex-row md:justify-start justify-center items-center py-2 shadow-md">
      <div className="logo mx-4">
        <Link href={"/"} legacyBehavior><a><Image src="/logo.jpg" width={100} height={30}/></a></Link>
      </div>
      <div className="nav ">
        <ul className="flex items-center space-x-3 font-bold md:text-xl md:m-3">
          <Link href={"/tshirts"} legacyBehavior><a><li>Tshirts</li></a></Link>
          <Link href={"/hoodies"} legacyBehavior><a><li>Hoodies</li></a></Link>
          <Link href={"/stickers"} legacyBehavior><a><li>Stickers</li></a></Link>
          <Link href={"/mugs"} legacyBehavior><a><li>Mugs</li></a></Link>
        </ul>
      </div>
      <div className="cart absolute right-0 top-5 mx-5">
       <AiOutlineShoppingCart className="text-xl md:text-3xl"/>
      </div>
    </div>
  );
}

export default Navbar;