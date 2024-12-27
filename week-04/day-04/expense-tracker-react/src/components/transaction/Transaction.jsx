export default function Transaction() {
  return (
    <div className="mt-4">
      <h5>Add new transaction</h5>
      <div
        className=""
        style={{ border: "1px solid black", marginBottom: "0.5rem" }}
      ></div>
      <form>
        <div className="form-group flex flex-col ">
          <label htmlFor="description">Description</label>
          <input
            type="text"
            className="form-control border border-gray-400 px-2 py-1 text-sm rounded"
            id="description"
            placeholder="Enter description"
          />
        </div>
        <div className="form-group flex flex-col">
          <label htmlFor="amount">
            Amount <br /> (negative - expense, positive - income)
          </label>
          <input
            type="number"
            className="form-control border border-gray-400 px-2 py-1 text-sm rounded"
            id="amount"
            placeholder="Enter amount"
          />
        </div>
        <button
          type="submit"
          className="btn btn-primary w-full bg-purple-600 mt-2 p-1 text-white rounded "
        >
          Add transaction
        </button>{" "}
      </form>
    </div>
  );
}
