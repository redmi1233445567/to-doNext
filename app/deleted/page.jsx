"use client"
import Link from "next/link";
import { useDoStore } from "../storeData/store";

export default function page() {
    const dos = useDoStore(state => state.do.filter((item) => item.delete));
    const deleteOne = useDoStore(state => state.deletePermanently);
    const deleteAll = useDoStore(state => state.deleteAll)

  return (
    <div className="content">
      {dos.map((da) =>{
          return (
            <div className='text2' key={da.id}>
              <div className="w-2/3 p-3 text-3xl font-bold text-red-900 flex justify-between mx-auto cursor-pointer transition-all mt-2 bg-black rounded-md hover:bg-neutral-800">
                <p>{da.text}</p>
                <p onClick={()=> deleteOne(da.id)} className="hover:text-red-500 transition-all">X</p>
              </div>
              
            </div>
          )
        })}
        <div onClick={deleteAll} className="w-fit p-3 bg-black text-red-950 mx-auto my-3 hover:text-red-500 hover:bg-neutral-800 transition-all text-2xl font-bold rounded-md cursor-pointer">Delet All</div>
      <Link href={"/"}><div className="w-fit p-3 bg-slate-100 text-black mx-auto my-3 hover:bg-slate-500 transition-all text-2xl font-bold rounded-md cursor-pointer">Home</div></Link>
    </div>
  )
}
