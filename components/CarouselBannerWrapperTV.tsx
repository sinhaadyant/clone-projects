import { getDiscoverTV } from "@/lib/getMovies";
import CarouselBannerTV from "./CarouselBannerTV";

type Props = {
  id?: string;
  keywords?: string;
};

async function CarouselBannerWrapperTV({ id, keywords }: Props) {
  const movies = await getDiscoverTV(id, keywords);

  return <CarouselBannerTV movies={movies} />;
}

export default CarouselBannerWrapperTV;
