import { Main } from 'next/document'
import Link from 'next/link'

export default function Navbar() {
  return (
    <div>
      <MainNav />
    </div>
  )
}

function MainNav() {
  return (
    <div>
      <nav>
        <Link href="/">
          <a>Home</a>
        </Link>
        {" "}
        <Link href="/about">
          <a>About</a>
        </Link>
        {" "}
        <Link href="/membership">
          <a>Membership</a>
        </Link>
        {" "}
        <Link href="/events">
          <a>Events</a>
        </Link>
        {" "}
        <Link href="/contact">
          <a>Contact</a>
        </Link>
      </nav>
    </div>
  )
}