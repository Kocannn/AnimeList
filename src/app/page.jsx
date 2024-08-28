import React, { Suspense, lazy } from "react";

const AnimeList = lazy(() => import("../components/animeList/index"));
const Header = lazy(() => import("../components/animeList/Header"));
import { getAnimeResponse, getNestedResponse, reproduce } from "../libs/api-libs";
import Loading from "./loading";

const Page = async () => {
  try {
    // Menggunakan Promise.all untuk mengambil data secara paralel
    const [topAnime, topManga] = await Promise.all([
      getAnimeResponse('top/anime', 'limit=6'),
      getAnimeResponse('top/manga', 'limit=6')
    ]);

    // Mengambil dan memproses rekomendasi anime
    let rekomendasiAnime = await getNestedResponse('recommendations/anime', 'entry');
    rekomendasiAnime = reproduce(rekomendasiAnime, 6);

    return (
      <>
        <Suspense fallback={<Loading />}>
          <section>
            <Header title={"Top Manga"} linkTitle={"View All"} linkHref={"/top/manga"} />
            <AnimeList api={topManga} context={'manga'} />
          </section>

          <section>
            <Header title={"Top Anime"} linkTitle={"View All"} linkHref={"/top/anime"} />
            <AnimeList api={topAnime} context={'anime'} />
          </section>

          <section>
            <Header title={"Recommendation"} />
            <AnimeList api={rekomendasiAnime} context={'anime'} />
          </section>
        </Suspense>
      </>
    );
  } catch (error) {
    console.error('Error fetching data: ', error);
    return <div>Error loading content</div>;
  }
};

export default Page;
