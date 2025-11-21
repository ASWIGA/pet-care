export default function Dashboard(){
  const go = (path) => window.location.assign(path); // placeholder navigation for service pages
  const logout = () => {
    localStorage.clear();
    window.location.href = "/index";
  };

  return (
    <div>
      <h1 className="dash-title">Welcome to Vedhas Pet Care Dashboard</h1>
      <div className="grid">
        <div className="card-tile" onClick={() => go('/grooming')}>🐶 Pet Grooming</div>
        <div className="card-tile" onClick={() => go('/walking')}>🚶 Pet Walking</div>
        <div className="card-tile" onClick={() => go('/vet')}>🩺 Veterinary Care</div>
        <div className="card-tile" onClick={() => go('/training')}>🎓 Pet Training</div>
        <div className="card-tile" onClick={() => go('/boarding')}>🏠 Pet Boarding</div>
        <div className="card-tile" onClick={() => go('/adoption')}>❤️ Pet Adoption</div>
        <div className="card-tile" onClick={() => go('/feedback')}>💬 Feedback</div>
        <div className="card-tile" onClick={() => go('/appointments')}>Appointments</div>
        <div className="card-tile" onClick={() => go('/adoptions/my')}>My Adoption Requests</div>
        <div className="card-tile" onClick={() => go('/contact')}>Contact us</div>
        
      </div>
      <button className="btn logout" onClick={logout}>Logout</button>
    </div>
  );
}
