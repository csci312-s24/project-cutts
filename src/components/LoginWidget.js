import { signIn, useSession } from "next-auth/react";
import { useRouter } from "next/router";

export default function LoginWidget() {
  const { data: session } = useSession();
  const router = useRouter();

  if (session) {
    router.push("/profile");
  }
  return (
    <div>
      <button type="button" onClick={() => signIn("google")}>
        Sign in
      </button>
    </div>
  );
}
