import React from 'react'

import Image from 'next/image'
import { Card, CardContent, CardHeader } from "@/components/ui/card"

// icons
import { IoDocumentText } from "react-icons/io5";
import { FaHammer, FaPercent } from "react-icons/fa";
import { CiHeart } from "react-icons/ci";
import { RiVipCrown2Fill } from "react-icons/ri";
import { RiVipDiamondFill } from "react-icons/ri";
import FormattedTime from '@/helper/FormattedTime';
import FormattedPrice from '@/helper/FormattedPrice';

type EstateProps = {
    datas: {
        imageUrl: string,
        price: number,
        status?: string,
        type?: string,
        roomcount?: number,
        area?: number,
        floor? :number,
        floorCount?: number,
        land?: number,
        rentTime?: number,
        location: string,
        city: string,
        repair? : number,
        percent?: number,
        doc?: number,
        timeStamp: number
    };
};

const EstateCard = ({datas}: EstateProps) => {
  return (
    <Card className='max-w-[300px] min-w-[250px] shadow-lg p-0 overflow-hidden gap-0'>
        <CardHeader className='p-0'>
            <div className='min-h-[120px] relative'>
                <Image src={datas.imageUrl} alt='properties' width={640} height={427} priority />

                {/* top section */}
                <div className='flex items-center absolute top-2.5 w-full px-1.5'>
                    <div className='flex items-center space-x-1.5'>
                        {datas.doc && (
                            <div className='w-[25px] h-[25px] bg-[#77c81d] rounded-full flex-center p-1'>
                                <IoDocumentText className='text-white' />
                            </div>
                        )}
                        
                        {datas.repair && (
                            <div className='w-[25px] h-[25px] bg-[#d93d04] rounded-full flex-center p-1'>
                                <FaHammer className='text-white' />
                            </div>
                        )}
                        
                        {datas.percent && (
                            <div className='w-[25px] h-[25px] bg-[#ff9f2b] rounded-full flex-center p-1'>
                                <FaPercent className='text-white' />
                            </div>
                        )}
                        
                    </div>
                    <div className='text-3xl ml-auto'>
                        <CiHeart className='text-white' />
                    </div>
                </div>                
                
                {/* bottom section */}
                <div className='flex items-center absolute bottom-2.5 w-full px-1.5'>
                    {
                        datas.type && (
                            <div className='flex items-center space-x-1.5'>
                                {
                                    datas.type == "agents" && <div className='bg-[#4264fd] text-white text-sm px-2 py-1 rounded-md'>
                                    Agentlik
                                </div>
                                }

{
                                    datas.type == "complex" && <div className='bg-[#af8329] text-white text-sm px-2 py-1 rounded-md'>
                                    Kompleks
                                </div>
                                }
                            </div>
                        )
                    }                    
                    
                    {
                        datas.status && (
                            <div className='flex items-center bg-white rounded-md px-1 py-1 ml-auto'>
                                <div className='text-base'>
                                    {
                                        datas.status == "vip" && <RiVipCrown2Fill className='text-[#ffcb0c]' />
                                    }                    
                                </div>
                                <div className='text-base'>
                                    {
                                        datas.status == "premium" && <RiVipDiamondFill className='text-[#ff3c00]' />
                                    }                     
                                </div>
                            </div>
                        )
                    }
                    
                </div>
                
            </div>
        </CardHeader>
        <CardContent className='py-[10px] px-[13px]'>            
            <div className='font-bold text-lg'><FormattedPrice value={datas.price} /> AZN 
                {datas.rentTime && (
                    `/${datas.rentTime === 1 ? "ay" : "gün"}`
                )}
            </div>
            <div className='text-base'>{datas.location}</div>
            <ul className='flex space-x-4 mb-1 text-[15px]'>
                {
                    datas.roomcount && (
                        <li>{datas.roomcount} otaqlı</li>
                    )
                }

                {
                    datas.area && (
                        <li>{datas.area} m<sup>2</sup></li>
                    )
                }
                
                {
                    datas.floor && (
                        <li>{datas.floor}/{datas.floorCount} mərtəbə</li>
                    )
                }

                {
                    datas.land && (
                        <li>{datas.land} sot</li>
                    )
                }
            </ul>
            <div className='flex items-center text-[#98918a]'>
                {datas.city}, &nbsp; <FormattedTime timestamp={datas.timeStamp}/>
            </div>
        </CardContent>
    </Card>
  )
}

export default EstateCard