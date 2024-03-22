"use client"
import Link from "next/link"
import { signIn, signOut, useSession } from "next-auth/react"

export default function Header() {
  const { data:session } = useSession()
  return (
    <header className="flex justify-between items-center bg-green-700 text-white p-3">

      <nav>
        <ul className="flex gap-4">
          <li className="bg-green-500 px-2 rounded hover:bg-green-600 transition-all">
            <Link href="/">Home</Link>
          </li>
          <li className="bg-green-500 px-2 rounded hover:bg-green-600 transition-all">
            <Link href="/server">Server</Link>
          </li>
          <li className="bg-green-500 px-2 rounded hover:bg-green-600 transition-all">
            <Link href="/client">Client</Link>
          </li>
        </ul>
      </nav>

      <div>
        {
          session ?  (
            <button 
              className="bg-red-400 p-2 rounded-lg transition-all hover:bg-red-500"
              onClick={() => signOut()} >
                Sign Out
              </button>
          ) : (
            <button 
            className="bg-yellow-400 p-2 rounded-lg transition-all hover:bg-yellow-500"
              onClick={() => signIn()} >
                Sign In
              </button>
          )
        }
      </div>
    </header>
  )
}