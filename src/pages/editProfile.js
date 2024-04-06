import { useRouter } from "next/router";
import AppUserProfileEdit from "../components/AppUserProfileEdit";

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
    if (User) {
      // POST call to the database to update the User info that was edited
    } else {
      router.back();
    }
  };

  return (
    <div>
      <AppUserProfileEdit appUser={ExampleUser} complete={complete} />
    </div>
  );
}
