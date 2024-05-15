import { createRouter } from "next-connect";
import authenticated from "@/lib/middleware";
import SeatRequest from "../../../../models/SeatRequest";
import { onError } from "../../../../lib/middleware";

const router = createRouter();


router.get(authenticated, async (req, res) => {
  const requests = await SeatRequest.query();
  res.status(200).json(requests);
});


router.post(authenticated, async (req, res) => {
  const newRequest = await SeatRequest.query().insertAndFetch(req.body);
  res.status(200).json(newRequest);
});

export default router.handler({ onError });
