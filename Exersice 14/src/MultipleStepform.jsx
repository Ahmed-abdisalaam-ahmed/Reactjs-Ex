import { useReducer } from "react";

const initialState = {
  step: 1, // Start at step 1
  firstName: "",
  lastName: "",
  email: "",
  phone: "",
};

const reducer = (state, action) => {
  switch (action.type) {
    case "UpdateField":
      return {
        ...state,
        [action.field]: action.value,
      };
    case "PrevStep":
      return {
        ...state,
        step: state.step - 1,
      };
    case "NEXT_STEP":
      return {
        ...state,
        step: state.step + 1,
      };
    case "ResetFeild":
      return initialState
    default:
      return state;
  }
};

const MultipleStepform = () => {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <div>
      {state.step === 1 && <Profile state={state} dispatch={dispatch} />}
      {state.step === 2 && <Contant state={state} dispatch={dispatch} />}
      {state.step === 3 && <Review state={state} dispatch={dispatch} />}
    </div>
  );
};
  const Profile = ({ state, dispatch }) => {
    return (
      <div>
        <h1>step 1 : profile</h1>
        <label>firstName:</label>
        <input
          type="text"
          placeholder="Enter Your first-name"
          value={state.firstName}
          onChange={(e) =>
            dispatch({
              type: "UpdateField",
              field: "firstName",
              value: e.target.value,
            })
          }
        />
        <br></br>
        <br></br>
        <label>lastName:</label>
        <input
          type="text"
          placeholder="Enter Your Last-name"
          value={state.lastName}
          onChange={(e) =>
            dispatch({
              type: "UpdateField",
              field: "lastName",
              value: e.target.value,
            })
          }
        />
        <br></br>
        <button onClick={() => dispatch({ type: "NEXT_STEP" })}>Next</button>
      </div>
    );
  };

  const Contant = ({ state, dispatch }) => {
    return (
      <div>
        <h1>step 2 : Contant</h1>
        <label>Email:</label>
        <input
          type="Email"
          placeholder="Enter your Email"
          value={state.email}
          onChange={(e) =>
            dispatch({
              type: "UpdateField",
              field: "email",
              value: e.target.value,
            })
          }
        />
        <label>Phone:</label>
        <input
          type="number"
          placeholder="Enter Your Number"
          value={state.phone}
          onChange={(e) =>
            dispatch({
              type: "UpdateField",
              field: "phone",
              value: e.target.value,
            })
          }
        />
        <button onClick={() => dispatch({ type: "PrevStep" })}>Back</button>
        <button onClick={() => dispatch({ type: "NEXT_STEP" })}>Next</button>
      </div>
    );
  };

  const Review = ({ state, dispatch }) => {
    function handleConfrim() {
      alert("the Confrim work seccesfully");
      dispatch({ type: "ResetFeild" });
    }
    return (
      <div>
        <h1>Step 3 : Review</h1>
        <p>FirstName:{state.firstName}</p>
        <p>LastName:{state.lastName}</p>
        <p>Email:{state.email}</p>
        <p>Phone:{state.phone}</p>

        <button onClick={() => dispatch({ type: "PrevStep" })}>Back</button>
        <button onClick={handleConfrim}>Confrim</button>
      </div>
    );
  };
  export default MultipleStepform;
