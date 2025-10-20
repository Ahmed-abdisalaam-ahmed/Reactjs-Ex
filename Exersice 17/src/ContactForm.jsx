import {useForm} from "./useForm";

const ContactForm = () => {
const {values,handleChange,resetFrom} = useForm({
    Name: "",
    Email: "",
    Password: "",
    Massege: "",
})

  const handleSubmit = (event) => {
    event.preventDefault()
    console.log("heloo world" , values)
  };
  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label>
          Enter Your Name:
          <input 
          type="text" 
          name="Name"
          value={values.Name}
          onChange={handleChange} 
          required
          />
        </label>
      </div>
      <div>
        <label>
          Enter Your Email:
          <input 
          type="text"
            name="Email"
            onChange={handleChange}
            value={values.Email} 
            required
            />
        </label>
      </div>
      <div>
        <label>
          Enter Your Password:
          <input 
          type="password"
           name="Password" 
           onChange={handleChange} 
           value={values.Password}
           required
           />
        </label>
      </div>
      <div>
        <label>
          Massege:
          <textarea 
          name="Massege" 
          value={values.Massege}
          onChange={handleChange} 
          required
          ></textarea>
        </label>
      </div>
      <button type="submit">Submit</button>
      <button onClick={resetFrom}>Reset</button>
    </form>
  );
};

export default ContactForm;
