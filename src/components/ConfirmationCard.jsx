function ConfirmationCard({ title, message, onConfirm, onCancel ,buttonColor}) {
  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black/30">
      <div className="bg-white p-6 rounded-2xl shadow-xl w-96 max-w-full">
        <h2 className="text-xl font-semibold text-gray-800 mb-2">{title}</h2>
        <p className="text-gray-600 mb-4">{message}</p>
        <div className="flex justify-end space-x-3">
          <button
            onClick={onCancel}
            className="px-4 py-2 text-gray-600 hover:text-gray-800 cursor-pointer"
          >
            Cancel
          </button>
          <button
            onClick={onConfirm}
            className={`px-4 py-2 bg-[${buttonColor}] text-white rounded hover:bg-[${buttonColor}]/50 cursor-pointer `}
          >
            Confirm
          </button>
        </div>
      </div>
    </div>
  )
}
export default ConfirmationCard