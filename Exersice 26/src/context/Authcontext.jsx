import {createContext , useState} from "react";

export const Authcontext = createContext();

export const AuthProvider = ({children}) => {

    const [isAuthenticated, setAuthenticated] = useState(false);

    const login = ()=> setAuthenticated(true);
    const logout = ()=> setAuthenticated(false);

    return (
        <Authcontext.Provider value={{isAuthenticated , login , logout}}>
            {children}
        </Authcontext.Provider>
    )
}