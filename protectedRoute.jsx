// components/ProtectedRoute.js
'use client'
import { useSession } from 'next-auth/react'
import { useRouter } from 'next/navigation'

const ProtectedRoute = ({ children}) => {
  const { data: session, status } = useSession()
  const router = useRouter()


  if (session?.user?.email !== "petlar4real@gmail.com") {
    router.push('/') // Redirect to login page if not authenticated or if user does not have required role
    return null
  }

//   console.log(session)

  return children
}

export default ProtectedRoute
