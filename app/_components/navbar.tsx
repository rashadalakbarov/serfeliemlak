import React from 'react'

import { Button } from "@/components/ui/button"
import {
    Sheet,
    SheetContent,
    SheetDescription,
    SheetHeader,
    SheetTitle,
    SheetTrigger,
  } from "@/components/ui/sheet"
import { CiMenuFries } from 'react-icons/ci'
import { companyConfig } from '@/config/company'
import Link from 'next/link'

const Navbar = () => {
  return (
    <>
      <Sheet>
        <SheetTrigger asChild>
          <Button variant="outline" className='lg:hidden flex'>
              <CiMenuFries />
          </Button>
        </SheetTrigger>
        <SheetContent>
          <SheetHeader className='flex justify-center'>
            <SheetTitle className='text-2xl text-[var(--theme-color)]'>{companyConfig.name}</SheetTitle>
            <SheetDescription></SheetDescription>
          </SheetHeader>
          <div className="p-5">
              <ul className='lg:hidden flex-col space-y-4'>
                  <li><Link href="" className='transition-all hover:text-[var(--theme-color)]'>Alqı-satqı</Link></li>
                  <li><Link href="" className='transition-all hover:text-[var(--theme-color)]'>Kirayə</Link></li>
                  <li><Link href="" className='transition-all hover:text-[var(--theme-color)]'>Günlük</Link></li>
                  <li><Link href="" className='transition-all hover:text-[var(--theme-color)]'>Agentliklər</Link></li>
                  <li><Link href="" className='transition-all hover:text-[var(--theme-color)]'>Yaşayış kompleksləri</Link></li>
              </ul> 
          </div>
        </SheetContent>
      </Sheet>
    </>
  )
}

export default Navbar