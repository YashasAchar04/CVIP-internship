import React from 'react'
import SideNavbar from './SideNavbar';
import "./Bg.css";
import { useForm } from 'react-hook-form';

const Contact = () => {
  const {
    register,
    handleSubmit,
    watch,
    setError,
    formState: { errors, isSubmitting, isSubmitSuccessful },
  } = useForm();

  const delay = (d) => {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve()
      }, d * 1000);
    })
  }
  const onSubmit = async (data) => {
    await delay(3)
    console.log(data)
  }

  return (
    <div className="bg bg-zinc-600 flex md:w-full w-screen overflow-hidden">
      <SideNavbar />
      <div className='flex flex-col gap-3 w-screen h-screen justify-center items-center'>
        <h1 className='text-2xl font-secondary_heading'>You can also contact us here</h1>
        <div className='flex gap-4'>
        <a href="https://www.instagram.com/yashas_acharya_?igsh=MTZ1MzNzcnVseGk1cw=="><svg className='hover:text-[#0ff]' id='insta' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24" color="#ffffff" fill="none">
          <path d="M2.5 12C2.5 7.52166 2.5 5.28249 3.89124 3.89124C5.28249 2.5 7.52166 2.5 12 2.5C16.4783 2.5 18.7175 2.5 20.1088 3.89124C21.5 5.28249 21.5 7.52166 21.5 12C21.5 16.4783 21.5 18.7175 20.1088 20.1088C18.7175 21.5 16.4783 21.5 12 21.5C7.52166 21.5 5.28249 21.5 3.89124 20.1088C2.5 18.7175 2.5 16.4783 2.5 12Z" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round" />
          <path d="M16.5 12C16.5 14.4853 14.4853 16.5 12 16.5C9.51472 16.5 7.5 14.4853 7.5 12C7.5 9.51472 9.51472 7.5 12 7.5C14.4853 7.5 16.5 9.51472 16.5 12Z" stroke="currentColor" strokeWidth="1.5" />
          <path d="M17.5078 6.5L17.4988 6.5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
        </svg></a>
        <a href="https://github.com/YashasAchar04"><svg className='hover:text-[#0ff]' id='github' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24" color="#ffffff" fill="none">
    <path d="M10 20.5675C6.57143 21.7248 3.71429 20.5675 2 17" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    <path d="M10 22V18.7579C10 18.1596 10.1839 17.6396 10.4804 17.1699C10.6838 16.8476 10.5445 16.3904 10.1771 16.2894C7.13394 15.4528 5 14.1077 5 9.64606C5 8.48611 5.38005 7.39556 6.04811 6.4464C6.21437 6.21018 6.29749 6.09208 6.31748 5.9851C6.33746 5.87813 6.30272 5.73852 6.23322 5.45932C5.95038 4.32292 5.96871 3.11619 6.39322 2.02823C6.39322 2.02823 7.27042 1.74242 9.26698 2.98969C9.72282 3.27447 9.95075 3.41686 10.1515 3.44871C10.3522 3.48056 10.6206 3.41384 11.1573 3.28041C11.8913 3.09795 12.6476 3 13.5 3C14.3524 3 15.1087 3.09795 15.8427 3.28041C16.3794 3.41384 16.6478 3.48056 16.8485 3.44871C17.0493 3.41686 17.2772 3.27447 17.733 2.98969C19.7296 1.74242 20.6068 2.02823 20.6068 2.02823C21.0313 3.11619 21.0496 4.32292 20.7668 5.45932C20.6973 5.73852 20.6625 5.87813 20.6825 5.9851C20.7025 6.09207 20.7856 6.21019 20.9519 6.4464C21.6199 7.39556 22 8.48611 22 9.64606C22 14.1077 19.8661 15.4528 16.8229 16.2894C16.4555 16.3904 16.3162 16.8476 16.5196 17.1699C16.8161 17.6396 17 18.1596 17 18.7579V22" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
</svg></a>
<a href="https://www.linkedin.com/in/yashas-achar-aa9788231/">
<svg className='hover:text-[#0ff]' id='linkedin' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24" color="#ffffff" fill="none">
    <path d="M7 10V17" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    <path d="M11 13V17M11 13C11 11.3431 12.3431 10 14 10C15.6569 10 17 11.3431 17 13V17M11 13V10" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    <path d="M7.00801 7L6.99902 7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    <path d="M2.5 12C2.5 7.52166 2.5 5.28249 3.89124 3.89124C5.28249 2.5 7.52166 2.5 12 2.5C16.4783 2.5 18.7175 2.5 20.1088 3.89124C21.5 5.28249 21.5 7.52166 21.5 12C21.5 16.4783 21.5 18.7175 20.1088 20.1088C18.7175 21.5 16.4783 21.5 12 21.5C7.52166 21.5 5.28249 21.5 3.89124 20.1088C2.5 18.7175 2.5 16.4783 2.5 12Z" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round" />
</svg>
</a>
<a href="https://x.com/yashas_m90755?t=_H2scoaigQJ5fyR8P_3DFg&s=08">
<svg className='hover:text-[#0ff]' id='twitter' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24" color="#ffffff" fill="none">
    <path d="M3 21L10.5484 13.4516M21 3L13.4516 10.5484M13.4516 10.5484L8 3H3L10.5484 13.4516M13.4516 10.5484L21 21H16L10.5484 13.4516" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
</svg>
</a>
</div>
        <form className='border border-[#0ff] flex items-center flex-col gap-5 p-10 rounded-xl md:w-1/2 h-1/2' action="" onSubmit={handleSubmit(onSubmit)}>
          <div className='flex w-full flex-col items-center gap-3 justify-center'>
            <input placeholder='Enter Your Email Address' {...register("email", { required: { value: true, message: "This is a Required Field" }, minLength: { value: 4, message: "Your email must have atleast 4 characters" } })} className='text-white font-paragraph bg-none w-full lg:w-3/4 lg:px-4 py-2 text-sm md:text-lg lg:text-xl bg-zinc-600 outline-none border-[#0ff] hover:border-b-2' type="email" />
            {errors.email && <h1 className='text-red-500 font-paragraph text-center font-medium'>{errors.email.message}</h1>}
          </div>
          <div className='flex font-paragraph w-full flex-col items-center gap-3 justify-center'>
            <input placeholder='Enter Your Phone Number' {...register("number",{maxLength :{value:10,message : "Invalid Phone Number"}})} className='text-white w-full lg:w-3/4 lg:px-4 py-2 text-sm md:text-lg  bg-zinc-600 outline-none border-[#0ff] hover:border-b-2' type="tel" 
            pattern='[0-9]{10}'/>
          </div>
          {errors.number && <h1 className='text-red-500 font-paragraph text-center font-medium'>{errors.number.message}</h1> }
          <button disabled={isSubmitting} className='border font-pro_font hover:bg-[#0ff] hover:text-black w-2/3 md:w-1/3 py-2 rounded-lg'>Submit</button>
          {isSubmitting && <h1 className='text-white'>Submitting...</h1>}
          {isSubmitSuccessful && <div>
          <h1 className='font-secondary_heading'>Thank you for contacting us</h1>
          <p className='font-paragraph'>We will get into your touch ASAP!!</p>
        </div>}
        </form>
        
      </div>
    </div>
  )
}

export default Contact
