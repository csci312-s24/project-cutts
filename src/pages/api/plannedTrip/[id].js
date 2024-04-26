// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

import { createRouter } from "next-connect";
import { getServerSession } from "next-auth/next";
import PlannedTrip from "../../../../models/PlannedTrip";
import { onError } from "../../../../lib/middleware";
import { authOptions } from "../auth/[...nextauth]";

const router = createRouter();

router
  .get(async (req, res) => {
    const plannedTrip = await PlannedTrip.query()
      .findById(req.query.id)
      .throwIfNotFound();
    res.status(200).json(plannedTrip);
  })
  .put(async (req, res) => {
    const session = await getServerSession(req, res, authOptions);
    if (session) {
      // Perform insert and send edited planned trip
      const { id, ...editedPlannedTrip } = req.body;
      const plannedTrip = await PlannedTrip.query().updateAndFetchById(
        id,
        editedPlannedTrip,
      );
      res.status(200).json(plannedTrip);
    } else {
      res.status(403).end("You must be signed in to access this endpoint.");
    }
  });

export default router.handler({ onError });
