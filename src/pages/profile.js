/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import styles from "@/styles/Home.module.css";
import React, { useState } from "react";
import { Inter } from "next/font/google";
import { useRouter } from "next/router";
import CarInfo from "../components/CarInfo";

const inter = Inter({ subsets: ["latin"] });

export default function Profile({ User }) {
  // routing
  const router = useRouter();
  const handleClick = (comm) => {
    router.push(`/${comm}`);
  };

  // editing profile
  const toProfileEditor = () => {
    router.push(`/appUserProfileEdit`);
  };

  // hardcoded for now - normally get these from the AppUser prop
  const hasCar = true;
  const UserCar = {
    make: "Honda",
    model: "CRV",
    year: 2015,
    plate: "MIDDCar1",
  };

  return (
    <div>
      <div>
        <button
          type="button"
          className={styles.card}
          onClick={() => handleClick("")}
        >
          <h2 className={inter.className}>
            Home <span>-&gt;</span>
          </h2>
        </button>
        <h1 className={inter.className}>Profile Information</h1>
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

        {hasCar && <CarInfo car={UserCar} />}
      </div>
    </div>
  );
}
