import { useEffect } from "react";
import { useState } from "react";
import {
  createNote,
  fetchNotes,
  deleteNote,
  editNote,
} from "../../services/api";
import KeeperMultiCard from "./KeeperMultiCard";

function KeeperContent() {
  const [notes, setNotes] = useState([]);
  const [newNote, setNewNote] = useState({
    title: "",
    content: "",
  });
  const userId = sessionStorage.getItem("userId");
  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(newNote);
    const note = {
      title: newNote.title,
      content: newNote.content,
    };
    const res = await createNote(userId, note);
    console.log(res);
    if (res.status === 201) {
      console.log("create success");

      fetchData();
    }
  };
  const handleChange = async (e) => {
    const { name, value } = e.target;
    setNewNote((prev) => ({
      ...prev,
      [name]: value,
    }));
  };
  const fetchData = async () => {
    try {
      const res = await fetchNotes(userId);
      console.log(res.data);
      if (res.status === 200) {
        const sorted = [...res.data].sort((a, b) => a.id - b.id);
        setNotes(sorted);
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
      // setNotes((prev) =>
      //   prev.map((note) => (note.id === id ? { ...note, text: newNote } : note))
      // );
      fetchData();
    }
  };
  useEffect(() => {
    fetchData();
  }, []);
  return (
    <div className="p-4 flex flex-col justify-start items-center gap-6">
      <div className="card border-2 h-[200px] w-[400px] rounded-lg">
        <form
          onSubmit={handleSubmit}
          className="flex flex-col p-4 gap-2 h-full"
        >
          <input
            type="text"
            placeholder="title"
            name="title"
            className="bg-gray-200"
            onChange={handleChange}
          />
          <input
            type="text"
            name="content"
            className="w-full h-full bg-gray-200"
            placeholder="Your name"
            onChange={handleChange}
          />
          <button type="submit" className="border-2 w-12">
            add
          </button>
        </form>
      </div>
      <div className="grid grid-cols-4 gap-4 overflow-hidden ">
        {notes.map((note) => (
          <KeeperMultiCard
            key={note.id}
            id={note.id}
            title={note.title}
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
