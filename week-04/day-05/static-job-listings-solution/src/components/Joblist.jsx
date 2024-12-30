import Card from "./Job";
import useJobStore from "../store";

export default function Joblist() {
  const { jobs, filters } = useJobStore();
  const filteredJobs = jobs.filter((job) =>
    filters.every((filter) =>
      [job.role, job.level, ...job.languages, ...job.tools].includes(filter)
    )
  );
  return (
    <div className="lg:m-16 m-32 w-4/5">
      {filteredJobs.map((job) => (
        <Card key={job.id} job={job} />
      ))}
    </div>
  );
}
