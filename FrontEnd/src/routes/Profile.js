import React, { useState } from "react";

const Profile = () => {
  const storedUser = JSON.parse(localStorage.getItem("user")) || {
    name: "",
    email: "",
    phoneNumber: "",
  };
  const [editing, setEditing] = useState(false);
  const [editedUser, setEditedUser] = useState(storedUser);

  const handleEditToggle = () => {
    setEditing(!editing);
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setEditedUser((prevUser) => ({ ...prevUser, [name]: value }));
  };

  const handleSaveChanges = () => {
    localStorage.setItem("user", JSON.stringify(editedUser));
    setEditing(false);
    window.alert("Profile updated");
  };

  return (
    <div>
      <h1>Profile Page</h1>
      {editing ? (
        <div>
          <div>
            <label>Name:</label>
            <input
              type="text"
              name="name"
              value={editedUser.name}
              onChange={handleInputChange}
            />
          </div>
          <div>
            <label>Email:</label>
            <input
              type="email"
              name="email"
              value={editedUser.email}
              onChange={handleInputChange}
            />
          </div>
          <div>
            <label>Phone Number:</label>
            <input
              type="tel"
              name="phoneNumber"
              value={editedUser.phoneNumber}
              onChange={handleInputChange}
            />
          </div>
          <p>Name: {storedUser.name}</p>
          <p>Email: {storedUser.email}</p>
          <p>Phone Number: {storedUser.phoneNumber}</p>
          {/* Add other user information here */}
          <button onClick={handleSaveChanges}>Save Changes</button>
        </div>
      ) : (
        <div>
          {/* Display user information */}
          <button onClick={handleEditToggle}>Edit Profile</button>
        </div>
      )}
    </div>
  );
};

export default Profile;
