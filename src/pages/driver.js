import styles from "@/styles/Home.module.css";
import { Inter } from "next/font/google";
import { useRouter } from "next/router";

const inter = Inter({ subsets: ["latin"] });

export default function Driver() {
  const router = useRouter();
  const handleClick = (comm) => {
    router.push(`/${comm}`);
  };
  return (
    <div>
      <button
        type="button"
        className={styles.card}
        onClick={() => handleClick("profile")}
      >
        <h2 className={inter.className}>
          Profile <span>-&gt;</span>
        </h2>
      </button>
      <button
        type="button"
        className={styles.card}
        onClick={() => handleClick("")}
      >
        <h2 className={inter.className}>
          Home <span>-&gt;</span>
        </h2>
      </button>
      <p>Proposed Trips</p>
      <button
        type="button"
        className={styles.card}
        onClick={() => handleClick("newPlannedTrip")}
      >
        <h2 className={inter.className}>
          New Ride <span>-&gt;</span>
        </h2>
      </button>
    </div>
  );
}
