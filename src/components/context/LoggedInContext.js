import { useState, createContext, useContext } from 'react';

const loggedInContext = createContext();

export function useLoggedInContext() {
    return useContext(loggedInContext);
}

function LoggedInProvider({ children }) {
    console.log(localStorage.getItem("user"));
    const [loggedIn, setLoggedIn] = useState(false);
    return (
        <loggedInContext.Provider value={{ loggedIn, setLoggedIn }}>
            {children}
        </loggedInContext.Provider>)
}
export { LoggedInProvider };