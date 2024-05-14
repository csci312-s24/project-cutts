import { createRouter } from "next-connect";
import authenticated from "@/lib/middleware";
import { onError } from "../../../../lib/middleware";
import ProposedTrip from "../../../../models/ProposedTrip";

const router = createRouter();

router.get(async (req, res) => {
  const currentDate = Date.now();
  const proposedTrips = await ProposedTrip.query()
    .where("date", ">", currentDate)
    .withGraphFetched("relatedProposer");
  res.status(200).json(proposedTrips);
});

router.post(authenticated, async (req, res) => {
  const proposedTrip = await ProposedTrip.query().insertAndFetch(req.body);
  res.status(200).json(proposedTrip);
});

export default router.handler({ onError });
