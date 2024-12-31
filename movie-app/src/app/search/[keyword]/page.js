import Movies from '@/app/components/Movies';
import React from 'react'

const page =async ({params}) => {
const keyword=params.keyword;

const res= await fetch(`https://api.themoviedb.org/3/search/movie?api_key=dac41509da52dc637f7c8eb69ecf5614&query=${keyword}&language=en-US&include_adult=false`);
const data=await res.json();
console.log(data)
  return (
    <div className='flex items-center gap-3 flex-wrap'>
      {!data?.results ? <div className='text-3xl'>Aranılan film bulunamadı!!!</div> :
      
        data?.results?.map((dt,i)=>(
        <Movies key={i} dt={dt} />
        ))
        
        
      
      }
    </div>
  )
}

export default page
