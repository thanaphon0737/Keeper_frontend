import { useEffect, useState } from "react";
import { deleteNote, editNote, fetchNotes } from "../../services/api";

function KeeperMultiCard({ id, title, content, onDelete,onUpdate }) {
  const userId = sessionStorage.getItem("userId");
  const [note, setNote] = useState({
    title: title || "",
    content: content || "",
  });
  const handleChange = async (e) => {
    const { name, value } = e.target;
    // console.log(e.target)
    setNote((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  return (
    <form>
      <div className="mul-card flex flex-col border-2 w-[200px] rounded-lg p-4">
        <div className="flex gap-2">
          <h2 className="text-gray-400">ID:</h2>
          <span>{id}</span>
        </div>
        <div className="flex gap-2">
          <input
            type="text"
            name="title"
            value={note?.title}
            onChange={handleChange}
          />
        </div>
        <div className="flex gap-2">
          <input
            type="text"
            name="content"
            value={note?.content}
            onChange={handleChange}
          />
        </div>
        <div className="flex gap-2 justify-end">
          <button
            type="button"
            className="border-2 p-2 rounded-lg"
            onClick={() => onUpdate(id, note)}
          >
            edit
          </button>
          <button
            type="button"
            className="border-2 p-2 rounded-lg"
            onClick={() => onDelete(id)}
          >
            Delete
          </button>
        </div>
      </div>
    </form>
  );
}
export default KeeperMultiCard;
