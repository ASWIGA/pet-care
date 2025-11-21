import { Link } from "react-router-dom";

export default function Admin() {
  return (
    <div>
      <header className="admin-header">
        <h1>Vedhas Pet Care - Admin Dashboard</h1>
      </header>

      <div className="container" style={{ marginTop: 28 }}>
        <div className="grid">
          <div className="card-tile">
            <h3>Manage Users</h3>
            <p>View and manage registered users.</p>
            <Link className="btn" to="/admin/users">View Users</Link>
          </div>

          <div className="card-tile">
            <h3>Appointment Management</h3>
            <p>Manage and schedule grooming appointments.</p>
            <Link className="btn" to="/admin/appointments">Update Appointments</Link>
          </div>

          <div className="card-tile">
            <h3>Reports</h3>
            <p>Generate usage and feedback reports.</p>
            <Link className="btn" to="/admin/feedback">Generate Report</Link>
          </div>

          {/* New Card for Pet Management */}
          <div className="card-tile">
            <h3>Manage Pets for Adoption</h3>
            <p>Add and manage pets available for adoption.</p>
            <Link className="btn" to="/admin/pets">Manage Pets</Link>
          </div>

          {/* Adoption Requests */}
          <div className="card-tile">
            <h3>Adoption Requests</h3>
            <p>View adoption requests from users.</p>
            <Link className="btn" to="/admin/adoptions">View Requests</Link>
          </div>
        </div>

        <div className="text-center" style={{ marginTop: 28 }}>
          <a className="btn" href="/login">Logout</a>
        </div>
      </div>
    </div>
  );
}
