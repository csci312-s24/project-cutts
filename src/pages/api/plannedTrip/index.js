import { createRouter } from "next-connect";
import PlannedTrip from "../../../../models/PlannedTrip";
import { onError } from "../../../../lib/middleware";

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

router.post(async (req, res) => {
  const plannedTrip = await PlannedTrip.query().insertAndFetch(req.body);
  res.status(200).json(plannedTrip);
});

export default router.handler({ onError });
