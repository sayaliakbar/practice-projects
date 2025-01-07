const Navbar = ({ handleSearch }) => {
  return (
    <nav className="navbar flex justify-between items-center p-4 bg-gray-200">
      <a href="/" className="font-bold text-lg">
        Knowledge Forum
      </a>
      <input
        className="border border-black rounded-sm text-xs p-2"
        placeholder="search questions or tags here"
        onChange={handleSearch}
        type="text"
        name="search"
        id="search"
      />
    </nav>
  );
};

export default Navbar;
