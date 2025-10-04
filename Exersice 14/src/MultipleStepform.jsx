const initialState = {
  step: 1, // Start at step 1
  firstName: '',
  lastName: '',
  email: '',
  phone: '',
}

const reducer = (state, action) =>{
    switch(action.type){
        case 'UpdateField':
            return {
                ...state,
                [action.field]:action.value
            }
        case 'PrevField':
            return {
                
            }
        case 'ResetFeild':
            return {

            }
        default:
            return state
    }
}

export const Profile = ()=>{
    return (
        <div>
            <h1>step 1 : profile</h1>
            <label>firstName:</label>
            <input 
            type="text"
             placeholder="Enter Your first-name"
            />
            <label>lastName:</label>
            <input 
            type="text"
             placeholder="Enter Your Last-name"
            />
            <button>Next</button>
        </div>
    )
}

export const Contant = ()=>{
    return (
        <div>
        <h1>step 2 : Contant</h1>
            <label>Email:</label>
            <input 
              type="Email"  
             placeholder="Enter your Email"
            />
            <label>Phone:</label>
            <input 
                type="number"
             placeholder="Enter Your Number"
            />
            <button>Back</button>
            <button>Next</button>
        </div>
    )
}

export const Review = ()=>{
    return (
        <div>
            <h1>Step 3 : Review</h1>
            <p>FirstName:{}</p>
            <p>LastName:{}</p>
            <p>Email:{}</p>
            <p>Phone:{}</p>

            <button>Back</button>
            <button>Confrim</button>
        </div>
    )
}

