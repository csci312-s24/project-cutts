import { useRouter } from "next/router";
import CreatePlannedTrip from "../components/CreatePlannedTrip";

export default function NewRide() {
  const router = useRouter();

  const ExampleUser = {
    name: "Mihir",
    num: 212,
    year: 2024,
    email: "mbsingh@middlebury.edu",
    id: 1,
  };

  const complete = async (PlannedTrip) => {
    if (PlannedTrip) {
      // POST call to the database to update with the newly created Planned Trip
    } else {
      router.back();
    }
  };

  return (
    <div>
      <CreatePlannedTrip appUser={ExampleUser} complete={complete} />
    </div>
  );
}
