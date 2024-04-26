import { getServerSession } from "next-auth/next";
import { authOptions } from "../pages/api/auth/[...nextauth]";
import User from "../../models/User";

// Previous code...

export default async function authenticated(request, response, next) {
  const session = await getServerSession(request, response, authOptions);
  if (session) {
    request.user = await User.query()
      .findById(session.user.id)
      .throwIfNotFound();
    await next(); // Authenticated, proceed to the next handler
  } else {
    response.status(403).end("You must be signed in to access this endpoint.");
  }
}
