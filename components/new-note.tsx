'use client'

import { useState } from "react";

export default function NewNote({setIsCreating}) {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");

  const onSave = async ()=>{
    // SupaBase 노트 저장기능
    setIsCreating(false);
  }
  return(
    <div className="w-2/3 h-svh flex flex-col bg-slate-400 p-2">
      <input className="text-xl border border-none rounded-md p-1 mb-4"
        placeholder="제목을 입력하세요"
        type="text"
        value={title}
        onChange={e=>setTitle(e.target.value)}
      />
      <textarea className="text-lg border border-none rounded-md p-1 h-1/6" 
        placeholder="내용을 입력하세요"
        value={content}
        onChange={e=>setContent(e.target.value)}
      />
      <div className="w-full flex justify-end">
        <button 
        onClick={()=> onSave()}
        className="text-lg font-bold bg-white border-2 border-green-500 rounded-full px-3 py-1 mt-4 hover:text-white hover:bg-green-500 transition-all duration-300 ease-in-out">저장</button>
      </div>
      
    </div>
  )
}