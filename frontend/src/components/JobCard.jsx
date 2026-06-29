import { Link } from "react-router-dom";

function Home() {
  return (
    <div className="container">
      <h1>Job Board Platform</h1>

      <h3>Find Your Dream Job</h3>

      <p>Search thousands of jobs and apply online.</p>

      <br />

      <Link to="/jobs">
        <button>Browse Jobs</button>
      </Link>
    </div>
  );
}

export default Home;