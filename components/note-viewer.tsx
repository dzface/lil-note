//note-viewer.tsx
'use client'

import { useEffect, useState } from "react";

export default function NoteViewer({
  note, // {id: 1, title: "", content:""}
}) {
  const [title, setTitle] = useState(note?.title);
  const [content, setContent] = useState(note?.content);
  const [isEditing, setIsEditing] = useState(false);

  useEffect(()=> {
    setTitle(note?.title);
    setContent(note?.content);
    setIsEditing(false);
  }, [note])
  return(
    <div className="w-2/3 h-svh flex flex-col bg-slate-400 p-2">
      {isEditing ? (
        <>
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
        </>

      ): (
        <>
          <h1 className="text-xl bg-white rounded-md p-1 mb-4">
            {title}
          </h1>
          <p className="text-lg bg-white rounded-md p-1 h-1/6">
            {content}
          </p>
        </>
      )}
      
      <div className="w-full flex justify-end gap-2">
        {isEditing ? (
          <>
            <button 
            onClick={()=> setIsEditing(false)}
            className="text-lg font-bold bg-white border-2 border-green-500 rounded-full px-3 py-1 mt-4 hover:text-white hover:bg-green-500 transition-all duration-300 ease-in-out">저장</button>
            <button className="text-lg font-bold bg-white border-2 border-red-500 rounded-full px-3 py-1 mt-4 hover:text-white hover:bg-red-500 transition-all duration-300 ease-in-out">삭제</button>
          </>
          
        ) : (
          <>
            <button 
            onClick={()=> setIsEditing(true)}
            className="text-lg font-bold bg-white border-2 border-green-500 rounded-full px-3 py-1 mt-4 hover:text-white hover:bg-green-500 transition-all duration-300 ease-in-out">수정</button>
            <button className="text-lg font-bold bg-white border-2 border-red-500 rounded-full px-3 py-1 mt-4 hover:text-white hover:bg-red-500 transition-all duration-300 ease-in-out">삭제</button>
          </>
        )}

      </div>
      
    </div>
  )
}