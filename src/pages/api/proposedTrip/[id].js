// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

import { createRouter, onError } from "next-connect";
import authenticated from "@/lib/middleware";

import ProposedTrip from "../../../../models/PlannedTrip";

const router = createRouter();

router
  .get(async (req, res) => {
    const proposedTrip = await ProposedTrip.query()
      .findById(req.query.id)
      .throwIfNotFound();
    res.status(200).json(proposedTrip);
  })
  .put(authenticated, async (req, res) => {
    const { id, ...editedProposedTrip } = req.body;
    const proposedTrip = await ProposedTrip.query().updateAndFetchById(
      id,
      editedProposedTrip,
    );
    res.status(200).json(proposedTrip);
  });

export default router.handler({ onError });
