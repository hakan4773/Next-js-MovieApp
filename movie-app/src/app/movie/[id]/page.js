import Image from 'next/image'
import React from 'react'
const getMovie=async(id)=>{
const res=await fetch(`https://api.themoviedb.org/3/movie/${id}?api_key=dac41509da52dc637f7c8eb69ecf5614`)
return await res.json()
}
const Page = async({params}) => {
const id=params.id
const movie= await getMovie(id)
return (
    <div className='p-7 min-h-screen relative'>
      
<Image fill  src={`https://image.tmdb.org/t/p/original/${movie?.backdrop_path || movie?.poster_path}`} alt='movie'/>
<div className='absolute '>
  
<div className='text-4xl'>{movie.title}</div>
<div className='w-1/2 my-3 '>
  {movie.overview}
  
</div>
<div className='my-3 '>
{movie?.release_date} - {"IMDB : " +movie?.vote_average}
  
</div>


<button className='p-2 rounded-md  bg-blue-600 w-40 hover:bg-blue-500 text-xl'>Trial</button>
</div>

    </div>
  )
}

export default Page