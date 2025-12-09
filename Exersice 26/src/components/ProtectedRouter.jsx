import {useContext} from 'react'
import { Authcontext } from '../context/Authcontext'
import { Navigate } from 'react-router-dom'

const ProtectedRouter = ({element}) => {

    const {isAuthenticated} = useContext(Authcontext)

    if(!isAuthenticated){
        return <Navigate to='/login' replace/>
    }


  return element
}

export default ProtectedRouter