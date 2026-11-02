
import { useState, useEffect } from "react";
import Header from "./components/Header";
import UserCard from "./components/UserCard";
import "./App.css";

function App() {
  // Search, filter, sorting and details states
  const [search, setSearch] = useState("");
  const [city, setCity] = useState("All");
  const [sortOrder, setSortOrder] = useState("az");
  const [selectedUser, setSelectedUser] = useState(null);
const [users, setUsers] = useState([]);
  // Loading and error states
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
  async function fetchUsers() {
    try {
      setLoading(true);
      setError("");

      const response = await fetch(
        "https://jsonplaceholder.typicode.com/users"
      );

      if (!response.ok) {
        throw new Error("Failed to fetch users");
      }

      const data = await response.json();

      const formattedUsers = data.map((user) => ({
        id: user.id,
        name: user.name,
        email: user.email,
        city: user.address.city,
      }));

      setUsers(formattedUsers);
    } catch (err) {
      setError("Could not load users. Please try again.");
    } finally {
      setLoading(false);
    }
  }

  fetchUsers();
}, []);


  
  

  // Search and city filter
  const filteredUsers = users.filter((user) => {
    const matchesSearch = user.name
      .toLowerCase()
      .includes(search.toLowerCase());

    const matchesCity =
      city === "All" || user.city === city;

    return matchesSearch && matchesCity;
  });

  // Sort users by name
  const sortedUsers = [...filteredUsers].sort((a, b) => {
    if (sortOrder === "az") {
      return a.name.localeCompare(b.name);
    }

    return b.name.localeCompare(a.name);
  });

  return (
    <div>
      <Header />

      <h1>User Directory</h1>

      {/* Search */}
      <input
        type="text"
        placeholder="Search users..."
        value={search}
        onChange={(event) => setSearch(event.target.value)}
      />

      {/* City filter */}
      <select
        
  value={city}
  onChange={(event) => setCity(event.target.value)}
>
  <option value="All">All Cities</option>

  {[...new Set(users.map((user) => user.city))].map((cityName) => (
    <option key={cityName} value={cityName}>
      {cityName}
    </option>
  ))}

      </select>

      {/* Sorting */}
      <select
        value={sortOrder}
        onChange={(event) => setSortOrder(event.target.value)}
      >
        <option value="az">Name A - Z</option>
        <option value="za">Name Z - A</option>
      </select>

      
      {/* Users list, loading and error states */}
      <div>
        {loading ? (
          <p>Loading users...</p>
        ) : error ? (
          <div>
            <p>{error}</p>
            <button onClick={() => window.location.reload()}>
              Try Again
            </button>
          </div>
        ) : sortedUsers.length > 0 ? (
          sortedUsers.map((user) => (
            <UserCard
              key={user.id}
              user={user}
              onViewDetails={setSelectedUser}    
            />
          ))
        ) : (
          <p>No users found.</p>
        )}
      </div>


      {/* Selected user details */}
      {selectedUser && (
        <div className="user-details">
          <h2>User Details</h2>
          <p>Name: {selectedUser.name}</p>
          <p>Email: {selectedUser.email}</p>
          <p>City: {selectedUser.city}</p>

          <button onClick={() => setSelectedUser(null)}>
            Close
          </button>
        </div>
      )}

      {/* Temporary error testing button */}
      <button
        onClick={() =>
          setError("Failed to load users. Please try again.")
        }
      >
        Test Error
      </button>
    </div>
  );
}

export default App;
