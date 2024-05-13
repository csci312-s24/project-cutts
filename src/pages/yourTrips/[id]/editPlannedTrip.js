import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { ThemeProvider } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import EditPlannedTrips from "@/components/EditPlannedTrips";
import theme from "../../../material/theme";

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
      router.back();
    } else {
      router.back();
    }
  };

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      {thisTrip && (
        <EditPlannedTrips plannedTrip={thisTrip} complete={complete} />
      )}
    </ThemeProvider>
  );
}
