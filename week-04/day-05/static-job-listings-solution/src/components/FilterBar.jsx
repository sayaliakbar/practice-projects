import useJobStore from "../store";
import Remove from "../../public/images/icon-remove.svg";

const FilterBar = () => {
  const { filters, removeFilter, clearFilters } = useJobStore();

  if (filters.length === 0) return null;

  return (
    <div className="filter-bar  bg-white  absolute text-center text-primary-cyan font-bold p-2 sm:p-4 md:px-12 rounded-lg drop-shadow-md flex justify-between flex-wrap w-4/5 sm:w-3/4 md:w-3/4 lg:w-3/4 xl:w-3/4 2xl:w-3/4  top-[3rem] sm:top-[1rem] left-1/2 transform -translate-x-1/2 z-10 md:top-[4rem] lg:top-[7.5rem] gap-2 ">
      <div className="flex gap-2 flex-wrap justify-start">
        {filters.map((filter, index) => (
          <span
            key={index}
            className="filter-tag flex items-center gap-2 justify-between text-xs md:text-base bg-primary-cyan/25 rounded-sm text-primary-cyan font-bold  pl-2 leading-0"
          >
            <p> {filter}</p>

            <button
              className="p-2 bg-neutral-veryDark "
              onClick={() => removeFilter(filter)}
            >
              <img className="w-2 h-2" src={Remove} alt="" />
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
