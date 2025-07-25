// import { prisma } from "@/lib/db";
import CredentialsProvider from "next-auth/providers/credentials";

import NextAuth from "next-auth"
import { prisma } from "@/lib/db";
import Provider from "@/app/Provider";

const handler = NextAuth({
  providers : [
     CredentialsProvider({
    // The name to display on the sign in form (e.g. 'Sign in with...')
    name: 'Credentials',
    // The credentials is used to generate a suitable form on the sign in page.
    // You can specify whatever fields you are expecting to be submitted.
    // e.g. domain, username, password, 2FA token, etc.
    // You can pass any HTML attribute to the <input> tag through the object.
    credentials: {
      username: { label: "Username", type: "text", placeholder: "jsmith" },
      password: { label: "Password", type: "password" }
    },
    async authorize(credentials, req) {
      // You need to provide your own logic here that takes the credentials
      // submitted and returns either a object representing a user or value
      // that is false/null if the credentials are invalid.
      // e.g. return { id: 1, name: 'J Smith', email: 'jsmith@example.com' }
      // You can also use the `req` object to obtain additional parameters
      // (i.e., the request IP address)
      console.log("in the auth page")
      const response = await prisma.user.create({
        data:{
            name : credentials?.username ?? "",
        username : credentials?.username ?? "",
        password : credentials?.password ?? "",
        provider : "Credentials"
        }
        
      })
      console.log("data enter successfully")
      const res = await fetch("/your/endpoint", {
        method: 'get',
        body: JSON.stringify(credentials),
        headers: { "Content-Type": "application/json" }
      })
      const user ={
        name:"manni",
        username:"manni@123"
      }

      
      // Return null if user data could not be retrieved
      return user
    }
  })
  ]
})

export { handler as GET, handler as POST }
