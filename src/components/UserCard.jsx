function UserCard({user}){
    return(
        <div className="user-card">
            <h2>{user.name}</h2>
            <p>{user.email} </p>
            <p>{user.city}</p>
        </div>
    );
}
export default UserCard;