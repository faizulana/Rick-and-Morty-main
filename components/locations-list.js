import Link from "next/link";
import React, { useContext } from "react";
import { LocationsContext } from "../store";
import styles from "../styles/Home.module.css";
import { LocationCard } from "./locations-card";

export const LocationsList = () => {
  const { locations } = useContext(LocationsContext);

  return (
    <main className={styles.main}>
      {locations.map((location) => (
        <Link href={`/locations/${location.id}`} key={location.id}>
          <LocationCard
            name={location.name}
            type={location.type}
            dimension={location.dimension}
          />
        </Link>
      ))}
    </main>
  );
};
