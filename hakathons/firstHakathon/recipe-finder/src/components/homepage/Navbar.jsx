import PropTypes from "prop-types";
Navbar.propTypes = {
  showFavourites: PropTypes.func.isRequired,
  onHomeClick: PropTypes.func.isRequired,
};

export default function Navbar({ showFavourites, onHomeClick }) {
  return (
    <div className="flex justify-between items-center bg-slate-900 text-white py-2 px-4">
      <h1>recipeFinder</h1>
      <div className="flex gap-4">
        <button onClick={onHomeClick}>Home</button>
        <button onClick={showFavourites}>Favourites</button>
      </div>
    </div>
  );
}
