import { useEffect, useState } from "react";
import { deleteNote, editNote, fetchNotes } from "../../services/api";
import { Pencil, Trash } from "lucide-react";
import ConfirmationCard from "../../components/ConfirmationCard";
import AutoGrowingTextarea from "../../components/AutoGrowingTextarea";
import { datetimeFormat } from "../../services/datetimeFormat";
function KeeperMultiCard({ id, title, content, onDelete, onUpdate, updateAt }) {
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
      <div className="mul-card flex flex-col border-1 border-black/30 w-[300px] rounded-lg p-4">
        {/* for testing */}
        {/* <div className="flex gap-2">
          <h2 className="text-gray-400">ID:</h2>
          <span>{id}</span>
        </div> */}
        <div className="flex gap-2">
          <textarea
            name="title"
            value={note?.title}
            className="focus:outline-none resize-none overflow-hidden font-normal text-2xl"
            onChange={handleChange}
          />
        </div>
        <div className="flex gap-2">
          <AutoGrowingTextarea
            name="content"
            value={note?.content}
            className="w-full h-full focus:outline-none text-sm resize-none text-gray-600"
            onChange={handleChange}
          />
        </div>
        <div className="flex gap-2 justify-end">
        <div className="flex gap-2 text-xs text-gray-700 font-thin">
          <span>Last edited: </span>
          <div>{datetimeFormat(updateAt)}</div>
        </div>
          <button
            type="button"
            className=" hover:bg-black/20 p-2 rounded-lg cursor-pointer"
            onClick={() => setEditConfirm(true)}
          >
            <Pencil size={16} />
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
            <Trash size={16} />
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
