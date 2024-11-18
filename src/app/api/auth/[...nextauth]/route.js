// api/auth/[...nextauth]/route.js
import NextAuth from 'next-auth';
import GoogleProvider from 'next-auth/providers/google';
import { MongoDBAdapter } from '@next-auth/mongodb-adapter';
import clientPromise from '@/lib/conn';

export const authOptions = {
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
    }),
  ],
  callbacks: {
    // SignIn callback: checks if the user is an admin and handles logic for linking
    async signIn({ user, account, profile }) {
      console.log(`Signing in user: ${user.email}, ${user.name}`);

      // No need to manually handle account linking; the MongoDB adapter should handle this
      const client = await clientPromise;
      const db = client.db('fingrowth'); // Your database name
      const usersCollection = db.collection('users'); // Your users collection

      // Find the user by their email
      const existingUser = await usersCollection.findOne({ email: user.email });

      // If no user exists, create one and link the Google account
      if (!existingUser) {
        console.log('User does not exist, creating new user');
        const newUser = {
          username: user.name || 'New User',
          email: user.email,
          img: user.image || 'default-profile.png',
          isAdmin: true,  // Mark user as admin
          waitlist_status: 'PENDING',
          createdAt: new Date(),
          updatedAt: new Date(),
        };

        await usersCollection.insertOne(newUser);
        console.log('New user created in the database');
      }

      // If the user is an admin, allow the sign-in
      if (existingUser && existingUser.isAdmin) {
        console.log('User is an admin, sign-in allowed');
        return true;
      }

      // If the user is not an admin, reject sign-in
      console.log('User is not an admin');
      return false;
    },

    // JWT callback: adds custom user properties to the JWT token
    async jwt({ token, user }) {
      if (user) {
        // Add custom fields to the token (email, username, img)
        token.email = user.email;
        token.username = user.name || user.username;
        token.img = user.image || 'default-profile.png';
      }
      return token;
    },

    // Session callback: adds custom fields to the session object
    async session({ session, token }) {
      session.user.email = token.email;
      session.user.username = token.username;
      session.user.img = token.img;
      return session;
    },
  },
  adapter: MongoDBAdapter(clientPromise), // Use the adapter to manage user linking automatically
  session: {
    strategy: 'jwt', // Use JWT for session management
  },
};

const handler = NextAuth(authOptions);

export { handler as GET, handler as POST };
