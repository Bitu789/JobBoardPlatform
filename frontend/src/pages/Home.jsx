import { Link } from "react-router-dom";

function Home() {
  return (
    <div className="container">
      <h1>Job Board Platform</h1>

      <h2>Find Your Dream Job</h2>

      <p>Apply for jobs from top companies.</p>

      <Link to="/jobs">
        <button>Browse Jobs</button>
      </Link>
    </div>
  );
}

export default Home;