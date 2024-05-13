import { createRouter } from "next-connect";
import PlannedTrip from "../../../../models/PlannedTrip";

const router = createRouter();

router.get(async (req, res) => {
  const currentDate = new Date();
  const plannedTrips = await PlannedTrip.query()
    .where("driverId", "=", req.query.id)
    .where("date", ">", currentDate)
    .withGraphFetched("relatedUser");
  res.status(200).json(plannedTrips);
});

export default router.handler({});
