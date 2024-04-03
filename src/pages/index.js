import Head from "next/head";
import { Inter } from "next/font/google";
import styles from "@/styles/Home.module.css";
import { useRouter } from "next/router";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  const router = useRouter();
  return (
    <>
      <Head>
        <title>Cutts App</title>
      </Head>
      <main className={styles.main}>
        <div className={styles.description}>
          <div>
            <a
              href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
              target="Profile"
             />
          </div>
        </div>

        <button
          type="button"
          className={styles.card}
          onClick={() => router.push("/profile")}
        >
          <h2 className={inter.className}>
            Profile <span>-&gt;</span>
          </h2>
        </button>

        <div className={styles.grid}>
          <button
            type="button"
            className={styles.card}
            onClick={() => router.push("/driver")}
          >
            <h2 className={inter.className}>
              Driver <span>-&gt;</span>
            </h2>
            <p className={inter.className}>View Planned Trips</p>
          </button>

          <button
            type="button"
            className={styles.card}
            onClick={() => router.push("/rider")}
          >
            <h2 className={inter.className}>
              Rider <span>-&gt;</span>
            </h2>
            <p className={inter.className}>View Proposed Trips</p>
          </button>
        </div>
      </main>
    </>
  );
}
