import { useEffect, useState } from "react";

const App = () => {
  const [user, setUsers] = useState({});
  const [loading, setLoading] = useState(false);
  const [query, setQuery] = useState("");

  async function fetchData() {
    if (!query) return;
    setLoading(true);
    await new Promise((resolve) => setTimeout(resolve, 5000));
    const respone = await fetch(`https://api.github.com/users/${query}`);
    const data = await respone.json();
    setUsers(data);
    console.log(data);
  }
  useEffect(() => {
    try {
      setTimeout(() => {
        fetchData()
      }, 5000);
    } catch (error) {
      console.log(`Error is ${error}`);
    } finally {
      setLoading(false);
    }
  }, []);
  return (
    <div>
      <h1>Enter thr Username:</h1>
      <input
        type="text"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
      />
      <button onClick={fetchData}>Search</button>
      {loading && <p>Loading...</p>}

      {user && !user.message && (
        <div>
          <h1>{user.name}</h1>
          <img
            src={user.avatar_url}
            alt={user.name}
            style={{ borderRadius: "60px", width: "150px" }}
          />
          <h2>Location: {user.location || "N/A"}</h2>
          <h2>Following: {user.following}</h2>
          <p>Bio: {user.bio || "No bio available"}</p>
        </div>
      )}
      {user && user.message && <p>User not found</p>}
    </div>
  );
};
export default App;


