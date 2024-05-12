import { createRouter } from "next-connect";
import SeatRequest from "../../../../models/SeatRequest";
import { onError } from "../../../../lib/middleware";

const router = createRouter();

router.get(async (req, res) => {
  const request = await SeatRequest.query()
    .findById(req.query.id)
    .throwIfNotFound();
  res.status(200).json(request);
});

export default router.handler({ onError });
