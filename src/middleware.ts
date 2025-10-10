import { auth } from "@/auth";

// export { auth as middleware } from "@/auth";

export default auth((request) => {
  if (!request.auth && request.nextUrl.pathname.startsWith("/dashboard")) {
    const redirectUrl = new URL("/", request.nextUrl.origin);
    return Response.redirect(redirectUrl);
  }
});
