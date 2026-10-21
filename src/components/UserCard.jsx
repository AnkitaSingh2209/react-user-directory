
function UserCard({ user, onViewDetails }) {
  return (
    <div className="user-card">
      <h3>{user.name}</h3>
      <p>{user.email}</p>
      <p>{user.city}</p>

      <button onClick={() => onViewDetails(user)}>
        View Details
      </button>
    </div>
  );
}

export default UserCard;
