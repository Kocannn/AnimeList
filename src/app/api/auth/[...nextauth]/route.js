import NextAuth from "next-auth";
import githubAuth from "next-auth/providers/github";
import GoogleProvider from "next-auth/providers/google";
import CredentialsProvider from "next-auth/providers/credentials";
import prisma from "../../../../libs/prisma"
import { PrismaAdapter } from "@auth/prisma-adapter";
import bcrypt from "bcrypt"

export const authOption = {
  adapter: PrismaAdapter(prisma),
  providers: [
    githubAuth({
      clientId: process.env.GITHUB_CLIENT,
      clientSecret: process.env.GITHUB_SECRET,
    }),
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT,
      clientSecret: process.env.GOOGLE_SECRET
    }),
    CredentialsProvider({
      name: 'Credentials',
      credentials: {
        username: { label: 'Username', type: 'text', placeholder: 'Username' },
        password : { label: 'Password', type: 'password', placeholder: 'Password' },
        email: { label: 'Email', type: 'email', placeholder: 'Email' }
      },
      async authorize(credentials) {
        if(!credentials.email || !credentials.password) {
          console.error("Pengguna tidak ditemukan");
          return null
        }
        const user = await prisma.user.findUnique({
          where: {
            email: credentials.email
          }
        });
        
        
        if(!user) return null
        const passwordMatch = await bcrypt.compare(credentials.password, user.hashedPassword)
        if(!passwordMatch){
          console.error("Password tidak cocok");
          return null
        } 
        return user
      }

    })
  ],
  session: {
    strategy: "jwt",
    
  },
  secret: process.env.NEXTAUTH_SECRET,
  debug: process.env.NODE_ENV === "development",
};
const handler = NextAuth(authOption);

export { handler as GET, handler as POST };
