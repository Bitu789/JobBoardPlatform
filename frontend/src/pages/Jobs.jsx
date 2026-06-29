import { useEffect, useState } from "react";
import api from "../services/api";
import JobCard from "../components/JobCard";

function Jobs() {
  const [jobs, setJobs] = useState([]);

  useEffect(() => {
    api
      .get("jobs/")
      .then((response) => {
        setJobs(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  return (
    <div className="container">
      <h1>Available Jobs</h1>

      {jobs.length === 0 ? (
        <p>No Jobs Found</p>
      ) : (
        jobs.map((job) => (
          <JobCard key={job.id} job={job} />
        ))
      )}
    </div>
  );
}

export default Jobs;