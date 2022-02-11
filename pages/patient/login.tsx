import { useState } from 'react'
import Head from 'next/head'
import Navbar from '../../components/Navbar'

const Login = () => {
  const [err, setErr] = useState(null)

  const handleSubmit = (e) => {
    e.preventDefault()
  }

  return (
    <>
      <Head>
        <title>Login</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="h-screen bg-sky-50">
        <Navbar />
        <div className="flex h-full items-center justify-center">
          <form
            className="flex w-96 max-w-[24rem] flex-col gap-4 rounded-lg bg-sky-200/50 p-8"
            onSubmit={handleSubmit}
          >
            <div className="flex items-center justify-center gap-4 text-2xl font-bold text-sky-600">
              <svg
                className="h-12 w-12"
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
              className="rounded-lg border border-transparent py-2 px-4 text-gray-700 placeholder-gray-400 shadow-sm focus:border-transparent focus:outline-none focus:ring-2 focus:ring-sky-600"
              placeholder="Username"
              required
            />
            <input
              type="password"
              id="password"
              name="password"
              className="rounded-lg border border-transparent py-2 px-4 text-gray-700 placeholder-gray-400 shadow-sm focus:border-transparent focus:outline-none focus:ring-2 focus:ring-sky-600"
              placeholder="Password"
              required
            />
            {err && (
              <p className="text-sm text-red-500">{JSON.stringify(err)}</p>
            )}
            <button
              type="submit"
              className="w-full rounded-lg bg-sky-600 py-2 px-4 text-center font-semibold text-white shadow-md transition duration-200 ease-in hover:bg-sky-700 focus:outline-none focus:ring-2 focus:ring-sky-500 focus:ring-offset-2 focus:ring-offset-sky-200"
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
