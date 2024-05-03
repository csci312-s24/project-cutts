import { useRouter } from "next/router";
import { useSession } from "next-auth/react";
import CreatePlannedTrip from "../../components/CreatePlannedTrip";

export default function NewRide() {
  const router = useRouter();
  const { data: session } = useSession();
  const driver = session.user.id;

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
      <CreatePlannedTrip driver={driver} complete={complete} />
    </div>
  );
}
