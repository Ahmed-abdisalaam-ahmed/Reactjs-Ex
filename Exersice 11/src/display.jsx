const Display = ({Username , islogging}) => {
    function handleLogout(){
        islogging();
    }
  return (
    <div>
      <h1>{`WellCome ${Username}`}</h1>
      <button onClick={handleLogout} >Logout</button>
    </div>
  );
};
export default Display;
