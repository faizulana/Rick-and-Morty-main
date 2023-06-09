import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";

export default function EpisodeProfile() {
  const router = useRouter();
  const [data, setData] = useState({});
  const [episodes, setEpisodes] = useState([]);

  useEffect(() => {
    fetch(`https://rickandmortyapi.com/api/episode/${router.query.pid}`)
      .then((res) => res.json())
    // Логика, если эпизоды будут приходить массивом IRI
      .then(async (res) => {
        console.log('in')
        if (res.episode?.length) {
          await fetch(
            `https://rickandmortyapi.com/api/episode/${res.episode
              .map((episode) => episode.split("/").pop())
              .join(",")}`
          )
            .then((res) => res.json())
            .then((episodes) => (res.episode = episodes));
        }

        return res;
      })
      .then((res) => setData(res));
  }, []);

  useEffect(() => {
    if (data !== {}) {
      data.characters?.map((character) => {
        const characterId = character.split('/character/')[1];

        fetch(`https://rickandmortyapi.com/api/character/${characterId}`)
          .then((res) => res.json())
          .then((data) => {
            setCharacters((prev) => [...prev, data]);
          });
      });
    }
  }, [data]);

  console.log(data);

  return (
    <>
      <Head>
        <title>{data.name}</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
        <Image
          src={data.image}
          width={300}
          height={300}
          style={{ borderRadius: "9999px" }}
        />
        <h1>{data.name}</h1>
        <h3>{data.episode}</h3>
        <div style={{ display: "grid", gridColumn: 2, gap: "10px" }}>
          <div
            style={{ display: "flex", flexDirection: "column", gap: "10px" }}
          >
            <h3>Informations</h3>
          </div>
          <div
            style={{ display: "flex", flexDirection: "column", gap: "10px" }}
          >
            <h3>characters</h3>
            {characters?.map((character, index) => {
              return (
                <Link href={`/characters/${character.id}`} key={index}>
                  <CharactersCard
                    name={character.name}
                    species={character.species}
                    image={character.image}
                  />
                </Link>
              );
            })}
          </div>
        </div>
      </main>
    </>
  );
}
