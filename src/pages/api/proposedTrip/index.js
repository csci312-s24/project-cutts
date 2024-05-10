import { createRouter } from "next-connect";
import authenticated from "@/lib/middleware";
import { onError } from "../../../../lib/middleware";
import ProposedTrip from "../../../../models/ProposedTrip";

const router = createRouter();

router.get(async (req, res) => {
  const currentDate = Date.now();
  const proposedTrips = await ProposedTrip.query().where(
    "date",
    ">",
    currentDate,
  );
  res.status(200).json(proposedTrips);
});

router.post(authenticated, async (req, res) => {
  console.log("here1");
  console.log(req.body);
  const proposedTrip = await ProposedTrip.query().insertAndFetch(req.body);
  console.log("here2");
  console.log(proposedTrip);
  res.status(200).json(proposedTrip);
});

export default router.handler({ onError });
