"use client"
import Image from 'next/image';
import React from 'react'
import { useRouter } from 'next/navigation';
const Movies = ({dt}) => {
 const router=useRouter();

  return (
<div onClick={()=>router.push(`/movie/${dt?.id}`)} className='min-w-[400px] relative cursor-pointer '>
<Image width={400} height={300}  src={`https://image.tmdb.org/t/p/original/${dt?.backdrop_path || dt?.poster_path}`} alt='movie'/>
 <div className='absolute cursor-pointer w-full h-full  flex flex-col justify-end bottom-0 p-2 opacity-0 hover:opacity-100 transition-opacity'>
 <div className='text-2xl font-bold'>{dt?.title}</div> 
 <div className=''>{dt?.release_date} - {dt?.vote_average}</div> 

 </div>
 
    </div>
  )
}

export default Movies
