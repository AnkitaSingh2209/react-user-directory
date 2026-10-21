
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

  // Loading and error states
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  // Simulate loading users
  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 1500);

    return () => clearTimeout(timer);
  }, []);

  // User data
  const users = [
    {
      id: 1,
      name: "Leanne Graham",
      email: "sincere@april.biz",
      city: "Gwenborough",
    },
    {
      id: 2,
      name: "Ervin Howell",
      email: "ervin@example.com",
      city: "Wisokyburgh",
    },
    {
      id: 3,
      name: "Clementine Bauch",
      email: "clementine@example.com",
      city: "McKenziehaven",
    },
  ];

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
        <option value="Gwenborough">Gwenborough</option>
        <option value="Wisokyburgh">Wisokyburgh</option>
        <option value="McKenziehaven">McKenziehaven</option>
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

            <button onClick={() => setError("")}>
              Try Again
            </button>c
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
