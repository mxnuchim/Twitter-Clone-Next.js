# TWITTER clone with React, Tailwind, Next, Prisma, Mongo, NextAuth & Vercel (April, 2023)
![twitter-x-clone-next-js vercel app_(Nest Hub Max)](https://user-images.githubusercontent.com/55309494/231310615-7c4defcb-422b-423b-b617-e8ff9e291b84.png)

Welcome to TwitterX, a Twitter clone website built using the latest and greatest web technologies! Our platform is built with React, Tailwind, Next.js, Prisma, MongoDB, NextAuth, and Vercel.

With TwitterX, users can create accounts, post tweets, follow and unfollow other users, and engage with a community of like-minded individuals. Our modern and responsive UI, powered by Tailwind, makes it easy for users to navigate and interact with the platform on any device.

Features include a lightning-fast user experience, with server-side rendering and automatic code splitting. Our database is managed with Prisma, ensuring fast and efficient data access and manipulation. And with MongoDB as our data store, we offer users a reliable and scalable solution for their data storage needs.

Finally, I used NextAuth for secure and easy user authentication, and Vercel for seamless deployment and hosting. With TwitterX, you can trust that your data is secure, and your experience is top-notch.


The app features indlude:

- Authentication system
- Notification system
- Image Upload using Base64 strings
- Prisma ORM with MongoDB
- Responsive Layout
- 1 To Many Relations (User - Post)
- Many To Many Relations (Post - Comment)
- Following functionality
- Comments / Replies
- Likes functionality
- Vercel Deployment

### Prerequisites

**Node version 14.x**

### Cloning the repository

```shell
git clone https://github.com/mxnuchim/TwitterX-Clone-Next.js.git
```

### Install packages

```shell
npm i
```

### Setup .env file

```js
DATABASE_URL=
NEXTAUTH_JWT_SECRET=
NEXTAUTH_SECRET=
```

### Start the app

```shell
npm run dev
```

## Available commands

Running commands with npm `npm run [command]`

| command | description                              |
| :------ | :--------------------------------------- |
| `dev`   | Starts a development instance of the app |
