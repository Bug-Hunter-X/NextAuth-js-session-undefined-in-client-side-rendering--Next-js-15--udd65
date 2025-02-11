```javascript
//pages/index.js
import Link from 'next/link';

export default function Home() {
  return (
    <div>
      <h1>Welcome to my Next.js app!</h1>
      <Link href="/about">
        <a>Go to About Page</a>
      </Link>
    </div>
  );
}
```
```javascript
//pages/about.js
import { unstable_getServerSession } from 'next-auth';
import { authOptions } from './api/auth/[...nextauth]';

export default async function About() {
  const session = await unstable_getServerSession(authOptions);

  if (!session) {
    return (
      <div>
        <h1>You are not logged in!</h1>
      </div>
    );
  }

  return (
    <div>
      <h1>About Page</h1>
      <p>This is the about page.</p>
      <p>Session User Email: {session.user.email}</p>
    </div>
  );
}
export async function getServerSideProps(context) {
    return {
        props: {}, // will be passed to the page component as props
    }
}
```