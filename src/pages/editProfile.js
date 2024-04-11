import styles from "@/styles/Home.module.css";

import { useRouter } from "next/router";
import { createRouter } from "next-connect";
import AppUserProfileEdit from "../components/AppUserProfileEdit";

export default function EditProfile() {
  const router = useRouter();
  const ExampleUser = {
    name: "Mihir",
    num: 212,
    year: 2024,
    email: "mbsingh@middlebury.edu",
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
    <div className={styles.component}>
      <AppUserProfileEdit appUser={ExampleUser} complete={complete} />
    </div>
  );
}
