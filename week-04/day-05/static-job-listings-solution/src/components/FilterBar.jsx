import useJobStore from "../store";
import Remove from "../../public/images/icon-remove.svg";

const FilterBar = () => {
  const { filters, removeFilter, clearFilters } = useJobStore();

  if (filters.length === 0) return null;

  return (
    <div className="filter-bar sm:w-3/4  bg-white  absolute top-[7.5rem] text-center text-primary-cyan font-bold p-4 px-12 rounded-lg drop-shadow-md flex justify-between flex-wrap w-4/5">
      <div className="flex gap-4 flex-wrap">
        {filters.map((filter, index) => (
          <span
            key={index}
            className="filter-tag flex items-center justify-between bg-primary-cyan/25 rounded-sm text-primary-cyan font-bold  px-2 leading-0"
          >
            <p> {filter}</p>

            <button
              className="p-2 w-fit bg-neutral-veryDark "
              onClick={() => removeFilter(filter)}
            >
              <img src={Remove} alt="" />
            </button>
          </span>
        ))}
      </div>

      <button onClick={clearFilters} className="clear-btn">
        Clear
      </button>
    </div>
  );
};

export default FilterBar;
