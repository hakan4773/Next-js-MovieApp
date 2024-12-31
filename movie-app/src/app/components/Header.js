"use client"
import React, { useState } from "react";
import { CiSearch } from "react-icons/ci";
import MenuItem from "./MenuItem";
import ThemeComp from "./ThemeComp";
import { useRouter } from "next/navigation";

const Header = () => {
  const [keyword,setKeyword]=useState("");
  const router=useRouter();
  const menuItem = [
    {
      name: "About",
      url: "/about",
    },
    {
      name: "Sign",
      url: "/register",
    },
  ];

const searchMovie=(e)=>{
if(e.key==="Enter"  && keyword.length >=3)
{
  router.push(`/search/${keyword}`)
}

}


  return (
    <div className="flex items-center shadow-md h-20 gap-7 p-5 ">
      <div className=" text-2xl p-3 bg-amber-600  rounded-lg font-bold">
        Movie
      </div>
      <div className="flex items-center gap-2  flex-1 border p-3 rounded-lg">
        <input
        value={keyword}
        onChange={(e)=>setKeyword(e.target.value)}
        onKeyDown={searchMovie}
          type="text"
          className="outline-none flex-1 bg-transparent"
          placeholder="Arama yapınız"
        />
        <CiSearch size={25} />
      </div>
      <ThemeComp />

      {menuItem.map((mn,i) => (
        <MenuItem key={i} mn={mn} />
      ))}
    </div>
  );
};

export default Header;
