import { useRouter } from "next/router";
import { useSession } from "next-auth/react";
import { ThemeProvider } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import { useEffect, useState } from "react";
import AppUserProfileEdit from "../../components/AppUserProfileEdit";
import theme from "../../material/theme";

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
    <ThemeProvider theme={theme}>
      <CssBaseline />
      {localUser && (
        <AppUserProfileEdit appUser={localUser} complete={complete} />
      )}
    </ThemeProvider>
  );
}
