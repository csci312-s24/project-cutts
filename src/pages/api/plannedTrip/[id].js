// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

import { createRouter } from "next-connect";
import PlannedTrip from "../../../../models/PlannedTrip";

const router = createRouter();

router.get(async (req, res) => {
  const plannedTrip = await PlannedTrip.query()
    .findById(req.query.id)
    .throwIfNotFound();
  res.status(200).json(plannedTrip);
});
