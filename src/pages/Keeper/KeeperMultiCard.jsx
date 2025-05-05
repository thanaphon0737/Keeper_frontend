import { useEffect, useState } from "react";
import { deleteNote, editNote, fetchNotes } from "../../services/api";
import { Pencil, Trash } from "lucide-react";
import ConfirmationCard from "../../components/ConfirmationCard";
import AutoGrowingTextarea from "../../components/AutoGrowingTextarea";

function KeeperMultiCard({ id, title, content, onDelete, onUpdate }) {
  const userId = sessionStorage.getItem("userId");
  const [showConfirm, setShowConfirm] = useState(false);
  const [editConfirm, setEditConfirm] = useState(false);
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
  const handleEdit = () => {
    console.log("item edited");
    onUpdate(id, note);
    setEditConfirm(false);
  };
  const handleDelete = () => {
    console.log("item deleted");
    onDelete(id);
    setShowConfirm(false);
  };
  return (
    <form>
      <div className="mul-card flex flex-col border-1 border-black/30 w-[200px] rounded-lg p-4">
        <div className="flex gap-2">
          <h2 className="text-gray-400">ID:</h2>
          <span>{id}</span>
        </div>
        <div className="flex gap-2">
          <textarea
            name="title"
            value={note?.title}
            className="focus:outline-none text-sm resize-none overflow-hidden"
            onChange={handleChange}
          />
        </div>
        <div className="flex gap-2">
          <AutoGrowingTextarea
            name="content"
            value={note?.content}
            className="w-full h-full focus:outline-none text-sm resize-none"
            onChange={handleChange}
          />
        </div>
        <div className="flex gap-2 justify-end">
          <button
            type="button"
            className=" hover:bg-black/20 p-2 rounded-lg cursor-pointer"
            onClick={() => setEditConfirm(true)}
          >
            <Pencil size={18} />
          </button>
          {editConfirm && (
            <ConfirmationCard
              title="Confirem edit"
              message="Are you sure to edit ?"
              onConfirm={handleEdit}
              onCancel={() => setEditConfirm(false)}
              buttonColor="#fcc700"
            />
          )}
          <button
            type="button"
            className="hover:bg-black/20 p-2 rounded-lg cursor-pointer"
            onClick={() => setShowConfirm(true)}
          >
            <Trash size={18} />
          </button>

          {showConfirm && (
            <ConfirmationCard
              title="Confirm Delete"
              message="Are you sure to delete ?"
              onConfirm={handleDelete}
              onCancel={() => setShowConfirm(false)}
              buttonColor="#f2153e"
            />
          )}
        </div>
      </div>
    </form>
  );
}
export default KeeperMultiCard;
