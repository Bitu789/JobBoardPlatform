import { useEffect, useState } from "react";
import api from "../services/api";

function Dashboard() {
  const [applications, setApplications] = useState([]);

  useEffect(() => {
    api.get("applications/")
      .then((res) => setApplications(res.data))
      .catch(console.error);
  }, []);

  return (
    <div className="container">
      <h1>My Applications</h1>

      {applications.length === 0 ? (
        <p>No Applications Yet</p>
      ) : (
        applications.map((item) => (
          <div className="job-card" key={item.id}>
            <h2>{item.applicant_name}</h2>
            <p>Email: {item.applicant_email}</p>
            <p>Status: {item.status}</p>
          </div>
        ))
      )}
    </div>
  );
}

export default Dashboard;