import type { NextPage } from 'next'
import Link from 'next/link'
const Home: NextPage = () => {
  
  return (
    <>
      <h1>Generic Form Site</h1>
      <p> Use the links below to navigate</p>
      <h2>Links</h2>
      <ul>
        <li>
          <Link href="/">
            <a>Home</a>
          </Link>
        </li>
        <li>
          <Link href="/user/details">
            <a>Sign Up</a>
          </Link>
        </li>
      </ul>
    </>
  )
}

export default Home
