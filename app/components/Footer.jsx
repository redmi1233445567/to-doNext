import Link from 'next/link'
import React from 'react'

export default function Footer() {


  return (
    <div className='footer'>
      <Link href={"/deleted"}><p className="text-red-600 hover:text-red-500 text-2xl">View all deleted tasks</p></Link>
    </div>
  )
}
