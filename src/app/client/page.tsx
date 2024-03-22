'use client'
import { signIn, useSession } from "next-auth/react"
import Image from "next/image"

export default function Client() {
  // It is required. So if you try to log in and you are not logged, the app will send to you sing In page to log in.
  const { data: session, status} = useSession(
    {
    required: true,
  }
  )
  
  return (
    <section className="text-center">
      <h1 className="text-3xl">Hi {session?.user?.name}</h1>
      <h2  className="text-xl mb-3">Welcome to the Client Page</h2>
      {
        session?.user?.image ? (
          <Image 
            className="border-4 border-black dark:border-slate-500 drop-shadow-xl shadow-black rounded-full mx-auto mt-8"
            src={session?.user?.image}
            width={200}
            height={200}
            alt={session?.user?.image ?? "Profile Pic"}
            priority={true}
      />
        ) : null
      }
    </section>
  )
}