import { useState, useEffect, createContext, useContext } from 'react'
import { useRouter } from 'next/router'
import { useLoginMutation } from '../graphql/generated'
const AuthContext = createContext({});

export const AuthProvider = ({ children }) => {
    const router = useRouter();
    const [user, setUser] = useState(null)

    const [loginMutation] = useLoginMutation()

    useEffect(() => {
        /* async function loadUserFromCookies() {
*     const token = Cookies.get('token')
*     if (token) {
*         console.log("Got a token in the cookies, let's see if it is valid")
*         api.defaults.headers.Authorization = `Bearer ${token}`
*         const { data: user } = await api.get('users/me')
*         if (user) setUser(user);
*     }
*     setLoading(false)
* }
* loadUserFromCookies() */
    }, [])

    const login = async ({ username, password }) => {
        const { data } = await loginMutation({
            variables: {
                username: username,
                password: password
            }
        })
        if (data?.tokenAuth?.success) {
            localStorage.setItem('JWT', data.tokenAuth.token)
            setUser(data.tokenAuth.user)
            router.push('/hospital/database')
        }
    }

    const logout = () => {
        localStorage.removeItem('JWT')
        setUser(null)
        router.push('/')
    }


    return (
        <AuthContext.Provider value={{ isAuthenticated: !!user, user, login, logout }}>
            {children}
        </AuthContext.Provider>
    )
}

export const useAuth = () => useContext(AuthContext)
