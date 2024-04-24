// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

import { createRouter } from "next-connect";
import PlannedTrip from "../../../../models/PlannedTrip";
import { onError } from "../../../../lib/middleware";

const router = createRouter();

router
  .get(async (req, res) => {
    const plannedTrip = await PlannedTrip.query()
      .findById(req.query.id)
      .throwIfNotFound();
    res.status(200).json(plannedTrip);
  })
  .put(async (req, res) => {
    const { id, ...editedPlannedTrip } = req.body;
    const plannedTrip = await PlannedTrip.query().updateAndFetchById(
      id,
      editedPlannedTrip,
    );
    res.status(200).json(plannedTrip);
  });

export default router.handler({ onError });
