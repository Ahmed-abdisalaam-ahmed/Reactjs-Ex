import {useContext} from 'react'
import { Authcontext } from '../context/Authcontext'
import { Navigate, useLocation } from 'react-router-dom'

const ProtectedRouter = ({element}) => {

    const {isAuthenticated} = useContext(Authcontext);
    const location = useLocation();

    if(!isAuthenticated){
        return <Navigate to='/login' state={{ from: location }} replace/>
    }


  return element
}

export default ProtectedRouter