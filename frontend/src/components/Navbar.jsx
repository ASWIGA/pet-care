import { Link, useNavigate } from "react-router-dom";

export default function Navbar(){
  const navigate = useNavigate();
  const token = localStorage.getItem("token");
  const role = localStorage.getItem("role");

  const logout = ()=>{
    localStorage.clear();
    navigate("/login");
  };

  return (
    <nav className="navbar">
      <h2 className="logo">🐾 Vedhas Pet Care</h2>
      <div className="navlinks">
        {!token && (<>
          <Link to="/login">Login</Link>
          <Link to="/signup">Signup</Link>
        </>)}
        {token && role==="user" && (<Link to="/dashboard">Dashboard</Link>)}
        {token && role==="admin" && (<>
          <Link to="/admin">Admin</Link>
          <Link to="/admin/users">Manage Users</Link>
        </>)}
        {token && <button className="btn" onClick={logout}>Logout</button>}
      </div>
    </nav>
  );
}
