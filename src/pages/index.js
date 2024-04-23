import Head from "next/head";
import { Inter } from "next/font/google";
import styles from "@/styles/Home.module.css";
import { useRouter } from "next/router";
import LoginWidget from "@/components/LoginWidget";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  const router = useRouter();
  const handleClick = (comm) => {
    router.push(`/${comm}`);
  };

  return (
    <>
      <Head>
        <title>Cutts App</title>
      </Head>

      <main className={styles.main}>
        <div className={styles.title}>
          <h1 className={inter.className}>Midd Rideshare</h1>
          <p className={inter.className}>
            Get rides to Burlington, Boston, or wherever else you may need to
            go!
          </p>
          <LoginWidget />
        </div>

        <button
          type="button"
          className={styles.profileButton}
          onClick={() => handleClick("profile")}
        >
          <h2 className={inter.className}>Profile</h2>
        </button>

        <div className={styles.grid}>
          {/* <button
            type="button"
            className={styles.card}
            onClick={() => handleClick("profile")}
          >
            <h2 className={inter.className}>
              Profile <span>-&gt;</span>
            </h2>
          </button> */}
          <button
            type="button"
            className={styles.card}
            onClick={() => handleClick("driver")}
          >
            <h2 className={inter.className}>
              Driver Portal<span>-&gt;</span>
            </h2>
            <p className={inter.className}>View Proposed Trips</p>
          </button>

          <button
            type="button"
            className={styles.card}
            onClick={() => handleClick("rider")}
          >
            <h2 className={inter.className}>
              Rider Portal<span>-&gt;</span>
            </h2>
            <p className={inter.className}>View Planned Trips</p>
          </button>
        </div>
      </main>
    </>
  );
}
