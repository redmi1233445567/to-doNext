import Link from 'next/link'
import React from 'react'

export default function Footer() {


  return (
    <div className='footer'>
      <Link href={"/deleted"}><p>View all deleted tasks</p></Link>
    </div>
  )
}
