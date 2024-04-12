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
    <div className={styles.component}>
      <div className={styles.grid}>
        <button
          type="button"
          className={styles.profileButton}
          onClick={() => handleClick("profile")}
        >
          <h2 className={inter.className}>Profile</h2>
        </button>
        <button
          type="button"
          className={styles.homeButton}
          onClick={() => handleClick("")}
        >
          <h2 className={inter.className}>Home</h2>
        </button>
      </div>
      <h1 className={inter.className}>Driver Portal</h1>
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
