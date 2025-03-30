import { companyConfig } from '@/config/company'
import Link from 'next/link'
import React from 'react'

const Footer = () => {
  return (
    <footer className='flex w-full flex-row flex-wrap items-center justify-center gap-y-6 gap-x-12 border-t border-gray-500 py-4 text-center md:justify-between text-neutral-500'>
        <div className='text-center md:text-left'>            
            <p className='font-normal'>Saytın Administrasiyası reklam bannerlərinin və yerləşdirilmiş elanların məzmununa görə məsuliyyət daşımır.</p>
            <p className='font-normal'>&copy; 2025 {companyConfig.name}</p>
        </div>
        <ul className="flex flex-wrap items-center gap-y-2 gap-x-8">
            <li>
            <Link href="/about" className="font-normal transition-colors hover:text-[var(--theme-color)]">
                Haqqımızda
            </Link>
            </li>
            <li>
            <Link href="/terms-and-conditions" className="font-normal transition-colors hover:text-[var(--theme-color)]">
                İstifadəçi razılaşması
            </Link>
            </li>
            <li>
            <Link href="/privacy" className="font-normal transition-colors hover:text-[var(--theme-color)]">
                Məxfilik siyasəti
            </Link>
            </li>
            <li>
            <Link href="/advertising" className="font-normal transition-colors hover:text-[var(--theme-color)]">
                Reklam yerləşdirin
            </Link>
            </li>
        </ul>
    </footer>
  )
}

export default Footer