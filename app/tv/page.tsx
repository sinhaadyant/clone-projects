// Home.tsx

import {
  getAiringTodayTV,
  getPopularTV,
  getTopRatedTV,
  geton_the_airTV,
} from "@/lib/getMovies";
import { SearchResults } from "@/typings";
import TVCarousel from "@/components/TVCarousel";
import CarouselBannerWrapperTV from "@/components/CarouselBannerWrapperTV";

export default function TV() {
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

  const fetchTVData = async () => {
    const airingTodayTV = await getAiringTodayTV();
    const on_the_airTV = await geton_the_airTV();
    const popularTV = await getPopularTV();
    const topRatedTV = await getTopRatedTV();
    return { airingTodayTV, on_the_airTV, popularTV, topRatedTV };
  };

  return (
    <main className="">
      <CarouselBannerWrapperTV />
      <div className="flex flex-col space-y-2 xl:mt-48">
        {/* Fetch movies data */}
        {fetchTVData().then(
          ({ airingTodayTV, on_the_airTV, popularTV, topRatedTV }) => (
            <>
              <TVCarousel
                movies={airingTodayTV.reverse()}
                title="Airing Today"
              />
              <TVCarousel movies={on_the_airTV} title="On The Air" />
              <TVCarousel movies={popularTV} title="Popular" />
              <TVCarousel movies={topRatedTV} title="Top Rated" />
            </>
          )
        )}
      </div>
    </main>
  );
}
