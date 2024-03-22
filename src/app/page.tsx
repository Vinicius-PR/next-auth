'use client'

import Image from "next/image"
import { useSession, signIn, signOut } from "next-auth/react"

export default function Home() {
  const { data:session } = useSession()

  return (
    <div className="border p-3 text-center">
      {
        session ? (
          <>
            <h1 className="text-3xl">Hi {session.user?.name}. Welcome</h1>
            <h2 className="text-xl mb-3">Enjoy your poem</h2>

            <div>
              <h2 className="text-lg mb-3 font-bold"> “Missing” by Anne Scott</h2>
              <p className="font-medium">
                I’ve hunted near, I’ve hunted far <br />
                I even looked inside my car. <br />
                I’ve lost my glasses, I’m in need, <br />
                To have them now so I can read. <br />
                I loudly swear and I curse <br />
                Did I leave them in my purse? <br />
                Are they behind the sofa, under the bed? <br />
                Oh there they are—on my head! <br />
              </p>
            </div>
          </>
        ) : (
          <>
            <h1 className="text-3xl">Hi, you are not logged</h1>
            <h2 className="text-xl">Log in to see a beatiful poem</h2>
          </>
        )
      }
      
    </div>
  );
}
