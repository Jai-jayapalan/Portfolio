'use client'
import React, { useState } from 'react'
import GithubIcon from '../../public/github.png'
import LinkedinIcon from '../../public/linkedin.png'
import Link from 'next/link'
import Image from 'next/image'

const EmailSection = () => {

  const [emailSndSuccessfully, setEmailSndSuccessfully] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault()
    const data = {
      email: e.target.email.value,
      subject: e.target.subject.value,
      message: e.target.message.value
    }
    const JSONData = JSON.stringify(data)
    const endpoints = '/api/send'
    const options = {
      method: 'POST',
      headers: {
          'Content-Type': 'application/json'
      },
      body: JSONData
    }

    // sending email/data
    const response = await fetch(endpoints, options)
    const resData = await response.json()
    
    (response.status == 200) ? setEmailSndSuccessfully(true) : null;
    
  }

  return (
    <section className='grid relative md:grid-cols-2 my-12 md:my-12 py-24 gap-4'>
        <div className='bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-purple-900 to-transparent rounded-full h-80 w-80 z-0 blur-lg absolute top-3/4 -left-4 transform -translate-x-1/2 -translate-1/2'></div>
        <div className='z-10'>
            <h5 className='text-xl font-bold text-white my-2'>Let's Connect</h5>
            <p className='text-[#ADB7BE] mb-4 max-w-md'>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Soluta perferendis, velit eaque vero 
                illo rerum labore odit aliquam 
                nostrum delectus eum totam recusandae facilis sequi ipsum alias, voluptatem, eius praesentium.
            </p>
            <div className='socials flex flex-row gap-2'>
              <Link href={'github.com'}>
                <Image alt='summa' src={GithubIcon} width={50} height={50}/>
              </Link>
              <Link href={'linkedin.com'}>
                <Image alt='summa' src={LinkedinIcon} width={50} height={50}/>
              </Link>
            </div>
        </div>
        <div>
          <form className='flex flex-col' onSubmit={handleSubmit}>
            <div className='mb-6'>
              <label htmlFor="email" className='text-white mb-2 block font-medium text-sm'>Your Email</label>
              <input
                name='email'
                type='email'
                id='email'
                required
                className='bg-[#18191E] text-center border bottom-[#33353F] placeholder-[#9CA2A9] text-gray-100 text-sm rounded-lg block w-full py-2.5'
                placeholder='Enter your email id'
              />
            </div>
            <div className='mb-6'>
              <label htmlFor="subject" className='text-white mb-2 block font-medium text-sm'>Subject</label>
              <input
                name='subject'
                type='text'
                id='subject'
                required
                className='bg-[#18191E] text-center border bottom-[#33353F] placeholder-[#9CA2A9] text-gray-100 text-sm rounded-lg block w-full py-2.5'
                placeholder='Just say hi!🙋‍♂️'
              />
            </div>
            <div className='mb-6'>
              <label htmlFor="message" className='text-white mb-2 block font-medium text-sm'>Message</label>
              <textarea
                name='message'
                id='message'
                required
                className='bg-[#18191E] text-center border bottom-[#33353F] placeholder-[#9CA2A9] text-gray-100 text-sm rounded-lg block w-full py-2.5'
                placeholder="Let's talk about...."
              />
            </div>
            <button
              type='submit'
              className='bg-purple-400 hover:bg-purple-600 text-white font-medium py-2.5 px-2.5 rounded-lg w-full'
            >
              Send Message
            </button>
            {
              emailSndSuccessfully && (
                <p className='text-green-500 text-sm mt-2'>
                    Email sent successfully!
                </p>
              )
            }
          </form>
        </div>
    </section>
  )
}

export default EmailSection