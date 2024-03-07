// Home.tsx

import React from "react";
import CarouselBannerWrapper from "@/components/CarouselBannerWrapper";
import MoviesCarousel from "@/components/MovieCarousel";
import {
  getNowPlayingMovies,
  getPopularMovies,
  getTopRatedMovies,
  getUpcomingMovies,
} from "@/lib/getMovies";
import { SearchResults } from "@/typings";
import Image from "next/image";

export default function Home() {
  async function getSearchedMovies(term: string) {
    const url = new URL("https://api.themoviedb.org/3/search/movie");

    url.searchParams.set("query", term);
    url.searchParams.set("include_adult", "false");
    url.searchParams.set("language", "en-US");
    url.searchParams.set("page", "1");

    const options: RequestInit = {
      method: "GET",
      headers: {
        accept: "application/json",
        Authorization: `Bearer ${process.env.TMDB_API_KEY}`,
      },
      next: {
        revalidate: 60 * 60 * 24,
      },
    };

    const response = await fetch(url.toString(), options);
    const data = (await response.json()) as SearchResults;

    return data.results;
  }

  const fetchMoviesData = async () => {
    const upcomingMovies = await getUpcomingMovies();
    const topRatedMovies = await getTopRatedMovies();
    const popularMovies = await getPopularMovies();
    const nowPlayingMovies = await getNowPlayingMovies();
    return { upcomingMovies, topRatedMovies, popularMovies, nowPlayingMovies };
  };

  return (
    <main className="">
      <CarouselBannerWrapper />
      <div className="flex flex-col space-y-2 xl:mt-48">
        {/* Fetch movies data */}
        {fetchMoviesData().then(
          ({
            upcomingMovies,
            topRatedMovies,
            popularMovies,
            nowPlayingMovies,
          }) => (
            <>
              <MoviesCarousel movies={nowPlayingMovies} title="Now Playing" />
              <MoviesCarousel movies={popularMovies} title="Popular" />
              <MoviesCarousel movies={topRatedMovies} title="Top Rated" />
              <MoviesCarousel movies={upcomingMovies} title="Upcoming" />
            </>
          )
        )}
      </div>
    </main>
  );
}
