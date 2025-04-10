"use client"

import React from 'react'

import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
  } from "@/components/ui/card"

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"
import { propertiesData } from '@/config/properties'

import Autoplay from "embla-carousel-autoplay"
import { Badge } from "@/components/ui/badge"
import { FiMapPin } from "react-icons/fi";
import { CiClock1 } from "react-icons/ci";
import Image from 'next/image'

const RecentProperty = () => {
  return (
    <>
        <Carousel
            opts={{
                align: "start",
                loop: true,
            }}
            plugins={[
                Autoplay({
                  delay: 2000,
                }),
            ]}
            className="w-full"
            >
            <CarouselContent>
                {propertiesData.map((item, index) => {
                    return (
                        <CarouselItem key={index} className='lg:basis-1/3 xl:basis-1/4'>
                            <div className='p-3'>
                                <Card className='shadow-lg'>
                                    <CardHeader className='relative'>
                                        <Image src={item.imageUrl} alt='property' width={640} height={427} priority/>
                                        {
                                            item.status && (
                                                <Badge className='absolute top-4 left-4 bg-orange-500 text-white text-sm px-2 hover:bg-orange-600'>{item.status}</Badge>
                                            )
                                        }
                                    </CardHeader>
                                    <CardContent className='p-4'>
                                        <CardTitle>{item.propertyName}</CardTitle>
                                        <CardDescription className='flex items-center text-sm text-gray-500 mt-2'>
                                            <FiMapPin className="w-4 h-4 mr-2"/>{item.location}
                                        </CardDescription>
                                        <CardDescription className='flex items-center text-sm text-gray-500 mt-2'>
                                            <CiClock1 className="w-4 h-4 mr-2"/>{item.size}
                                        </CardDescription>
                                    </CardContent>
                                    <CardFooter className="flex justify-between">
                                        
                                    </CardFooter>
                                </Card>
                            </div>
                        </CarouselItem>
                    )
                })}
                
            </CarouselContent>
            <CarouselPrevious className='left-0' />
            <CarouselNext className='right-0' />
        </Carousel>
    </>
  )
}

export default RecentProperty