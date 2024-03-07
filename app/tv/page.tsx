import {
  getAiringTodayTV,
  getPopularTV,
  getTopRatedTV,
  geton_the_airTV,
} from "@/lib/getMovies";
import { SearchResults, TVSeries } from "@/typings"; // Import TVSeries type
import TVCarousel from "@/components/TVCarousel";
import CarouselBannerWrapperTV from "@/components/CarouselBannerWrapperTV";

export default function TV() {
  const fetchTVData = async () => {
    const airingTodayTV: TVSeries[] = await getAiringTodayTV(); // Ensure correct type
    const on_the_airTV: TVSeries[] = await geton_the_airTV(); // Ensure correct type
    const popularTV: TVSeries[] = await getPopularTV(); // Ensure correct type
    const topRatedTV: TVSeries[] = await getTopRatedTV(); // Ensure correct type
    return { airingTodayTV, on_the_airTV, popularTV, topRatedTV };
  };

  return (
    <main className="">
      <CarouselBannerWrapperTV />
      <div className="flex flex-col space-y-2 xl:mt-48">
        {/* Fetch TV series data */}
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
