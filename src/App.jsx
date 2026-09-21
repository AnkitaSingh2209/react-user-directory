import Header from "./components/Header";
import UserCard from "./components/UserCard";
const users=[
    {
    id: 1,
    name: "Leanne Graham",
    email: "sincere@april.biz",
    city: "Gwenborough"
  },
  {
    id: 2,
    name: "Ervin Howell",
    email: "ervin@example.com",
    city: "Wisokyburgh"
  },
  {
    id: 3,
    name: "Clementine Bauch",
    email: "clementine@example.com",
    city: "McKenziehaven"
  }

];
function App(){

  return(
    <div>
      <Header/>

      {users.map((user)=>(
      <UserCard key={user.id}
      user={user}/>
      ))}
    
      
    </div>
  );
}

export default App;