import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { ThemeProvider } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import EditProposedTrip from "../../../components/EditProposedTrip";
import theme from "../../../material/theme";

export default function EditYourProposedTrip() {
  const router = useRouter();
  const [thisTrip, setThisTrip] = useState(null);

  useEffect(() => {
    fetch(`/api/proposedTrip/${router.query.id}`)
      .then((res) => res.json())
      .then((data) => setThisTrip(data));
  }, [router.query.id]);

  const complete = async (editedTrip) => {
    if (editedTrip) {
      fetch(`/api/proposedTrip/${editedTrip.id}`, {
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
    <ThemeProvider theme={theme}>
      <CssBaseline />
      {thisTrip && (
        <EditProposedTrip proposedTrip={thisTrip} complete={complete} />
      )}
    </ThemeProvider>
  );
}
