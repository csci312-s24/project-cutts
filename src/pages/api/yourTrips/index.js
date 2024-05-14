import { createRouter } from "next-connect";
import { getServerSession } from "next-auth/next";
import PlannedTrip from "../../../../models/PlannedTrip";
import ProposedTrip from "../../../../models/ProposedTrip";
import { authOptions } from "../auth/[...nextauth]";

const router = createRouter();

router.get(async (req, res) => {
  const session = await getServerSession(req, res, authOptions);
  const currentDate = new Date();
  if (session) {
    const yourPlannedTrips = await PlannedTrip.query()
      .where("date", ">", currentDate)
      .orderBy("date")
      .where("driverID", session.user.id)
      .withGraphFetched("relatedUser");
    const yourProposedTrips = await ProposedTrip.query()
      .where("date", ">", currentDate)
      .orderBy("date")
      .where("proposer", session.user.id)
      .withGraphFetched("relatedProposer");
    res.status(200).json([yourPlannedTrips, yourProposedTrips]);
  }
});

export default router.handler({});
