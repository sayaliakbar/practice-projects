export default function Navbar() {
  return (
    <div className="flex justify-between items-center bg-slate-900 text-white py-2 px-4">
      <h1>recipeFinder</h1>
      <div className="flex gap-4">
        <a href="">Home</a>
        <a href="">Favourites</a>
      </div>
    </div>
  );
}
