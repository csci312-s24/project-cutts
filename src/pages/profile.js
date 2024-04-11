import styles from "@/styles/Home.module.css";
import { Inter } from "next/font/google";
import { useRouter } from "next/router";
import CarInfo from "../components/CarInfo";
import UserShape from "../components/UserShape";

const inter = Inter({ subsets: ["latin"] });

export default function Profile({
  User = {
    make: "Honda",
    model: "CRV",
    year: 2015,
    plate: "MIDDCar1",
  },
}) {
  // routing
  const router = useRouter();
  const handleClick = (comm) => {
    router.push(`/${comm}`);
  };

  // editing profile
  const toProfileEditor = () => {
    router.push(`/editProfile`);
  };

  // hardcoded for now - normally get these from the AppUser prop
  const hasCar = true;

  return (
    <div className={styles.component}>
      <div>
        <h1 className={inter.className}>Profile Information</h1>

        <button
          type="button"
          className={styles.card}
          onClick={() => handleClick("")}
        >
          <h2 className={inter.className}>
            Home <span>-&gt;</span>
          </h2>
        </button>
        <button
          type="button"
          className={styles.card}
          onClick={() => toProfileEditor()}
        >
          <h2 className={inter.className}>
            Edit Profile <span>-&gt;</span>
          </h2>
        </button>
      </div>
      <div>
        <ul>Name: </ul>
        <ul>Email: </ul>
        <ul>Phone Number: </ul>
        <ul>Grad Year: </ul>

        {hasCar && <CarInfo car={User} />}
      </div>
    </div>
  );
}

Profile.propTypes = {
  User: UserShape,
};
