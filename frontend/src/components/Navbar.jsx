import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav>
      <h2>Job Board Platform</h2>

      <Link to="/">Home</Link>
      <Link to="/jobs">Jobs</Link>
      <Link to="/apply">Apply</Link>
      <Link to="/dashboard">Dashboard</Link>
      <Link to="/login">Login</Link>
      <Link to="/register">Register</Link>

      <button
        onClick={() => {
          localStorage.clear();
          alert("Logged Out");
        }}
      >
        Logout
      </button>
    </nav>
  );
}

export default Navbar;