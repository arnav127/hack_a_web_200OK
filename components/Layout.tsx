import Head from 'next/head'
import Navbar from './Navbar'

const Layout = ({ title, children }) => {
  return (
    <>
      <Head>
        <title>{title ? title : 'Hack-The-Web'}</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Navbar />
      <main className="m-4">{children}</main>
    </>
  )
}

export default Layout
