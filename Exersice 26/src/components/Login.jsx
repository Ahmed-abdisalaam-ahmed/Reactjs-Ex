import { useContext } from 'react'
import { Authcontext } from '../context/Authcontext';
import { Navigate, useNavigate } from 'react-router-dom';

const Login = () => {
  const { login , isAuthenticated} = useContext(Authcontext);

  const handleLogin = () =>{
    login();
  }
  if(isAuthenticated){
     return <Navigate to={"/"} replace/>;
  }

  return (
    <div className=''>
      <h1 className='text-2xl pb-2'>Login page</h1>
      <button className='bg-green-400 cursor-pointer text-white p-2 rounded-lg transition' onClick={handleLogin}> Login
      </button>
    </div>
  )
}

export default Login