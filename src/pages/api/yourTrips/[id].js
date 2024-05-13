import { createRouter } from "next-connect";
import PlannedTrip from "../../../../models/PlannedTrip";
import ProposedTrip from "../../../../models/ProposedTrip";
import { onError } from "../../../../lib/middleware";

const router = createRouter();

router.get(async (req, res) => {
  const yourPlannedTrip = await PlannedTrip.query()
    .findById(req.query.id)
    .throwIfNotFound();
  const yourProposedTrip = await ProposedTrip.query()
    .findById(req.query.id)
    .throwIfNotFound();
  res.status(200).json(yourPlannedTrip + yourProposedTrip);
});

export default router.handler({ onError });
