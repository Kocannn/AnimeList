"use client";

import Pagignation from "../../../components/utilities/Pagignation";
import React, { Suspense ,lazy, useEffect, useState } from "react";
import { getServerSideProps as getAnime , getAnimeResponse} from "../../../libs/api-libs";
import Loading from '../../loading'

const Header = lazy(() => import("../../../components/animeList/Header"));
const AnimeList = lazy(() => import("../../../components/animeList/index"))
const Page = () => {
  const [page, setPage] = useState(1);
  const [topAnime, setTopAnime] = useState([]);
  const [loading, setLoading] = useState(true);
  
  const fetchData = async () => {
    setLoading(true);
    try{
      const {props: {data: anime}} = await getAnime("top/anime", `page=${page}`);
      setTopAnime(anime);
    }catch{
      console.error(error)
    }finally{
      setLoading(false)
    }
  };

  useEffect(() => {
    fetchData();
  }, [page]);

  return (
    <>
      <div className="mt-4">
        <Header title={"Top Anime"} />
      </div>
      <Suspense fallback={<Loading />}>
      {!loading ? (
        <>
        <AnimeList api={topAnime} context={"anime"} />
        <Pagignation
          page={page}
          lastPage={topAnime.pagination?.last_visible_page}
          setPage={setPage}
          />
          </>
      ): <Loading /> }
        </Suspense>
    </>
  );
};

export default Page;
