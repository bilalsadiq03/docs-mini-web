import React from 'react'
import { LuFileSpreadsheet } from "react-icons/lu";
import { PiDownloadSimple } from "react-icons/pi";
import { IoCloseSharp } from "react-icons/io5";
import { motion } from 'framer-motion';

function Card({data,reference}) {
  return (
    <motion.div  drag dragConstraints={reference} whileDrag={{scale: 1.2}} dragElastic={0.2} className='relative flex-shrink-0 w-60 h-72 rounded-[45px] bg-zinc-900/90 text-white px-8 py-10 overflow-hidden'>
        <LuFileSpreadsheet />
        <p className='text-sm mt-5 font-semibold leading-tight'> {data.desc}
        </p>
        <div className='footer absolute bottom-0 w-full left-0 '>
            <div className='flex items-center justify-between mb-3 px-8 '>
                <h5>{data.filesize}</h5>
                <span className='w-7 h-7 bg-zinc-600 py-2 rounded-full flex items-center justify-center'>
                    {data.close ? <IoCloseSharp /> : <PiDownloadSimple size=".7em" color='#fff' /> }
                    
                </span>
            </div>
            {
                data.tag.isOpen && (
                    <div className={`tag w-full py-4 ${data.tag.tagColor === "blue" ? "bg-blue-600" : "bg-green-600"} flex items-center justify-center`}>
                    <h3 className='text-sm font-semibold'>{data.tag.tagTitle}</h3>
                </div>
                ) 
            }
           
        </div>
    </motion.div>
  )
}

export default Card