import React, {createContext, PropsWithChildren, useState} from "react";

export const Context = createContext({});

export interface IAuth {
    validAuth?: boolean;
}

export type AuthContextStateType = [IAuth, React.Dispatch<React.SetStateAction<IAuth>>];
const ContextProvider = ({ children }: PropsWithChildren) => {

    const [ auth, setAuth ] = useState<IAuth>({})

    return (
        <Context.Provider value={[auth, setAuth]}>
            {children}
        </Context.Provider>
    )
}

export default ContextProvider;
