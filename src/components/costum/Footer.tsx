import React from 'react'
import { SocialIcon } from 'react-social-icons/component'
import 'react-social-icons/github'
import 'react-social-icons/linkedin'

const Footer = () => {
  return (
    <div>
      <div className='w-[100%] min-h-[80px]  bg-slate-500 text-center p-4 text-white'>
      <h1>Created by <b><i>@Anousha AsadUllah</i></b></h1>
      <h5>All rights are reserved</h5>
     <div className="flex gap-2 justify-center p-4">
     <SocialIcon url="https://github.com/Anousha1846" />
     <SocialIcon url="https://www.linkedin.com/feed/" />

     </div>

    </div>
    </div>
  )
}

export default Footer
