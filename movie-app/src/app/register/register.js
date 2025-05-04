"use client"
import Link from 'next/link';
import React, { useState } from 'react'
import  { useRouter } from 'next/navigation';
import { CiFacebook } from 'react-icons/ci';
import { CiInstagram } from 'react-icons/ci';
import { CiTwitter } from 'react-icons/ci';
const Register = () => {
const [form,setForm]=useState({
  name:"",
  email: "",
  password: "",
}); 
const [errors,setErrors]=useState({});
const router=useRouter();
const HandleChange=(e)=>{




const {name,value}=e.target;
setForm(prev=>({...prev,[name]:value}))
}

const validateForm=()=>{
  const newErrors={}
  
  if (!form.email) {
    newErrors.email = "Email field is required.";
  } else if (!/\S+@\S+\.\S+/.test(form.email)) {
    newErrors.email = "Enter a valid email address";
  }


  if(!form.name){
    newErrors.name="Name field is required"
  }
  else if (form.name.length < 3) {
    newErrors.name = "Name field is minimum 3 character.";
  }


  if(!form.password){
    newErrors.password="Password field is required"
  }
  else if (form.password.length < 6) {
    newErrors.password = "Password field is minimum 6 character.";
  }
return newErrors;
}

const handleSubmit=async(e)=>{
e.preventDefault();
try {
  
  const validateErrors=validateForm();

  if(Object.keys(validateErrors).length >0){
    setErrors(validateErrors)
  }
  else{
    setErrors({})

const response=await fetch("/api/register",{

  method:"POST",
  headers:{
    'Content-Type':"application/json"},
    body: JSON.stringify(form)
})
    console.log("Form gönderildi:", form);

 

  if (response.ok) {
    const data = await response.json();
    alert(`Kayıt başarılı! Hoş geldiniz, ${data.name}`);
  } else {
    const error = await response.json();
    alert(`Hata: ${error.message}`);
  } }


} catch (error) {
      console.error('Kayıt hatası:', error);
      alert('Kayıt sırasında bir hata oluştu.');
}



}


return (
    <div className='flex justify-center items-center pb-12 w-screen h-screen  '>
     
      <form  onSubmit={handleSubmit} className='h-[500px] shadow-xl  rounded-md  border w-1/3 bg-opacity-80 flex  flex-col justify-center  items-center space-y-4    '>
      <h1 className=' flex justify-center text-center text-3xl font-bold'>Create an Account</h1>
      <p className='flex justify-center text-center opacity-80 '>Please Enter your information to get started </p>
     <div className='flex space-x-4'>
     <Link href={"facebook"}><CiFacebook size={30}/></Link> 
     <Link href={"instagram"}><CiInstagram size={30}/></Link> 
     <Link href={"Twitter"}><CiTwitter size={30}/></Link> 
     </div>
     
      <div className=' flex flex-col'>
        <label className='font-bold opacity-85' htmlFor="name">Name</label>
        <input value={form.name} onChange={HandleChange} className='rounded-md border  p-2 w-80 focus:border-2 shadow-sm ' id="name" name="name" placeholder="Name" />
  {errors.name && <p className='text-red-500 text-sm'>{errors.name}</p>}
      </div>
      <div className=' flex flex-col '>
        <label className='font-bold opacity-85'  htmlFor="email">Email</label>
        <input value={form.email} onChange={HandleChange}  className='rounded-md border  p-2 w-80 focus:border-2 shadow-sm' id="email" name="email" type="email" placeholder="Email" />
        {errors.email && <p className='text-red-500 text-sm'>{errors.email}</p>}
      </div>
      <div className='flex flex-col'>
        <label className='font-bold opacity-85'  htmlFor="password">Password</label>
        <input value={form.password}  onChange={HandleChange}  className='  rounded-md border  p-2 w-80 focus:border-2 shadow-sm' id="password" name="password" type="password"  placeholder="Password" />
        {errors.password && <p className='text-red-500 text-sm'>{errors.password}</p>}
      </div>
      <button type='submit' className='w-[320px] p-2 text-white border rounded-md hover:bg-gray-400 bg-gray-800  font-bold shadow-sm'>Sign Up</button>
<p className=''>Already have an acoount <Link className='underline ' href={"/login"}>Login</Link> </p>
    </form>

<div className='h-[500px]  shadow-xl text-white w-1/3  flex flex-col justify-center items-center  rounded-md border bg-red-500'>
{/* <img
className='object-cover h-full'
src="https://variety.com/wp-content/uploads/2023/03/Movie-Theater-Film-Cinema-Exhibition-Placeholder.jpg" alt='movie'/> */}
<h1 className='text-4xl p-4'>
Welcome Back!

</h1>
<p className='p-2'>Login for Start watching movie</p>
<div><button className='p-2 w-40 border rounded-full hover:bg-red-300'>Login</button></div>
</div>



    </div>
  )
}

export default Register
