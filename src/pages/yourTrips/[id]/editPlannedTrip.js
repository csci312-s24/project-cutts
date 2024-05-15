import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import EditPlannedTrips from "@/components/EditPlannedTrips";

export default function EditYourPlannedTrip() {
  const router = useRouter();
  const [thisTrip, setThisTrip] = useState(null);

  useEffect(() => {
    fetch(`/api/plannedTrip/${router.query.id}`)
      .then((res) => res.json())
      .then((data) => setThisTrip(data));
  }, [router.query.id]);

  const complete = async (editedTrip) => {
    if (editedTrip) {
      fetch(`/api/plannedTrip/${editedTrip.id}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(editedTrip),
      });
      router.push(`/yourTrips`);
    } else {
      router.push(`/yourTrips`);
    }
  };

  return (
    <div>
      {thisTrip && (
        <EditPlannedTrips plannedTrip={thisTrip} complete={complete} />
      )}
    </div>
  );
}
