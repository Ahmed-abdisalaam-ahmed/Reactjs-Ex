const loginForm = () => {

    const [query, setQuery] = useState("");
  return (
    <div>
      <label>Username:</label>
      <input
        type="text"
        // value={}
        onChange={(e) => setQuery(e.target.value)}
        required={true}
      />
      <br />
      <br />
      <label>Password:</label>
      <input
        type="text"
        // value={}
        onChange={(e) => setQuery(e.target.value)}
        required={true}
      />
      <br />
      <br />
      <button type="submit">Login</button>
    </div>
  );
};
export default loginForm;
