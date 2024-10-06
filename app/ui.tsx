'use client'
import EmptyNote from "@/components/empty-note";
import Header from "@/components/header";
import NewNote from "@/components/new-note";
import NoteViewer from "@/components/note-viewer";
import Sidebar from "@/components/sidebar";
import { Database } from "@/types_db";
import { supabase } from "@/utils/supabase";
import { useEffect, useState } from "react";



export default function UI() {

  // 보고있는 노트 아이디
  const [activeNoteId, setActiveNoteId] =useState(null);
  const [isCreating, setIsCreating] =useState(false);
  // 타입지정 추가
  const [noteList, setNoteList] =useState<
    Database["public"]["Tables"]["note"]["Row"][]
  >([]);

  // note 테이블의 모든 DB 조회 함수 추가
  const fetchNoteList = async () => {
    const{data, error} = await supabase.from("note").select("*");
    if (error) {
      alert(error.message);
      return
    }
    setNoteList(data);
  }

  useEffect(()=> {
    fetchNoteList();
  }, [])

  return (
    <main className="w-full h-screen flex flex-col">
      <Header />
      <div className="flex flex-row">
        <Sidebar 
          activeNoteId = {activeNoteId} 
          setActiveNoteId = {setActiveNoteId } 
          setIsCreating={setIsCreating} 
          noteList={noteList}
        />
        {isCreating ? (
            <NewNote fetchNoteList = {fetchNoteList} setIsCreating ={setIsCreating} setActiveNoteId={setActiveNoteId}/>
          ) : activeNoteId ? (
            <NoteViewer 
            note={noteList.find((note) => note.id === activeNoteId)} 
            setActiveNoteId={setActiveNoteId}
            fetchNoteList={fetchNoteList}
            />
            ) : <EmptyNote/>
        }
      </div>
    </main>
  );
}