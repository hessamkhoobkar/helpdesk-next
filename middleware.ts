export { default } from "next-auth/middleware";

export const config = {
  matcher: ["/", "/tickets/:path*", "/users/:path*"],
};
