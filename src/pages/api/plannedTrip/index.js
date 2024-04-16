import { createRouter } from "next-connect";
import PlannedTrip from "../../../../models/PlannedTrip";

const router = createRouter();

router.post(async (req, res) => {
  const plannedTrip = await PlannedTrip.query().insertAndFetch(req.body);
  res.status(200).json(plannedTrip);
});
