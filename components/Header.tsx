import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from '@radix-ui/react-tooltip'
import Link from 'next/link'
import React from 'react'
import { FaPlus } from 'react-icons/fa'
import { MdFavoriteBorder } from 'react-icons/md'
import { Button } from './ui/button'
import { companyConfig } from '@/config/company'
import Navbar from '@/app/_components/navbar'

const Header = () => {
  return (
    <div className='flex items-center justify-between w-full mb-14 mt-3'>
      <div className='flex items-center gap-2 grow'>
        <Link href="/" className='mr-3 font-bold uppercase'>{companyConfig.name}</Link>
        <ul className='gap-5 hidden lg:flex'>
          <li><Link href="" className='transition-all hover:text-[var(--theme-color)]'>Alqı-satqı</Link></li>
          <li><Link href="" className='transition-all hover:text-[var(--theme-color)]'>Kirayə</Link></li>
          <li><Link href="" className='transition-all hover:text-[var(--theme-color)]'>Günlük</Link></li>
          <li><Link href="" className='transition-all hover:text-[var(--theme-color)]'>Agentliklər</Link></li>
          <li><Link href="" className='transition-all hover:text-[var(--theme-color)]'>Yaşayış kompleksləri</Link></li>
        </ul>        
      </div>

      <div className='flex items-center gap-3 justify-end grow-0'>
        <TooltipProvider>
          <Tooltip>
            <TooltipTrigger asChild>
              <Link href="/bookmarks"><MdFavoriteBorder className='text-3xl' /></Link>
            </TooltipTrigger>
            <TooltipContent side='top'>
              Seçilmişlər
            </TooltipContent>
          </Tooltip>
        </TooltipProvider>

        <Button asChild variant="default">
          <Link href="/new"><FaPlus className='mr-1'/>yeni elan</Link>
        </Button>

        <Button asChild variant="outline">
          <Link href="/login">Giriş</Link>
        </Button>

        <Navbar />
      </div>
    </div>
  )
}

export default Header