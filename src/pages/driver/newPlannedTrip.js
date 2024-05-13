import { useRouter } from "next/router";
import { useSession } from "next-auth/react";
import { useEffect, useState } from "react";
import CreatePlannedTrip from "../../components/CreatePlannedTrip";

export default function NewRide() {
  const router = useRouter();

  const { data: session } = useSession({ required: true });
  const [localUser, setLocalUser] = useState("");
  useEffect(() => {
    if (!session) return;
    fetch(`/api/User/${session.user.id}`)
      .then((res) => res.json())
      .then((data) => setLocalUser(data));
  }, [session]);

  let driver = 0;
  if (session) {
    driver = localUser;
  }

  const complete = async (PlannedTrip) => {
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
        router.push(`/rider`);
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
