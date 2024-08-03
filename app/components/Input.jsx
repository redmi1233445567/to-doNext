"use client"
import React, { useRef } from 'react'
import {useDoStore} from '../storeData/store'


export default function Input() {
  const addDo = useDoStore(state => state.addDo)
  const ref1 = useRef()
  function clickInp () {
    const val = ref1.current.value;
    addDo({id: Math.random(), text: val, done: false, delete: false})
    ref1.current.value = ""
  }

  return (
    <div className='inputd'>
      <input onClick={clickInp} type='checkbox' name='check' value='no' className='check'/>
      <input ref={ref1} type='text' placeholder='Currently Typing' className='text'/>
    </div>
  )
}
