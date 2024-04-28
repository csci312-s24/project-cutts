import { useRouter } from "next/router";
import CreatePlannedTrip from "../../components/CreatePlannedTrip";

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
    // console.log(PlannedTrip)
    if (PlannedTrip) {
      // POST call to the database to update with the newly created Planned Trip
      const response = await fetch(`/api/plannedTrip`, {
        method: "POST",
        body: JSON.stringify(PlannedTrip),
        headers: new Headers({
          Accept: "application/json",
          "Content-Type": "application/json",
        }),
      });
      if (response.ok) {
        // const createdPlannedTrip = await response.json();
        router.push(`/driver`);
      } else {
        console.log("Error: Failed to create the planned trip"); // eslint-disable-line no-console
      }
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
