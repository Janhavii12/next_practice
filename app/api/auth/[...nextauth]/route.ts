import NextAuth from "next-auth";
import  CredentialsProvider  from "next-auth/providers/credentials";
import credentials from "next-auth/providers/credentials";

const authOptions ={
    providers:[
        CredentialsProvider({
            name:"creds",
            credentials:{
                email:{
                    label:"email", placeholder:"enter email"
                },
                password:{
                    label:"password",
                    placeholder:"enter password"
                },
            },
            async authorize(credentials,req){

                
            },
        })
    ]
};

const handler = NextAuth(

);

export { handler as GET, handler as POST }