import React, { useState } from 'react';
//Conditional rendering / dynamic UI based on state or props, for toggling UI elements, show/hide components, render list vs empty state

function UserProfile() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);//state for loggedin
  const [userData, setUserData] = useState(null);//state for userdata
  const [isLoading, setIsLoading] = useState(false);//state for isLoading
  const [items, setItems] = useState([]);//state for items

  // Toggle login state
  const handleLogin = () => {
    setIsLoading(true);
    // Simulate API call
    setTimeout(() => {
      setUserData({ name: "John Doe", email: "john@example.com" });
      setIsLoggedIn(true);
      setIsLoading(false);
    }, 1000);
  };
    //handle logout
  const handleLogout = () => {
    setUserData(null);
    setIsLoggedIn(false);
    setItems([]);
  };
   //const additem
  const addItem = () => {
    setItems([...items, `Item ${items.length + 1}`]);
  };

  return (
    <div className="user-profile">
      <h1>User Profile</h1>
      
      {/* Toggle UI Elements */}
      <div className="auth-section">
        {!isLoggedIn ? (
          <button onClick={handleLogin} disabled={isLoading}>
            {isLoading ? "Logging in..." : "Login"}
          </button>
        ) : (
          <button onClick={handleLogout}>Logout</button>
        )}
      </div>

      {/* Conditional Component Rendering */}
      {isLoggedIn ? (
        <div className="user-info">
          <h2>Welcome, {userData.name}!</h2>
          <p>Email: {userData.email}</p>
        </div>
      ) : (
        <div className="guest-message">
          <p>Please login to see your profile</p>
        </div>
      )}

      {/* Show/Hide Components */}
      {isLoggedIn && (
        <div className="user-actions">
          <button onClick={addItem}>Add Item</button>
          <button onClick={() => setItems([])}>Clear Items</button>
        </div>
      )}

      {/* List vs Empty State */}
      <div className="items-section">
        <h3>Your Items</h3>
        {items.length > 0 ? (
          <ul className="items-list">
            {items.map((item, index) => (
              <li key={index} className="item">
                {item}
                <button 
                  onClick={() => setItems(items.filter((_, i) => i !== index))}
                  className="remove-btn"
                >
                  Remove
                </button>
              </li>
            ))}
          </ul>
        ) : (
          <div className="empty-state">
            <p>No items yet. Add some items to see them here!</p>
          </div>
        )}
      </div>

      {/* Multiple Conditions with Switch Pattern */}
      <div className="status-indicator">
        {(() => {
          if (isLoading) return <div className="loading">Loading...</div>;
          if (!isLoggedIn) return <div className="offline">Offline</div>;
          return <div className="online">Online</div>;
        })()}
      </div>
    </div>
  );
}

export default UserProfile;