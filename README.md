# Next MongoDB Nextauth Example

Builds on [next-tailwind-typescript-example](https://github.com/wwsalmon/next-tailwind-typescript-example). A minimal but opinionated personal biolerplate

general stuff:
- Typescript and TailwindCSS
- `_document.tsx`
- nprogress
- toasts
- SEO component
- Button and modal components
- Mongoose/MongoDB
- SWR with `fetcher.ts`
  
mongodb/api stuff:
- `nextApiEndpoint.ts`
- next-response-helpers
- `dbConnect.ts`
- `getThisUser.ts`
- `UserModel`
- [NextAuth](https://next-auth.js.org/) with UserModel integration
- Basic auth flow screens

To use, run `npx create-next-app -e https://github.com/wwsalmon/next-mongodb-nextauth-example`, then create a `.env`
file with the following variables:
- MONGODB_URL
- GOOGLE_CLIENT_ID
- GOOGLE_CLIENT_SECRET
- NEXTAUTH_URL
- NEXTAUTH_SECRET