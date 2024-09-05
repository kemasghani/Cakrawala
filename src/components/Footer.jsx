import React from 'react'
import Image from 'next/image';
import Icon from '../../public/images/icon.png';

function Footer() {
  return (
    <div className="bg-black text-white">
      <div className="w-[86%] flex justify-between m-auto py-16">
        <div className="w-[70%] flex flex-col gap-10">
          <p className="font-[400] text-[17px]">Conntact us !</p>
          <p className="font-[500] text-[44px]">Schedule a appointment</p>
          <div className="flex items-center px-5 gap-5 cursor-pointer">
            <p className="underline font-[400] text-[16px]">Contact Us</p>
            <svg width="49" height="16" viewBox="0 0 49 16" fill="none" xmlns="http://www.w3.org/2000/svg">
              <g clip-path="url(#clip0_1_489)">
                <path fill-rule="evenodd" clip-rule="evenodd" d="M45.6212 8.25035H0.219971V7.29035H45.6212L39.7205 1.38976L40.3994 0.710938L47.1194 7.43094L47.4588 7.77035L47.1194 8.10976L40.3994 14.8298L39.7205 14.1509L45.6212 8.25035Z" fill="white" />
              </g>
              <defs>
                <clipPath id="clip0_1_489">
                  <rect width="48" height="14.4" fill="white" transform="translate(0.219971 0.710938)" />
                </clipPath>
              </defs>
            </svg>
          </div>
          <p className="font-[400] text-[19px]">We can discuss how our services can elevate your brand by creating aesthetically stunning websites, showcase relevant examples of our previous work, and provide transparent pricing that reflects the value we deliver.</p>
          <p className="font-[400] text-[17px]">XIVU STUDIOS</p>
        </div>
        <div className="flex items-end">
          <Image
            src={Icon}
            width={200}
            height={200}
            alt="xivu"
            loading="lazy"
          />
        </div>
      </div>
    </div>
  )
}




export default Footer