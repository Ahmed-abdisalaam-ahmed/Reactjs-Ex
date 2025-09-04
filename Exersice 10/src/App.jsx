const App = () => {
  const userList = [
    { id: 1, Name: "Said ahmed abdi", Email: "Saidah12@gmail.com"},
    { id: 2, Name: "hawo xuseen jaamac", Email: "hawoxu23@gmail.com" },
    { id: 3, Name: "mohammed abdi ahmed ", Email: "mohamemdabdi90@gmail.com" },
  ];
  return (
    <div>
      <h1>UserList :</h1>
    {
      userList.length > 0 ?(
      <ul>
        {
        userList.map((user)=>(
          <li key={user.id}>
            {user.Name} 
            <br/>
            {user.Email}
            <br></br>
            <br></br>
          </li>
        ))
        }
      </ul>
      ) : (<p>UserList is Not Found</p>)
    }
    </div>
  );
};
export default App;
