import { createRouter } from "next-connect";
import authenticated from "@/lib/middleware";
import SeatRequest from "../../../../models/SeatRequest";
import { onError } from "../../../../lib/middleware";

const router = createRouter();

router.post(authenticated, async (req, res) => {
  const newRequest = await SeatRequest.query().insertAndFetch(req.body);
  res.status(200).json(newRequest);
});

// Example of how to call this API route from the client side:
// const response = await fetch(`/api/seatRequest`, {
// method: "POST",
// body: JSON.stringify({
//     id: 3,
//     requester: 1,
//     status: "pending",
//     time: "2024-04-13T15:23:01.000Z",
//     plannedTripId: 1,
// }),
// headers: new Headers({
//     Accept: "application/json",
//     "Content-Type": "application/json",
// }),
// });

export default router.handler({ onError });
