const Display = ({Username , handleLoggedOff}) => {

  return (
    <div>
      <h1>{`WellCome ${Username}`}</h1>
      <button onClick={handleLoggedOff} >Logout</button>
    </div>
  );
};
export default Display;
