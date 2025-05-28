import NextAuth from "next-auth";
import GoogleProvider from "next-auth/providers/google";
import { getUserByEmail, createNewUser } from "@/utils/database";

const handler = NextAuth({
    providers: [
        GoogleProvider({
            clientId: process.env.GOOGLE_ID,
            clientSecret: process.env.GOOGLE_CLIENT_SECRET,
        }),
    ],
    callbacks: {
        async session({session}) {
            try{
                const sessionUser = await getUserByEmail(session.user.email)
                session.user.id = sessionUser._id.toString()
    
                return session
            } catch(error) {
                console.error(error)
            }
        },
        async signIn({ account, profile }) {
            const userExists = await getUserByEmail(profile.email)

            if (!userExists) {
                await createNewUser(profile.email, profile.name.replace(" ", "").toLowerCase(), profile.picture)
            }

            return true 
          },

    }
});

export { handler as GET, handler as POST };