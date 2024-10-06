'use client'
import EmptyNote from "@/components/empty-note";
import Header from "@/components/header";
import NewNote from "@/components/new-note";
import NoteViewer from "@/components/note-viewer";
import Sidebar from "@/components/sidebar";
import { useState } from "react";



const noteList = [
  {
    id:1,
    title: "노트1",
    content: "노트 내용 입니다."
  },
  {
    id:2,
    title: "노트2",
    content: "노트 내용 입니다."
  }
]
export default function UI() {

// 보고있는 노트 아이디
const [activeNoteId, setActiveNoteId] =useState(null);
const [isCreating, setIsCreating] =useState(false);
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
            <NewNote setIsCreating ={setIsCreating}/>
          ) : activeNoteId ? (
            <NoteViewer note={noteList.find((note) => note.id === activeNoteId)} />
            ) : <EmptyNote/>
        }
      </div>
    </main>
  );
}