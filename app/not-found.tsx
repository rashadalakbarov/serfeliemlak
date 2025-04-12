import React from 'react'
import Link from 'next/link'

const NotFound = () => {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center px-4">
      <h1 className="text-9xl font-bold text-gray-800">404</h1>
      <h2 className="mt-4 text-3xl font-semibold text-gray-700">
        Oops, səhifə tapılmadı!
      </h2>
      <p className="mt-2 text-gray-600">
        Axtardığınız səhifə mövcud deyil vəya daşınmış ola bilər.
      </p>
      <div className="flex space-x-2 mt-6">
        <Link href="/" className="my-button">Ana Səhifə</Link>
        <Link href="/help-center" className="px-6 py-3 text-gray-800">Yardım Mərkəzi</Link>
      </div>
    </div>
  )
}

export default NotFound