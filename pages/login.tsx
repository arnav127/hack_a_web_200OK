import { useState } from 'react'
import Head from 'next/head'

import { useAuth } from '../lib/auth'

const Login = () => {
    const [err, setErr] = useState(null)

    const { login } = useAuth()

    const handleSubmit = (e) => {
        e.preventDefault()
        const formData = new FormData(e.currentTarget)
        login({
            username: formData.get('username'),
            password: formData.get('password'),
        })
    }

    return (
        <>
            <Head>
                <title>Login</title>
                <link rel="icon" href="/favicon.ico" />
            </Head>

            <main className="h-screen bg-sky-50">
                <div className="flex justify-center items-center h-full">
                    <form
                        className="flex w-96 max-w-[24rem] flex-col gap-4 rounded-lg bg-sky-200/50 p-8"
                        onSubmit={handleSubmit}
                    >
                        <div className="flex gap-4 justify-center items-center text-2xl font-bold text-sky-600">
                            <svg
                                className="w-12 h-12"
                                fill="none"
                                stroke="currentColor"
                                viewBox="0 0 24 24"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth={2}
                                    d="M11 16l-4-4m0 0l4-4m-4 4h14m-5 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h7a3 3 0 013 3v1"
                                />
                            </svg>
                            <h2>Login</h2>
                        </div>
                        <input
                            type="username"
                            id="username"
                            name="username"
                            className="py-2 px-4 placeholder-gray-400 text-gray-700 rounded-lg border border-transparent shadow-sm focus:border-transparent focus:outline-none focus:ring-2 focus:ring-sky-600"
                            placeholder="Username"
                            required
                        />
                        <input
                            type="password"
                            id="password"
                            name="password"
                            className="py-2 px-4 placeholder-gray-400 text-gray-700 rounded-lg border border-transparent shadow-sm focus:border-transparent focus:outline-none focus:ring-2 focus:ring-sky-600"
                            placeholder="Password"
                            required
                        />
                        {err && (
                            <p className="text-sm text-red-500">{JSON.stringify(err)}</p>
                        )}
                        <button
                            type="submit"
                            className="py-2 px-4 w-full font-semibold text-center text-white rounded-lg shadow-md transition duration-200 ease-in bg-sky-600 hover:bg-sky-700 focus:outline-none focus:ring-2 focus:ring-sky-500 focus:ring-offset-2 focus:ring-offset-sky-200"
                        >
                            Login
                        </button>
                    </form>
                </div>
            </main>
        </>
    )
}

export default Login
