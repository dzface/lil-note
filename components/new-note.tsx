'use client'

import { supabase } from "@/utils/supabase";
import { useState } from "react";

export default function NewNote({fetchNoteList, setIsCreating, setActiveNoteId}) {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");

  const onSave = async ()=>{
    // 데이터 null 여부 확인
    if (!title || !content) {
      alert("내용을 입력해주세요");
      return; // 저장하지 않고 기능 종료
    }
    // SupaBase 노트 저장기능
    const {data, error} = await supabase.from("note").insert({
      title,
      content,
    })
    .select();
    // 저장 요청이후 에러 처리
    if (error) {
      alert(error.message);
    }
    // 저장완료 후 노트 리스트 갱신
    await fetchNoteList();
    // 저장 후 노트뷰어 활성화되는 노트를 방금 만든 노트로 지정
    setActiveNoteId((data as any[])[0].id);
    // 작성모드 비활성화
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