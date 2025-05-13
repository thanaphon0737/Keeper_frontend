import { useEffect } from "react";
import { useState } from "react";
import { Pencil, Trash } from "lucide-react";
import {
  createNote,
  fetchNotes,
  deleteNote,
  editNote,
  getTags
} from "../../services/api";
import Header from "../../components/Header";
import KeeperMultiCard from "./KeeperMultiCard";
import TagsTitle from "./TagsTitle";

function KeeperContent() {
  const [notes, setNotes] = useState([]);
  const [tags,setTags] = useState([])
  const [newNote, setNewNote] = useState({
    title: "",
    content: "",
  });
  const [error, setError] = useState("");
  const userId = sessionStorage.getItem("userId");
  const handleSubmit = async (e) => {
    e.preventDefault();

    const note = {
      title: newNote.title,
      content: newNote.content,
    };
    try {
      const res = await createNote(userId, note);
      if (res.status === 201) {
        console.log("create success");
        setNewNote({
          title: "",
          content: "",
        });
        setError('')

        fetchData();
      }
    } catch (error) {
      console.log("handling error here...");
      if (newNote.title.trim() === "" && newNote.content.trim() === "") {
        setError("Note cannot be empty");
        
      }
      if (newNote.title.trim() === "") {
        setError("Title cannot be empty");
      }else if(newNote.content.trim() === ""){
        setError("Content cannot be empty");
      }
    }
  };
  const handleChange = async (e) => {
    const { name, value } = e.target;
    setNewNote((prev) => ({
      ...prev,
      [name]: value,
    }));
  };
  const fetchData = async (query = "") => {
    try {
      console.log(`q: ${query}`)
      const res = await fetchNotes(userId,query);
      const resTags = await getTags();
      console.log(res.data);
      if (res.status === 200) {
        // const sorted = [...res.data].sort((a, b) => b.id - a.id);
        
        setNotes(res.data.notes);
        setTags(resTags.data);
      }
    } catch (err) {
      console.error();
    }
  };
  const handleDelete = async (id) => {
    console.log("delete note");
    console.log("delete id", id);
    const res = await deleteNote(userId, id);
    // setNotes((prev) => prev.filter((note) => note.id !== id));
    fetchData();
  };
  const handleUpdate = async (id, newNote) => {
    const res = await editNote(userId, id, newNote);
    if (res.status == 200) {
      fetchData();
    }
  };
  useEffect(() => {
    fetchData();
  }, []);
  return (
    <div className="p-4 flex flex-col justify-start items-center gap-6 w-full">
      <Header onUpdate={fetchData} />
      <TagsTitle names={tags}/>
      <div className="card w-[400px] h-[150px] rounded-lg border border-1 border-gray-300 rounded-2xl shadow-xl">
        <form
          onSubmit={handleSubmit}
          className="flex flex-col p-4 gap-2 h-full relative"
        >
          <input
            type="text"
            placeholder="Title..."
            name="title"
            value={newNote.title}
            className={`w-full py-2  focus:outline-none text-sm resize-none overflow-hidden ${
              error ? "border-red-500" : ""
            }`}
            onChange={handleChange}
          />
          {error && <p className="text-red-500 text-xs">{error}</p>}
          <textarea
            rows={1}
            placeholder="Enter text..."
            className="w-full py-2  focus:outline-none text-sm resize-none overflow-hidden"
            name="content"
            value={newNote.content}
            onChange={handleChange}
          />
          {error && <p className="text-red-500 text-xs">{error}</p>}
          <button
            type="submit"
            className="absolute bottom-0 right-10 translate-x-1/2 translate-y-1/2 overflow-visible w-10 h-10 bg-[#6366f1]/80 text-white rounded-full shadow-md hover:bg-[#6366f1] focus:outline-none focus:ring-2 focus:ring-yellow-300 flex items-center justify-center cursor-pointer"
          >
            +
          </button>
        </form>
      </div>
      <div className="flex flex-wrap gap-4 overflow-hidden mt-10">
        {notes.map((note) => (
          <KeeperMultiCard
            key={note.id}
            id={note.id}
            title={note.title}
            tagName={note.tag_name}
            updateAt={note.updated_at}
            content={note.content}
            onDelete={handleDelete}
            onUpdate={handleUpdate}
          />
        ))}
      </div>
    </div>
  );
}
export default KeeperContent;
