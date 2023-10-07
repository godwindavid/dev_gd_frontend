import React from "react";

const appState = {
    token: false,
    setToken: (token) => { }

}

const appContext = React.createContext(appState);


export default appContext;