import { useEffect, useState } from "react";
import AccountDisplay from "./AccountDisplay";
function Header({ onUpdate }) {
  const [query, setQuery] = useState("");
  const handleChange = (e) => {
    // console.log(e.target)
    const { value } = e.target;
    console.log(value);
    setQuery(value);
  };
  useEffect( () => {
    const delay = setTimeout(() => {
      onUpdate(query);
    },300)

    return () => clearTimeout(delay);
    
  },[query])
  return (
    <header className="bg-white text-gray-700 p-4 col-span-2 border-b border-gray-400 flex justify-between w-full">
      <div className="search-bar flex items-center bg-white rounded-lg p-2 shadow-sm w-[300px] h-[50px] place-self-center">
        <input
          type="text"
          placeholder="Search..."
          value={query}
          onChange={handleChange}
          className="w-full focus:outline-none"
        />
      </div>
      <AccountDisplay />
    </header>
  );
}
export default Header;
