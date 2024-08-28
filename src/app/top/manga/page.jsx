"use client";

import Pagignation from "../../../components/utilities/Pagignation";
import React, { lazy, useEffect, useState } from "react";
import { getAnimeResponse } from "../../../libs/api-libs";
import { Suspense } from "react";
import Loading from "../../loading";
const Header = lazy(() => import("../../../components/animeList/Header"));
const AnimeList = lazy(() => import("../../../components/animeList/index"));

const Page = () => {
  const [page, setPage] = useState(1);
  const [topManga, setTopManga] = useState([]);
  const [loading, setLoading] = useState(true);
  const fetchData = async () => {
    setLoading(true);
    try {
      const data = await getAnimeResponse("top/manga", `page=${page}`);
      setTopManga(data);
    } catch {
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchData();
  }, [page]);

  return (
    <>
      <div className="mt-4">
        <Header title={"Top Manga"} />
      </div>
      {!loading ? (
        <>
          <Suspense fallback={<Loading />}>
            <AnimeList api={topManga} context={"manga"} />
            <Pagignation
              page={page}
              lastPage={topManga.pagination?.last_visible_page}
              setPage={setPage}
            />
          </Suspense>
        </>
      ) : (
        <Loading />
      )}
    </>
  );
};

export default Page;
