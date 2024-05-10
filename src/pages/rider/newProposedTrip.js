import { useRouter } from "next/router";
import { useSession } from "next-auth/react";
import { useEffect, useState } from "react";
import CreateProposedTrip from "../../components/CreateProposedTrip";

export default function NewRide() {
  const router = useRouter();

  const { data: session } = useSession();
  const [localUser, setLocalUser] = useState("");
  useEffect(() => {
    if (!session) return;
    fetch(`/api/User/${session.user.id}`)
      .then((res) => res.json())
      .then((data) => setLocalUser(data));
  }, [session]);

  const complete = async (ProposedTrip) => {
    if (ProposedTrip) {
      // POST call to the database to update with the newly created Proposed Trip
      console.log("here0");
      const response = await fetch(`/api/proposedTrip`, {
        method: "POST",
        body: JSON.stringify(ProposedTrip),
        headers: new Headers({
          Accept: "application/json",
          "Content-Type": "application/json",
        }),
      });
      if (response.ok) {
        router.push(`/profile`);
        // this should go to profile where you see your proposed trips
      } else {
        console.log("Error: Failed to create the proposed trip"); // eslint-disable-line no-console
      }
    } else {
      router.back();
    }
  };

  return (
    <div>
      <CreateProposedTrip proposer={localUser} complete={complete} />
    </div>
  );
}
