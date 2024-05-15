import { useRouter } from "next/router";
import { useSession } from "next-auth/react";
import { useEffect, useState } from "react";
import AppUserProfileEdit from "../../components/AppUserProfileEdit";

export default function EditProfile() {
  const router = useRouter();
  const { data: session } = useSession();
  const [localUser, setLocalUser] = useState(null);

  useEffect(() => {
    if (!session) return;
    fetch(`/api/User/${session.user.id}`)
      .then((res) => res.json())
      .then((data) => setLocalUser(data));
  }, [session]);

  const complete = async (thisUser) => {
    if (thisUser) {
      fetch(`/api/User/${thisUser.id}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(thisUser),
      });
      router.back();
    } else {
      router.back();
    }
  };

  return (
    <div>
      {localUser && (
        <AppUserProfileEdit appUser={localUser} complete={complete} />
      )}
    </div>
  );
}
