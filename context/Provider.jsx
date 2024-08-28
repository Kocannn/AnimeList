"use client"
import { SessionProvider } from "next-auth/react"

export default function provider ({ children, session }) {
  return (
    <SessionProvider session={session}>
      {children}
    </SessionProvider>
  )
}