import React from 'react'
import Movies from './components/Movies';
import Tabs from './components/Tabs';

const page = async({searchParams}) => {

 const res= await fetch(`https://api.themoviedb.org/3/${searchParams.genre ? "movie/" + searchParams.genre : "trending/all/day" }?api_key=dac41509da52dc637f7c8eb69ecf5614&language=en-US&page=1`,{next:{revalidate:10000}})
  const data=await  res.json();
  return (
   <>
    <Tabs />
   <div className='flex items-center justify-center flex-wrap  gap-3'>
            

{
data?.results?.map((dt,i)=>(
<Movies key={i} dt={dt} />
))

}
    </div></>
  )
}

export default page