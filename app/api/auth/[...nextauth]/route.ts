// import { NextRequest, NextResponse } from "next/server";

// export function GET(req:NextRequest,args:any
// ){
//destructuring
//     console.log(args.params.authRoutes);
//     return NextResponse.json({
//     message:"route handler it is"
//     })
// }
// export function POST(){
//     return NextResponse.json({
//     message:"users page "
//     })
// }
import NextAuth from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";

const handler = NextAuth({
  providers: [
    CredentialsProvider({
      name: "Email",
      credentials: {
        username: { label: "email", type: "text", placeholder: "Email" },
        password: {
          label: "password",
          type: "password",
          placeholder: "Password",
        },
      },
      async authorize(credentials: any) {
        console.log(credentials);
        //validation
        return {
          id: "user1",
        };
      },
    }),
  ],
  // should not be hardcoded , should be picked from .env file
  secret: process.env.NEXTAUTH_SECRET,
  callbacks: {
    jwt: ({ token, user }) => {
      console.log(token);
      (token.userId = "dsdskn"), (token.type = "admin");
      return token;
    },
    session:({
        session,token,user
    }:any)=>{
        if(session&&session.user){
            session.user.id=token.userId; // token.sub
        }
        return session;
    }
  },
});

export const GET = handler;
export const POST = handler;
