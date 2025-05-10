import Link from 'next/link';
import React from 'react'

type SectionHeaderProps = {
    title: string;
    url: string;
}

const SectionHeader = ({title, url}:SectionHeaderProps) => {
  return (
    <div className='flex items-center justify-between bg-white py-2 px-3'>
        <h1 className='text-sm sm:text-lg font-bold mb-2 text-gray-800 uppercase'>{title}</h1>
        <div className='text-sm sm:text-lg text-gray-700'>
            <Link href={url}>Daha çox</Link>
        </div>
    </div>
  )
}

export default SectionHeader