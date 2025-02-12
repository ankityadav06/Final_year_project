import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";


function Profile() {
  const navigate = useNavigate();
  const [user, setUser] = useState(null);

  useEffect(() => {
    const storedUser = localStorage.getItem("user");
    if (storedUser) {
      setUser(JSON.parse(storedUser));
    } else {
      navigate("/login"); // Redirect to login if no user is found
    }
  }, [navigate]);

  const handleLogout = () => {
    localStorage.removeItem("user");
    navigate("/login");
  };



  return (
    <div className="profile-container">
    {user ? (
      <div className="profile-box">
        <h2>Welcome, {user.name}!</h2>
        <p><strong>Email:</strong> {user.email}</p>
        <p><strong>Phone:</strong> {user.phone}</p>
        <button onClick={handleLogout}>Logout</button>
      </div>
    ) : (
      <p>Loading user data...</p>
    )}
  </div>
  )
}

export default Profile