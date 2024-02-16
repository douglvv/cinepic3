import { authMiddleware, redirectToSignIn } from "@clerk/nextjs";
import { NextResponse } from "next/server";

// This example protects all routes including api/trpc routes
// Please edit this to allow other routes to be public as needed.
// See https://clerk.com/docs/references/nextjs/auth-middleware for more information about configuring your Middleware
export default authMiddleware({
  afterAuth(auth, req, evt) {
    // Handle users who aren't authenticated
    if (!auth.userId && !auth.isPublicRoute) {
      return redirectToSignIn({ returnBackUrl: req.url });
    }
    if (req.nextUrl.pathname === "/" && auth.userId) {
      const url = new URL("/browse", req.url);
      return NextResponse.redirect(url);
    }

    // If the user is logged in and trying to access a protected route, allow them to access route
    if (auth.userId && !auth.isPublicRoute) {
      return NextResponse.next();
    }

    // Allow users visiting public routes to access them
    return NextResponse.next();
  },

  publicRoutes: [
    "/",
    "/sign-in",
    "sign-up",
    "/results",
    "/:type/:imdbID",
    "/api/webhooks",
    "/api/createAccount",
    "/api/getUser/(.*)"
  ],
  signInUrl: "/sign-in",
  // apiRoutes: "/api/(.*)",
});

export const config = {
  matcher: ["/((?!.+\\.[\\w]+$|_next).*)", "/", "/(api|trpc)(.*)"],
};
