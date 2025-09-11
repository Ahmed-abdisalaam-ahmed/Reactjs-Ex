const Display = ({Username , islogging}) => {

  return (
    <div>
      <h1>{`WellCome ${Username}`}</h1>
      <button onClick={islogging} >Logout</button>
    </div>
  );
};
export default Display;
