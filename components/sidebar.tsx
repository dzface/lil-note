
interface Note {
  title: string;
}
export default function Sidebar({
  activeNoteId,
  setActiveNoteId,
  setIsCreating,
  noteList
}) {
  return(
    <aside className="w-1/3 h-svh p-2 overflow-y-scroll">
      <button 
      onClick={()=> setIsCreating(true)}
      className="p-2 text-lg font-bold border border-slate-500 rounded-lg w-full">
        새로운 노트
      </button>
      <ul className="flex flex-col gap-2 mt-2">
        {noteList.map((note) =>
          <li key={note.id} >
            <button onClick={()=> {setIsCreating(false); setActiveNoteId(note.id)}}>
              {note.title}
            </button>
          </li>)}
      </ul>
    </aside>
  )
    
}