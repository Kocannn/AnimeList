import { getServerSession } from "next-auth"
import  { authOptions }  from "../app/api/auth/[...nextauth]/route"
import prisma from "./prisma"
export const authUserSession = async() => {
    const session = await getServerSession(authOptions)
    if(!session) return null
    const user = await prisma.user.findUnique({
        where: {
            email: session?.user.email
        }
    })
    if(!user) return null
    return user
}
