import styles from "@/styles/Home.module.css";
import { Inter } from "next/font/google";
import { useRouter } from "next/router";

const inter = Inter({ subsets: ["latin"] });

export default function Profile() {
  const router = useRouter();
  return (
    <div>
      <button
        type="button"
        className={styles.card}
        onClick={() => router.push("/")}
      >
        <h2 className={inter.className}>
          Home <span>-&gt;</span>
        </h2>
      </button>
      <p>Profile Information</p>
    </div>
  );
}
