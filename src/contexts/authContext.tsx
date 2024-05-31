import React, { useState, createContext, ReactNode } from 'react'

type AuthContextData = {
    user: string
    isAuthenticated: boolean
}

type UserProps = {
    id: string
    name: string
    email: string
    token: string
}

type AuthProviderProps = {
    children: ReactNode
}

export const AuthContext = createContext({} as AuthContextData)

export function AuthProvider({children} : AuthProviderProps){
    const [user, setUser] = useState<UserProps>({
         id: '1', 
         name: 'Sebastião', 
         email: 'rodrigo@gmail.com', 
         token: 'asd5f3215a3sd215asd32f15adsf315'
    })

    const isAuthenticated = !!user.name;

    return(
        <AuthContext.Provider value={{ user, isAuthenticated }}>
            {children} 
        </AuthContext.Provider>
    )
}