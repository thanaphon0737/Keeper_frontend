function Header() {
  return (
    <header className="bg-white text-gray-700 p-4 col-span-2 border-b border-gray-400 flex justify-between w-full">
      <div className="search-bar flex items-center bg-white rounded-lg p-2 shadow-sm w-[300px]">
        <input type="text"
        placeholder="Search..." 
        className="w-full focus:outline-none"/>
      </div>
      <div>Account name</div>
    </header>
  )
}
export default Header