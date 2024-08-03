"use client"
import React, { useReducer, useEffect, useRef, useState } from 'react'
import { useDoStore } from '../storeData/store';


export default function Content() {
  const [, forceUpdate] = useReducer(x => x + 1, 0);
  const dos = useDoStore(state => state.do.filter((item) => !item.delete));
  let [data , setData] = useState(dos);
  const clearOnee = useDoStore(state => state.clearOnee);
  const addDone = useDoStore(state => state.addDone);
  const removeAllDos = useDoStore(state => state.removeAllDos)
  const ref1 = useRef()
  const ref2 = useRef();
  const ref0 = useRef();

  const All = () => {
    ref1.current.className = "";
    ref2.current.className = "";
    ref0.current.className = "active";
    setData(dos);
    forceUpdate()
  }

  useEffect(() => {
    setData(dos)
  }, [dos.length])

  const active = () =>{
    let filteredUsers = [];
    for (let i= 0; i<dos.length; i++) {
        if (dos[i].done === false) {
        filteredUsers = [...filteredUsers, dos[i]];
      }
    }

    setData(filteredUsers);
    ref1.current.className = "active";
    ref2.current.className = "";
    ref0.current.className = "";
  }

  const Complited = () =>{
    let filteredUsers = [];
    for (let i= 0; i<dos.length; i++) {
        if (dos[i].done === true) {
        filteredUsers = [...filteredUsers, dos[i]];
      }
    }

    setData(filteredUsers);
    ref1.current.className = "";
    ref2.current.className = "active";
    ref0.current.className = "";
  }

  

//   const clearAll = () => {
//     for (let i= 0; i<dataPro.length; i++) {
//       if (dataPro[i].done === true || dataPro[i].done === false) {
//       dataPro.pop(dataPro[i])
//     }
//   }
//     setDa(dataPro);
//     forceUpdate()
//   }

  
  return (
    <div className='content'>
        {data.map((da) =>{
          return (
            <div className='text2' key={da.id}>
              <div className='box'>
                <input type='checkbox' name='check' value='no' className='check' onClick={() => {addDone(da.id); All()}}/>
                <p className={da.done === true ? "done" : ""}>{da.text}</p>
                <p onClick={() => clearOnee(da.id)}>X</p>
              </div>
            </div>
          )
        })}
      <div className='filter'> 
        <div className='p'>
            <p>{dos.length} items left</p>
            <p onClick={removeAllDos}>Clear All</p>
        </div>
        <div>
            <span ref={ref0} className="active" onClick={All}>All</span>
            <span ref={ref1} onClick={active}>Active</span>
            <span ref={ref2} onClick={Complited}>Complited</span>
        </div>
      </div>
    </div>
  )
}
