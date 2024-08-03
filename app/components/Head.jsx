"use client"
import React, { useRef } from 'react'
import sun from '../img/sun.png'
import moon from '../img/moon.png'
import Image from 'next/image'

export default function Head() {
  const ref1 = useRef()
  const ref2 = useRef()
  
  function clickSun() {
    const body = document.querySelector(".bodyd");
    const input = document.querySelector(".inputd");
    const cont = document.querySelector(".content");
    ref1.current.className = "none"
    ref2.current.className = "block"
    body.className = 'bodyl';
    input.className = "inputl";
    cont.className = "contentl"
  }

  function clickMon() {
    const body = document.querySelector(".bodyl");
    const input = document.querySelector(".inputl");
    const cont = document.querySelector(".contentl");
    ref2.current.className = "none"
    ref1.current.className = "block"
    body.className = "bodyd";
    input.className = "inputd";
    cont.className = "content"
  }
  return (
    <div className='head'>
      <h1 className="text-3xl font-bold">TODO</h1>
      <div>
        <Image
          src={sun}
          width={40}
          height={40}
          alt="Picture of the author"
          ref={ref1}
          onClick={clickSun}
        />
        <Image
          src={moon}
          width={40}
          height={40}
          alt="Picture of the author"
          ref={ref2}
          onClick={clickMon}
        />
      </div>
    </div>
  )
}
