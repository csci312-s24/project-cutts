// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

import { createRouter } from "next-connect";
import ProposedTrip from "../../../../models/PlannedTrip";

const router = createRouter();

router.get(async (req, res) => {
  const proposedTrip = await ProposedTrip.query()
    .findById(req.query.id)
    .throwIfNotFound();
  res.status(200).json(proposedTrip);
});
