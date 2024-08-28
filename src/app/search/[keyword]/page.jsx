"use client";
import { getAnimeResponse } from "../../../libs/api-libs";
import {
  GenerateAnime,
  GenerateManga,
} from "../../../components/animeList/GenerateList";
import Pagignation from "../../../components/utilities/Pagignation";
import { useEffect, useState } from "react";
import dynamic from "next/dynamic";
import { Suspense } from "react";
import Loading from "../../loading";
const Header = dynamic(() => import("../../../components/animeList/Header"), {
  ssr: false,
});

const Page = ({ params }) => {
  const { keyword } = params;
  const decodedKeyword = decodeURI(keyword);
  const [page, setPage] = useState(1);
  const [data, setData] = useState({ anime: [], manga: [] });
  const [lastPage, setLastPage] = useState(null);
  const [loading, setLoading] = useState(true);

  const fetchData = async () => {
    setLoading(true);
    const controller = new AbortController();
    const { signal } = controller;
    try {
      const [animeResponse, mangaResponse] = await Promise.all([
        getAnimeResponse("anime", `q=${decodedKeyword}&page=${page}`, {
          signal,
        }),
        getAnimeResponse("manga", `q=${decodedKeyword}&page=${page}`, {
          signal,
        }),
      ]);
      setData({ anime: animeResponse, manga: mangaResponse });
      setLastPage(animeResponse.pagination.last_visible_page);
    } catch (err) {
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchData().catch();
  }, [decodedKeyword, page]);
  return (
    <>
      <Header />
      <Suspense fallback={<Loading />}>
        {!loading ? (
          <div className="grid md:grid-cols-5 sm:grid-cols-3 grid-cols-2 px-4 gap-4 h-auto pb-6">
            <>
              <GenerateAnime api={data.anime} />
              <GenerateManga api={data.manga} />
            </>
          </div>
        ) : (
          <Loading />
        )}
        <Pagignation page={page} lastPage={lastPage} setPage={setPage} />
      </Suspense>
    </>
  );
};

export default Page;
