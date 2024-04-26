// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

import { createRouter, onError } from "next-connect";
import authenticated from "@/lib/middleware";
import PlannedTrip from "../../../../models/PlannedTrip";

const router = createRouter();

router
  .get(async (req, res) => {
    const plannedTrip = await PlannedTrip.query()
      .findById(req.query.id)
      .throwIfNotFound();
    res.status(200).json(plannedTrip);
  })
  .put(authenticated, async (req, res) => {
    // Perform insert and send edited planned trip
    const { id, ...editedPlannedTrip } = req.body;
    const plannedTrip = await PlannedTrip.query().updateAndFetchById(
      id,
      editedPlannedTrip,
    );
    res.status(200).json(plannedTrip);
  });

export default router.handler({ onError });
