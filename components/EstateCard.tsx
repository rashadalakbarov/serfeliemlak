import React from 'react'

import Image from 'next/image'
import { Card, CardContent, CardHeader } from "@/components/ui/card"

// icons
import { IoDocumentText } from "react-icons/io5";
import { FaHammer, FaPercent } from "react-icons/fa";
import { CiHeart } from "react-icons/ci";
import { RiVipCrown2Fill } from "react-icons/ri";
import { RiVipDiamondFill } from "react-icons/ri";

const EstateCard = () => {
  return (
    <Card className='w-[300px] shadow-lg p-0 overflow-hidden gap-0'>
        <CardHeader className='p-0'>
            <div className='min-h-[120px] relative'>
                <Image src={'/images/properties/p1.jpg'} alt='properties' width={640} height={427} priority />

                {/* top section */}
                <div className='flex items-center justify-between absolute top-2.5 w-full px-1.5'>
                    <div className='flex items-center space-x-1.5'>
                        <div className='w-[25px] h-[25px] bg-[#77c81d] rounded-full flex-center p-1'>
                            <IoDocumentText className='text-white' />
                        </div>
                        <div className='w-[25px] h-[25px] bg-[#d93d04] rounded-full flex-center p-1'>
                            <FaHammer className='text-white' />
                        </div>
                        <div className='w-[25px] h-[25px] bg-[#ff9f2b] rounded-full flex-center p-1'>
                            <FaPercent className='text-white' />
                        </div>
                    </div>
                    <div className='text-3xl'>
                        <CiHeart className='text-white' />
                    </div>
                </div>                
                
                {/* bottom section */}
                <div className='flex items-center justify-between absolute bottom-2.5 w-full px-1.5'>
                    <div className='flex items-center space-x-1.5'>
                        <div className='bg-[#4264fd] text-white text-sm px-2 py-1 rounded-md'>
                            Agentlik
                        </div>
                        <div className='bg-[#af8329] text-white text-sm px-2 py-1 rounded-md'>
                            Kompleks
                        </div>
                    </div>

                    <div className='flex items-center space-x-1.5 bg-white rounded-md px-1 py-1'>
                        <div className='text-base'>
                            <RiVipCrown2Fill className='text-[#ffcb0c]' />
                        </div>
                        <div className='text-base'>
                            <RiVipDiamondFill className='text-[#ff3c00]' />
                        </div>
                    </div>
                </div>
                
            </div>
        </CardHeader>
        <CardContent className='py-[10px] px-[13px]'>            
            <div className='font-bold text-lg'>150000 AZN / ay gün</div>
            <div className='text-base leading-4'>Nəriman Nərimanov m.</div>
            <ul className='flex space-x-4 mb-1'>
                <li>2 otaqlı</li>
                <li>45 m<sup>2</sup></li>
                <li>3/5 mərtəbə</li>
                <li>4 sot</li>
            </ul>
            <div className='flex justify-between items-center text-[#98918a]'>
                Sumqayıt, dünən 22:40
            </div>
        </CardContent>
    </Card>
  )
}

export default EstateCard