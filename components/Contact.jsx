import React from 'react'
import emailjs from '@emailjs/browser';
import { useForm } from "react-hook-form";
const Contact = () => {
  const { register, handleSubmit, formState: { errors }, reset } = useForm({ mode: 'onChange' });

  const onSubmit = (data) => {
    emailjs.send('service_9sfjn6i', 'template_y8iv969', data, 'kW4mdAe06veRC0U_t').then((res) => {
      console.log({ success: true })
      reset()
    }).catch((err) => console.log(err));
  }
  return (
    <div id='contact' className='lg:w-4/12 md:w-3/5 w-4/5 mx-auto'>
      <h2 className='text-4xl font-garet text-center '>let us talk</h2>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className='flex flex-col mt-2'>
          <label htmlFor="name">Name</label>
          <input type="text" className='border-b border-black outline-none w-full p-2' {...register('name', {
            required: 'name is required'
          })} />
        </div>
        <div className='flex flex-col mt-2'>
          <label htmlFor="email">Email</label>
          <input type="email" className='border-b border-black outline-none w-full p-2' {...register('email', {
            required: 'email is required',
            pattern: {
              value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
              message: 'invalid email'
            }
          })} />
        </div>
        <div className='flex flex-col mt-2'>
          <label htmlFor="message">Message</label>
          <textarea type="message" className='border-b border-black outline-none w-full p-2' {...register('message', {
            required: 'message is required'
          })} />
        </div>
        <div className='mt-2'>
          <input className='w-32 bg-black text-white p-3 cursor-pointer' type="submit" value="send" />
        </div>
      </form>
    </div>
  )
}

export default Contact