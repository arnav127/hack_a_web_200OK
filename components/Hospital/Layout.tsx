import Head from 'next/head'
import DoctorSideNav from '../Doctor/SideNav'
import HospitalSideNav from './SideNav'

import { useAuth } from '../../lib/auth'

const Layout = ({ title, children }) => {
  const { user, logout } = useAuth()
  return (
    <>
      <Head>
        <title>{title ? title : 'Docco'}</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="flex flex-col flex-wrap md:flex-row">
        {user?.IsDoctor ? (
          <DoctorSideNav title={title} />
        ) : (
          <HospitalSideNav title={title} />
        )}
        <section className="h-screen flex-1 overflow-y-auto bg-gray-100/50">
          <header className="flex justify-between items-center p-4 h-20 text-sm">
            <h1 className="text-2xl font-bold">{title}</h1>
            <button
              className="inline-flex gap-2 items-center py-2 px-3 font-semibold rounded-lg hover:bg-gray-100"
              onClick={logout}
            >
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1"
                />
              </svg>
            </button>
          </header>

          <div className="p-4">{children}</div>
        </section>
      </main>
    </>
  )
}

export default Layout
