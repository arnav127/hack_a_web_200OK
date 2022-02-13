import Link from 'next/link'

const Navbar = () => {
    return (
        <nav className="absolute top-0 left-0 p-4 mb-4 w-full text-cyan-200 bg-sky-900">
            <div className="container flex justify-between mx-auto">
                <div>Hack-a-Web</div>
                <div>
                    <ul className="inline-flex">
                        <Link href="/login">
                            <a>
                                <li>Login</li>
                            </a>
                        </Link>
                    </ul>
                </div>
            </div>
        </nav>
    )
}

export default Navbar
