/* eslint-disable react/prop-types */

import useJobStore from "../store";

export default function Card({ job }) {
  const { addFilter } = useJobStore();
  return (
    <div className="bg-white rounded-sm sm:border-l-2 border-l-4 drop-shadow-lg border-primary-cyan flex  justify-between py-4 px-5 mb-10 sm:mb-4 sm:flex-row flex-col relatve gap-4">
      <div className="flex items-center flex-1 ">
        <img
          className="w-14 h-14 mr-4 absolute -top-7 left-5 sm:static"
          src={job.logo}
          alt={`${job.company} logo`}
        />
        <div className="">
          <div className="flex gap-2 items-center pt-6 sm:pt-0">
            <p className="text-primary-cyan font-bold">{job.company}</p>
            {job.new ? (
              <span className="bg-primary-cyan p-1 text-xs leading-none text-center text-white rounded-full ">
                NEW!
              </span>
            ) : null}
            {job.featured ? (
              <span className="bg-black p-1 text-xs leading-none text-center text-white rounded-full ">
                FEATURED
              </span>
            ) : null}
          </div>

          <h1 className="font-bold hover:text-primary-cyan cursor-pointer">
            {job.position}
          </h1>
          <div className="flex gap-4 items-center justify-between text-neutral-dark text-xs">
            <span>{job.postedAt}</span>
            <span>.</span>
            <span>{job.contract}</span>
            <span>.</span>
            <span>{job.location}</span>
          </div>
        </div>
      </div>

      <div className="border border-l-neutral-dark sm:hidden"></div>

      <div className="flex gap-4 items-center flex-wrap">
        <button
          onClick={() => {
            addFilter(job.role);
          }}
          className="bg-primary-cyan/25 rounded-sm text-primary-cyan font-bold  px-2 leading-0"
        >
          {" "}
          {job.role}
        </button>
        <button
          onClick={() => {
            addFilter(job.level);
          }}
          className="bg-primary-cyan/25 rounded-sm text-primary-cyan font-bold  px-2 leading-0"
        >
          {" "}
          {job.level}
        </button>
        {job.languages.map((language) => (
          <button
            onClick={() => {
              addFilter(language);
            }}
            key={language}
            className="bg-primary-cyan/25 rounded-sm text-primary-cyan font-bold  px-2 leading-0"
          >
            {language}
          </button>
        ))}
        {job.tools.map((tool) => (
          <button
            onClick={() => {
              addFilter(tool);
            }}
            key={tool}
            className="bg-primary-cyan/25 rounded-sm text-primary-cyan font-bold  px-2 leading-0"
          >
            {tool}
          </button>
        ))}
      </div>
    </div>
  );
}
