import { useRouter } from "next/router";
import { createRouter } from "next-connect";
import { ThemeProvider } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import AppUserProfileEdit from "../../components/AppUserProfileEdit";
import theme from "../../material/theme";

export default function EditProfile() {
  const router = useRouter();

  let localUser;
  fetch("/api/User")
    .then((resp) => resp.json())
    .then((data) => {
      localUser = data;
    });

  const complete = async (User) => {
    const createdRouter = createRouter();
    if (User) {
      createdRouter.put(async (req, res) => {
        const { id, ...userInfo } = req.body;
        const user = await User.query().updateAndFetchById(id, userInfo);
        res.status(200).json(user);
      });
      router.back();
    } else {
      router.back();
    }
  };

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <AppUserProfileEdit appUser={localUser} complete={complete} />
    </ThemeProvider>
  );
}
