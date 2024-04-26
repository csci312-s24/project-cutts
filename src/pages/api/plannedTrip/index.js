import { createRouter, onError } from "next-connect";
import authenticated from "@/lib/middleware";
import PlannedTrip from "../../../../models/PlannedTrip";

const router = createRouter();

router.get(async (req, res) => {
  const currentDate = new Date();
  const plannedTrips = await PlannedTrip.query().where(
    "date",
    ">",
    currentDate,
  );
  res.status(200).json(plannedTrips);
});

router.post(authenticated, async (req, res) => {
  const plannedTrip = await PlannedTrip.query().insertAndFetch(req.body);
  res.status(200).json(plannedTrip);
});
export default router.handler({ onError });
