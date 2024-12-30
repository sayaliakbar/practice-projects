import Card from "./Job";
import useJobStore from "../store";

// const JobList = () => {
//   const { jobs, filters } = useJobStore();

//   const filteredJobs = jobs.filter((job) =>
//     filters.every((filter) =>
//       [job.role, job.level, ...job.languages, ...job.tools].includes(filter)
//     )
//   );
// };
export default function Joblist() {
  const { jobs, filters } = useJobStore();

  return (
    <div className="m-6 sm:mx-28">
      {jobs.map((job) => (
        <Card key={job.id} job={job} />
      ))}
    </div>
  );
}
