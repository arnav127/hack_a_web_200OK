import { useState, useEffect, createContext, useContext } from 'react'
import { useRouter } from 'next/router'
import { useLoginMutation } from '../graphql/generated'

const AuthContext = createContext({});

export const AuthProvider = ({ children }) => {
    const router = useRouter();
    const [user, setUser] = useState(null)
    const [isLoading, setIsLoading] = useState(true)

    const [loginMutation] = useLoginMutation()


    /* useEffect(() => {
*     const loadUser = () => {
*         const user = JSON.parse(localStorage.getItem('user'))
*         if (user) {
*             setUser(user)
*         }
*     }
*     loadUser();
* }, []) */

    const login = async ({ username, password }) => {
        const { data, loading } = await loginMutation({
            variables: {
                username: username,
                password: password
            }
        })
        if (!loading && data?.tokenAuth?.success) {
            setIsLoading(false);
            localStorage.setItem('JWT', data.tokenAuth.token)
            localStorage.setItem('user', JSON.stringify(data.tokenAuth.user))
            setUser(data.tokenAuth.user)
            router.push('/hospital/dashboard')
        }
    }

    const logout = () => {
        localStorage.removeItem('JWT')
        localStorage.removeItem('user')
        setUser(null)
        router.push('/')
    }


    return (
        <AuthContext.Provider value={{ user, login, isLoading, logout }}>
            {children}
        </AuthContext.Provider>
    )
}


export const useAuth = () => useContext(AuthContext)
