const Navbar = () => {
  return (
    <nav className="absolute top-0 left-0 mb-4 w-full bg-sky-900 p-4 text-cyan-200">
      <div className="container mx-auto flex justify-between">
        <div>Hack-a-Web</div>
        <div>
          <ul className="inline-flex">
            <li>Login</li>
            <li>Register</li>
            <li>Logout</li>
          </ul>
        </div>
      </div>
    </nav>
  )
}

export default Navbar