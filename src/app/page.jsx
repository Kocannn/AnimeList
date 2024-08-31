"use client";
import React, { Suspense, lazy } from "react";
import { useEffect, useState } from "react";
import { getServerSideProps as getAnime } from "../libs/api-libs";
import { debounce } from "lodash";
const AnimeList = lazy(() => import("../components/animeList/index"));
const Header = lazy(() => import("../components/animeList/Header"));
import { getNestedResponse, reproduce } from "../libs/api-libs";
import Loading from "./loading";

const Page = () => {
  const [loading, setLoading] = useState(true);
  const [data, setData] = useState({
    anime: [],
    manga: [],
    rekomendasiAnime: [],
  });
  const fetch = debounce(async () => {
    setLoading(true);
    const controller = new AbortController();
    const { signal } = controller;

    try {
      let [topAnimeResponse, topMangaResponse, rekomendasiAnimeResponse] =
        await Promise.all([
          getAnime("top/anime", "limit=5", { signal }),
          getAnime("top/manga", "limit=5", { signal }),
          getNestedResponse("recommendations/anime", "entry", { signal }),
        ]);

      let topAnime = topAnimeResponse.props.data;
      let topManga = topMangaResponse.props.data;
      let rekomendasiAnime = reproduce(rekomendasiAnimeResponse, 5);

      setData({
        anime: topAnime,
        manga: topManga,
        rekomendasiAnime,
      });
    } catch (error) {
      console.error("Error fetching data: ", error);
    } finally {
      setLoading(false);
    }
  }, 250);

  useEffect(() => {
    fetch();
  }, []);
  return (
    <>
      {!loading ? (
        <Suspense fallback={<Loading />}>
          <div className="p-8">
            <section>
              <Header
                title={"Top Manga"}
                linkTitle={"View All"}
                linkHref={"/top/manga"}
              />
              <AnimeList api={data.manga} context={"manga"} />
            </section>
            <section>
              <Header
                title={"Top Anime"}
                linkTitle={"View All"}
                linkHref={"/top/anime"}
              />
              <AnimeList api={data.anime} context={"anime"} />
            </section>
            <section>
              <Header
                title={"Recomnedations"}
              />
              <AnimeList api={data.rekomendasiAnime} context={"recomendations"} />
            </section>
          </div>
        </Suspense>
      ) : (
        <Loading />
      )}
    </>
  );
};

export default Page;
