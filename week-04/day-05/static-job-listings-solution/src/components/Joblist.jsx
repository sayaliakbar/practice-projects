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
    <div className="w-5/6">
      {filteredJobs.map((job) => (
        <Card key={job.id} job={job} />
      ))}
    </div>
  );
}
