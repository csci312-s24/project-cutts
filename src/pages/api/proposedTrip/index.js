import { createRouter } from "next-connect";
import ProposedTrip from "../../../../models/PlannedTrip";

const router = createRouter();

router.post(async (req, res) => {
  const proposedTrip = await ProposedTrip.query().insertAndFetch(req.body);
  res.status(200).json(proposedTrip);
});
