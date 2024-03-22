import Image from "next/image"

import { getServerSession} from "next-auth/next"
import { options } from "../api/auth/[...nextauth]/options"
import { redirect } from "next/navigation"

export default async function Server() {
  const session = await getServerSession(options)

  if (!session) {
    redirect('/api/auth/signin?callbackUrl=/server')
  }
  
  return (
    <section className="text-center">
      <h1 className="text-3xl">Hi {session?.user?.name}</h1>
      <h2  className="text-xl mb-3">Welcome to the Server Page</h2>
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