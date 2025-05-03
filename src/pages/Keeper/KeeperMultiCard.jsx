import { useEffect, useState } from "react";
import { deleteNote, editNote, fetchNotes } from "../../services/api";
import ConfirmationCard from "../../components/ConfirmationCard";

function KeeperMultiCard({ id, title, content, onDelete,onUpdate }) {
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
    console.log('item edited');
    onUpdate(id,note);
    setEditConfirm(false);
  }
  const handleDelete = () =>{
    console.log('item deleted');
    onDelete(id)
    setShowConfirm(false);
  }
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
            onClick={() => setEditConfirm(true)}
          >
            edit
          </button>
          {editConfirm && (
            <ConfirmationCard
            title="Confirem edit"
            message="Are you sure to edit ?"
            onConfirm={handleEdit}
            onCancel={() => setEditConfirm(false)}
            buttonColor="#f1e41a"
            />
          )}
          <button
            type="button"
            className="border-2 p-2 rounded-lg"
            onClick={() => setShowConfirm(true)}
          >
            Delete
          </button>

          {showConfirm && (
            <ConfirmationCard
            title = "Confirm Delete"
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
