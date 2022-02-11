import Head from 'next/head'
import SideNav from './SideNav'

const Layout = ({ title, children }) => {
  return (
    <>
      <Head>
        <title>{title ? title : 'Docco'}</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="flex flex-col flex-wrap md:flex-row">
        <SideNav title={title} />
        <section className="h-screen flex-grow overflow-y-auto">
          <header className="flex h-20 items-center justify-between p-4 text-sm">
            <h1 className="text-2xl font-bold">{title}</h1>
            <button className="inline-flex items-center gap-2 rounded-lg py-2 px-3 font-semibold hover:bg-gray-100">
              Logout
              <svg
                className="h-6 w-6"
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
      </main>{' '}
    </>
  )
}

export default Layout
