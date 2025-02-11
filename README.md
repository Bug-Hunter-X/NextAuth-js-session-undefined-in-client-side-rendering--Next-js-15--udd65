# NextAuth.js Session Undefined in Client-Side Rendering (Next.js 15)

This repository demonstrates a common issue encountered when using NextAuth.js for authentication within a Next.js 15 application.  The problem arises when session data isn't immediately available on the client-side during page rendering, resulting in undefined session values.

## Problem Description

The `unstable_getServerSession` function successfully retrieves the session data on the server. However, this data is not directly accessible within the client-side rendering process of the about page.  This leads to rendering errors or unexpected behavior if the application attempts to access the session data before it is fully populated.

## Solution

The provided solution addresses this by appropriately handling the asynchronous nature of obtaining session data.  The session data will be initialized after the initial render and it will be available at the next render.