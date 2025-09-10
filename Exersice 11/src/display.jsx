
const Display = ({Username , isLoggedin}) => {
    function handleLogout(){
        isLoggedin = false;
    }
  return (
    <div>
      <h1>{`WellCome ${Username}`}</h1>
      <button onclick={handleLogout} >Logout</button>
    </div>
  );
};
export default Display;
