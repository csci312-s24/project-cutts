import { useRouter } from "next/router";
import { createRouter } from "next-connect";
import { ThemeProvider } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import AppUserProfileEdit from "../components/AppUserProfileEdit";
import theme from "../material/theme";

export default function EditProfile() {
  const router = useRouter();
  const ExampleUser = {
    name: "Mihir",
    num: 212,
    year: 2024,
    email: "mbsingh@middlebury.edu",
    id: 1,
  };

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
      <AppUserProfileEdit appUser={ExampleUser} complete={complete} />
    </ThemeProvider>
  );
}
