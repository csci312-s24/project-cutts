import { createRouter } from "next-connect";
import { getServerSession } from "next-auth/next";
import { authOptions } from "../auth/[...nextauth]";
import PlannedTrip from "../../../../models/PlannedTrip";
import { onError } from "../../../../lib/middleware";

const router = createRouter();

router.get(async (req, res) => {
  const currentDate = new Date();
  const plannedTrips = await PlannedTrip.query().where(
    "date",
    ">",
    currentDate,
  );
  res.status(200).json(plannedTrips);
});

router.post(async (req, res) => {
  console.log("get to post");
  const session = await getServerSession(req, res, authOptions);
  if (session) {
    console.log(req.body);
    // Perform insert and send planned trip
    const plannedTrip = await PlannedTrip.query().insertAndFetch(req.body);
    res.status(200).json(plannedTrip);
  } else {
    res.status(403).end("You must be signed in to access this endpoint.");
  }
});

export default router.handler({});
