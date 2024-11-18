// api/auth/[...nextauth]/route.js
import NextAuth from 'next-auth';
import CredentialsProvider from 'next-auth/providers/credentials';
import { MongoDBAdapter } from '@next-auth/mongodb-adapter';
import clientPromise from '@/lib/conn';
import bcrypt from 'bcrypt';

export const authOptions = {
  providers: [
    // GoogleProvider({
    //   clientId: process.env.GOOGLE_CLIENT_ID,
    //   clientSecret: process.env.GOOGLE_CLIENT_SECRET,
    // }),
    CredentialsProvider({
      name: 'Credentials',
      credentials: {
        username: { label: "Username", type: "text", placeholder: "jsmith" },
        password: { label: "Password", type: "password" },
        // email: { label: "Email", type: "text", placeholder: "jsmith@example.com" },
        // isSignup: { label: "Signup", type: "boolean" }, 
      },
      async authorize(credentials) {
        const client = await clientPromise;
        const db = client.db('fingrowth'); // Replace with your DB name
        const usersCollection = db.collection('users');

        const { email, password, username, isSignup } = credentials;

        // if (isSignup === "true") {
        //   // Handle signup
        //   const existingUser = await usersCollection.findOne({ email });
        //   if (existingUser) {
        //     throw new Error("Email already in use.");
        //   }

        //   const hashedPassword = await bcrypt.hash(password, 10);
        //   const newUser = {
        //     username,
        //     email,
        //     password: hashedPassword,
        //     img: "default-profile.png", // Default profile image
        //     isAdmin: false, // Default user is not an admin
        //     waitlist_status: "PENDING",
        //     createdAt: new Date(),
        //     updatedAt: new Date(),
        //   };

        //   await usersCollection.insertOne(newUser);

        //   return {
        //     id: newUser._id,
        //     email: newUser.email,
        //     name: newUser.username,
        //     image: newUser.img,
        //   };
        // } else {
          // Handle login
          const user = await usersCollection.findOne({ username });
          if (!user) {
            throw new Error("No user found with this email.");
          }

          const isPasswordValid = await bcrypt.compare(password, user.password || "");
          if (!isPasswordValid) {
            throw new Error("Invalid password.");
          }

          return {
            id: user._id,
            email: user.email,
            name: user.username,
            image: user.img,
          };
        //}
      },
    }),
  ],
  callbacks: {
    async jwt({ token, user }) {
      if (user) {
        token.id = user.id;
        token.email = user.email;
        token.username = user.name;
        token.img = user.image;
      }
      return token;
    },
    async session({ session, token }) {
      session.user = {
        id: token.id,
        email: token.email,
        username: token.username,
        img: token.img,
      };
      return session;
    },
  },
  adapter: MongoDBAdapter(clientPromise),
  session: {
    strategy: 'jwt',
  },
  // pages: {
  //   signIn: '/auth/login',
  //   error: '/auth/error',
  // },
};

// export const authOptions = {
//   providers: [
//     GoogleProvider({
//       clientId: process.env.GOOGLE_CLIENT_ID,
//       clientSecret: process.env.GOOGLE_CLIENT_SECRET,
//     }),
//     CredentialsProvider({
//       // The name to display on the sign in form (e.g. 'Sign in with...')
//       name: 'Credentials',
//       // The credentials is used to generate a suitable form on the sign in page.
//       // You can specify whatever fields you are expecting to be submitted.
//       // e.g. domain, username, password, 2FA token, etc.
//       credentials: {
//         username: { label: "Username", type: "text", placeholder: "jsmith" },
//         password: {  label: "Password", type: "password" }
//       },
//       async authorize(credentials, req) {
//         // Add logic here to look up the user from the credentials supplied
//         const user = { id: 1, name: 'J Smith', email: 'jsmith@example.com' }
  
//         if (user) {
//           // Any object returned will be saved in `user` property of the JWT
//           return user
//         } else {
//           // If you return null or false then the credentials will be rejected
//           return null
//           // You can also Reject this callback with an Error or with a URL:
//           // throw new Error('error message') // Redirect to error page
//           // throw '/path/to/redirect'        // Redirect to a URL
//         }
//       }
//     }),
//   ],
//   callbacks: {
//     // SignIn callback: checks if the user is an admin and handles logic for linking
//     async signIn({ user, account, profile }) {
//       console.log(`Signing in user: ${user.email}, ${user.name}`);

//       // No need to manually handle account linking; the MongoDB adapter should handle this
//       const client = await clientPromise;
//       const db = client.db('fingrowth'); // Your database name
//       const usersCollection = db.collection('users'); // Your users collection

//       // Find the user by their email
//       const existingUser = await usersCollection.findOne({ email: user.email });

//       // If no user exists, create one and link the Google account
//       if (!existingUser) {
//         console.log('User does not exist, creating new user');
//         const newUser = {
//           username: user.name || 'New User',
//           email: user.email,
//           img: user.image || 'default-profile.png',
//           isAdmin: true,  // Mark user as admin
//           waitlist_status: 'PENDING',
//           createdAt: new Date(),
//           updatedAt: new Date(),
//         };

//         await usersCollection.insertOne(newUser);
//         console.log('New user created in the database');
//       }

//       // If the user is an admin, allow the sign-in
//       if (existingUser && existingUser.isAdmin) {
//         console.log('User is an admin, sign-in allowed');
//         return true;
//       }

//       // If the user is not an admin, reject sign-in
//       console.log('User is not an admin');
//       return false;
//     },

//     // JWT callback: adds custom user properties to the JWT token
//     async jwt({ token, user }) {
//       if (user) {
//         // Add custom fields to the token (email, username, img)
//         token.email = user.email;
//         token.username = user.name || user.username;
//         token.img = user.image || 'default-profile.png';
//       }
//       return token;
//     },

//     // Session callback: adds custom fields to the session object
//     async session({ session, token }) {
//       session.user.email = token.email;
//       session.user.username = token.username;
//       session.user.img = token.img;
//       return session;
//     },
//   },
//   adapter: MongoDBAdapter(clientPromise), // Use the adapter to manage user linking automatically
//   session: {
//     strategy: 'jwt', // Use JWT for session management
//   },
// };



const handler = NextAuth(authOptions);

export { handler as GET, handler as POST };
